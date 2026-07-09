import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

function stripUrlPart(s) {
  return String(s || '').split('#')[0].split('?')[0];
}

function normalizeAssetPath(path) {
  let p = stripUrlPart(path).replace(/\\/g, '/');
  try {
    if (/^[a-z][a-z0-9+.-]*:/i.test(p) && !/^[a-z]:/i.test(p)) p = new URL(p, window.location.href).pathname;
  } catch (_) {
    // そのまま相対パスとして扱う
  }
  try { p = decodeURIComponent(p); } catch (_) { /* malformed escape はそのまま */ }
  p = p.replace(/^\/+/, '');
  while (p.startsWith('./')) p = p.slice(2);
  return p;
}

function basename(path) {
  return normalizeAssetPath(path).split('/').pop();
}

function dirname(path) {
  const p = normalizeAssetPath(path);
  const i = p.lastIndexOf('/');
  return i >= 0 ? p.slice(0, i + 1) : '';
}

function isEmbeddedOrRemote(url) {
  return /^(data:|blob:|https?:)/i.test(String(url || ''));
}

function createLoader({ assetFiles = [] } = {}) {
  const manager = new THREE.LoadingManager();
  const objectUrls = new Map();
  const byPath = new Map();
  const byName = new Map();
  const missing = new Set();

  for (const file of assetFiles) {
    const path = normalizeAssetPath(file.webkitRelativePath || file.name).toLowerCase();
    if (path) byPath.set(path, file);
    byName.set(file.name.toLowerCase(), file);
  }

  if (assetFiles.length) {
    manager.setURLModifier((url) => {
      if (isEmbeddedOrRemote(url)) return url;
      const path = normalizeAssetPath(url).toLowerCase();
      const file = byPath.get(path) || byName.get(basename(path).toLowerCase());
      if (!file) {
        if (path) missing.add(normalizeAssetPath(url));
        return url;
      }
      if (!objectUrls.has(file)) objectUrls.set(file, URL.createObjectURL(file));
      return objectUrls.get(file);
    });
  }

  return {
    loader: new GLTFLoader(manager),
    missing,
    dispose() {
      for (const url of objectUrls.values()) URL.revokeObjectURL(url);
      objectUrls.clear();
    },
  };
}

/** THREE.Texture / ImageBitmap / HTMLImage を画素データ(RGBA)に変換 */
function imageToPixels(image) {
  const w = image.width || image.naturalWidth;
  const h = image.height || image.naturalHeight;
  if (!w || !h) return null;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(image, 0, 0, w, h);
  const id = ctx.getImageData(0, 0, w, h);
  return { data: new Uint8Array(id.data.buffer.slice(0)), width: w, height: h };
}

/**
 * GLB/GLTF を読み、全メッシュを position+uv の1ジオメトリに統合。
 * baseColor テクスチャがあれば画素を取り出して返す。
 * .gltf の外部 .bin/画像は assetFiles から相対パスまたはファイル名で解決する。
 * @returns {{ merged, display, texture }} texture は {data,width,height}|null
 */
export async function loadGLB(arrayBuffer, { assetFiles = [], rootPath = '' } = {}) {
  const { loader, missing, dispose } = createLoader({ assetFiles });
  try {
    const gltf = await loader.parseAsync(arrayBuffer, dirname(rootPath));
    gltf.scene.updateMatrixWorld(true);

    const geoms = [];
    let texImage = null;

    gltf.scene.traverse((obj) => {
      if (!obj.isMesh || !obj.geometry) return;

      // baseColor テクスチャ画像を確保(最初に見つかったもの)
      if (!texImage && obj.material && obj.material.map && obj.material.map.image) {
        texImage = obj.material.map.image;
      }

      const src = obj.geometry;
      const pos = src.getAttribute('position');
      if (!pos) return;

      const g = new THREE.BufferGeometry();
      g.setAttribute('position', pos.clone());
      // UV を保持(無ければゼロ埋めしてマージ可能に)
      const uv = src.getAttribute('uv');
      if (uv) g.setAttribute('uv', uv.clone());
      else g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(pos.count * 2), 2));
      if (src.index) g.setIndex(src.index.clone());

      g.applyMatrix4(obj.matrixWorld); // position をワールドへ(uvは不変)
      geoms.push(g);
    });

    if (geoms.length === 0) throw new Error('メッシュが見つかりませんでした');

    // index の有無を揃える
    const anyIndexed = geoms.some((g) => g.index);
    const allIndexed = geoms.every((g) => g.index);
    let normalized = geoms;
    if (anyIndexed && !allIndexed) {
      normalized = geoms.map((g) => (g.index ? g.toNonIndexed() : g));
    }

    const merged = normalized.length === 1 ? normalized[0] : mergeGeometries(normalized, false);
    if (!merged) throw new Error('ジオメトリのマージに失敗しました');

    merged.computeBoundingBox();
    merged.computeVertexNormals();

    // テクスチャ画素
    let texture = null;
    if (texImage) {
      try { texture = imageToPixels(texImage); }
      catch (e) { console.warn('テクスチャの取得に失敗:', e); }
    }

    // 表示用は元のシーン(色付き)をそのまま使う
    const display = gltf.scene;

    return { merged, display, texture };
  } catch (err) {
    if (missing.size) {
      throw new Error(`GLTFの外部ファイルが見つかりません: ${Array.from(missing).join(', ')}。gltf本体と関連する .bin/画像を一緒に選択またはドロップしてください。`);
    }
    throw err;
  } finally {
    dispose();
  }
}
