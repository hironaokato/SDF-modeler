// .sdfm : モデリングシーン(SDFのみ埋め込み・自己完結 / 元GLBは持たない)
import { encodeContainer, decodeContainer } from './binFormat.js';
import { decodeMesh } from './sdfFile.js';

const MAGIC = 'SDFM';
const VERSION = 1;

/**
 * @param {Object} scene
 * @param {Object} scene.grid          {cellSize, unit, unitScaleMm, stlUnit}
 * @param {Object[]} scene.objects     シリアライズ済みオブジェクト(SdfScene.serialize)
 * @param {Object[]} scene.volumes     VolumeData 配列(距離/色グリッド埋め込み)
 */
export function encodeSDFM(scene) {
  const blobs = [];
  let off = 0;
  const volumes = scene.volumes.map((v) => {
    const entry = {
      name: v.name,
      resolution: v.resolution,
      min: v.min,
      max: v.max,
      modelBounds: v.modelBounds || null,
      signed: !!v.signed,
      hasColor: !!(v.hasColor && v.color),
      hasMesh: !!(v.mesh && v.mesh.positions),
      blobs: { distance: { off, len: v.distance.byteLength } },
    };
    blobs.push(v.distance);
    off += v.distance.byteLength;
    if (entry.hasColor) {
      entry.blobs.color = { off, len: v.color.byteLength };
      blobs.push(v.color);
      off += v.color.byteLength;
    }
    if (entry.hasMesh) {
      entry.blobs.meshPos = { off, len: v.mesh.positions.byteLength };
      blobs.push(v.mesh.positions); off += v.mesh.positions.byteLength;
      entry.meshIndexed = !!v.mesh.index;
      if (v.mesh.index) {
        entry.blobs.meshIdx = { off, len: v.mesh.index.byteLength };
        blobs.push(v.mesh.index); off += v.mesh.index.byteLength;
      }
    }
    return entry;
  });

  const manifest = { grid: scene.grid, objects: scene.objects, volumes };
  return encodeContainer(MAGIC, VERSION, manifest, blobs);
}

export function decodeSDFM(arrayBuffer) {
  const { magic, manifest, slice } = decodeContainer(arrayBuffer);
  if (magic !== MAGIC) throw new Error(`.sdfm ではありません (magic=${magic})`);
  const volumes = manifest.volumes.map((e) => {
    const d = e.blobs.distance;
    const distance = new Float32Array(slice(d.off, d.len));
    let color = null;
    if (e.hasColor && e.blobs.color) color = new Uint8Array(slice(e.blobs.color.off, e.blobs.color.len));
    return {
      name: e.name, resolution: e.resolution, min: e.min, max: e.max,
      modelBounds: e.modelBounds || null,
      signed: e.signed, hasColor: !!color, distance, color,
      mesh: decodeMesh(e, slice),
    };
  });
  return { grid: manifest.grid, objects: manifest.objects, volumes };
}

export function isSDFM(arrayBuffer) {
  if (arrayBuffer.byteLength < 4) return false;
  const dv = new DataView(arrayBuffer);
  return String.fromCharCode(dv.getUint8(0), dv.getUint8(1), dv.getUint8(2), dv.getUint8(3)) === MAGIC;
}
