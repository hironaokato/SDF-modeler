import * as THREE from 'three';
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';
import { PRIM_BY_KIND } from '../core/primitives.js';
import { downloadArrayBuffer } from './binFormat.js';

/**
 * セルサイズ(scene単位)からMCグリッドの寸法を計画する。軸ごとの分割数を maxAxis で上限。
 * @returns {{min:number[],max:number[],ext:number[],dims:number[],clamped:boolean,cellUsed:number[]}}
 */
export function planMesh(sdfScene, cellSize, maxAxis = 1280) {
  const box = sdfScene.worldBounds();
  const size = box.getSize(new THREE.Vector3());
  const pad = size.length() * 0.03;
  const min = [box.min.x - pad, box.min.y - pad, box.min.z - pad];
  const max = [box.max.x + pad, box.max.y + pad, box.max.z + pad];
  const ext = [max[0] - min[0], max[1] - min[1], max[2] - min[2]];
  let clamped = false;
  const dims = ext.map((e) => {
    let n = Math.max(1, Math.round(e / cellSize));
    if (n > maxAxis) { n = maxAxis; clamped = true; }
    return n;
  });
  const cellUsed = ext.map((e, i) => e / dims[i]);
  return { min, max, ext, dims, clamped, cellUsed };
}

/**
 * シーンを Marching Cubes でメッシュ化(scene単位の頂点配列を返す)。
 * @param {{cellSize:number, maxAxis?:number}} opts cellSize は scene単位
 */
export function generateSceneMesh(sdfScene, opts, onProgress) {
  return new Promise((resolve, reject) => {
    if (sdfScene.objects.length === 0) { reject(new Error('オブジェクトがありません')); return; }
    const { cellSize, maxAxis = 1280 } = opts;

    const volIndex = new Map(sdfScene.volumes.map((v, i) => [v, i]));
    let hiDetail = false;
    // ボリュームの「元データ」(コピー元)。各ワーカーへ複製して渡す。
    const srcVolumes = sdfScene.volumes.map((v) => {
      if (v.data.mesh && v.data.mesh.positions) hiDetail = true;
      return v.data;
    });

    const objects = sdfScene.objects.map((o) => {
      o.node.updateMatrixWorld(true);
      const inv = new THREE.Matrix4().copy(o.node.matrixWorld).invert();
      const sc = o.node.scale;
      const scale = Math.max(Math.min(Math.abs(sc.x), Math.abs(sc.y), Math.abs(sc.z)), 1e-5);
      const base = { kind: o.kind, op: o.op, smoothK: o.smoothK || 0, inv: Array.from(inv.elements), scale, array: { ...o.array } };
      if (o.isVolume) base.volSlot = volIndex.get(o.volume);
      else { const prim = PRIM_BY_KIND.get(o.kind); const p = prim.pack(o.params || {}); base.a = p.a; base.b = p.b; }
      return base;
    });

    const { min, max, dims, clamped, cellUsed } = planMesh(sdfScene, cellSize, maxAxis);
    const nz = dims[2];

    // Z をワーカー数で分割(各ワーカーは連続したセル範囲を担当)
    const cores = (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) || 4;
    const W = Math.max(1, Math.min(cores, 8, nz));
    const ranges = [];
    const per = Math.ceil(nz / W);
    for (let z0 = 0; z0 < nz; z0 += per) ranges.push([z0, Math.min(z0 + per, nz)]);
    const count = ranges.length;

    const results = new Array(count);
    const progresses = new Array(count).fill(0);
    let finished = 0, failed = false;
    const workers = [];
    const cleanup = () => workers.forEach((w) => w.terminate());

    // 各ワーカー用にボリュームを複製(transferで渡すと元が無効化されるため)
    const cloneVolumes = () => srcVolumes.map((d) => {
      const out = { res: d.resolution, min: d.min, max: d.max, distance: new Float32Array(d.distance), mesh: null };
      if (d.mesh && d.mesh.positions) {
        out.mesh = { positions: new Float32Array(d.mesh.positions), index: d.mesh.index ? new Uint32Array(d.mesh.index) : null };
      }
      return out;
    });

    ranges.forEach((rg, wi) => {
      const worker = new Worker(new URL('../marchWorker.js', import.meta.url), { type: 'module' });
      workers.push(worker);
      const vols = cloneVolumes();
      const transfer = [];
      for (const v of vols) { transfer.push(v.distance.buffer); if (v.mesh) { transfer.push(v.mesh.positions.buffer); if (v.mesh.index) transfer.push(v.mesh.index.buffer); } }
      worker.onmessage = (e) => {
        const m = e.data;
        if (m.type === 'progress') {
          progresses[wi] = m.value;
          if (onProgress) onProgress(progresses.reduce((a, b) => a + b, 0) / count);
          return;
        }
        if (m.type === 'done') {
          results[wi] = m.positions;
          worker.terminate();
          if (++finished === count && !failed) {
            const total = results.reduce((s, r) => s + r.length, 0);
            const positions = new Float32Array(total);
            let off = 0;
            for (const r of results) { positions.set(r, off); off += r.length; }
            resolve({ positions, triangles: total / 9, dims, clamped, cellUsed, hiDetail, workers: count });
          }
        }
      };
      worker.onerror = (err) => { if (!failed) { failed = true; cleanup(); reject(err); } };
      worker.postMessage({ dims, min, max, sceneDesc: { objects, volumes: vols }, hiDetail, zStart: rg[0], zEnd: rg[1] }, transfer);
    });
  });
}

/** 頂点配列(任意倍率)から法線付き BufferGeometry を作る */
export function meshGeometryFromPositions(positions, scale = 1) {
  let arr = positions;
  if (scale !== 1) { arr = new Float32Array(positions.length); for (let i = 0; i < positions.length; i++) arr[i] = positions[i] * scale; }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
  geo.computeVertexNormals();
  return geo;
}

/**
 * シーンを STL(バイナリ) で書き出し。
 * @param {{cellSize:number, maxAxis?:number, exportScale:number}} opts
 *   exportScale: scene単位→STL単位(mm)の倍率
 */
export async function exportSTL(sdfScene, opts, onProgress) {
  const r = await generateSceneMesh(sdfScene, opts, onProgress);
  if (r.positions.length === 0) throw new Error('面が生成されませんでした(等値面が空)');
  const mesh = new THREE.Mesh(meshGeometryFromPositions(r.positions, opts.exportScale || 1), new THREE.MeshStandardMaterial());
  const result = new STLExporter().parse(mesh, { binary: true });
  const ab = result.buffer ? result.buffer : result;
  downloadArrayBuffer(ab, 'model.stl');
  return { triangles: r.triangles, dims: r.dims, clamped: r.clamped };
}
