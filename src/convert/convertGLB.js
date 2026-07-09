import { loadGLB } from '../loadGLB.js';

/**
 * GLB/GLTF ArrayBuffer を SDF VolumeData に変換(複数 Web Worker で Z 分割並列)。
 * @returns {Promise<VolumeData>}
 */
export function convertGLB(arrayBuffer, { resolution = 128, signRays = 3, name = 'volume', padding = 0.06, assetFiles = [], rootPath = '', onProgress } = {}) {
  return new Promise((resolve, reject) => {
    loadGLB(arrayBuffer, { assetFiles, rootPath }).then(({ merged, texture }) => {
      const pos = merged.getAttribute('position');
      const srcPositions = new Float32Array(pos.array);
      const srcIndex = merged.index ? new Uint32Array(merged.index.array) : null;
      const uvAttr = merged.getAttribute('uv');
      const srcUv = (uvAttr && texture) ? new Float32Array(uvAttr.array) : null;

      // 境界(padding込み)を一度だけ計算し、全ワーカーで共有
      const bb = merged.boundingBox;
      const sx = bb.max.x - bb.min.x, sy = bb.max.y - bb.min.y, sz = bb.max.z - bb.min.z;
      const maxExtent = Math.max(sx, sy, sz) || 1;
      const pad = maxExtent * padding;
      const min = [bb.min.x - pad, bb.min.y - pad, bb.min.z - pad];
      const max = [bb.max.x + pad, bb.max.y + pad, bb.max.z + pad];

      const res = resolution;
      const cores = (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) || 4;
      const W = Math.max(1, Math.min(cores, 8, res));
      const ranges = [];
      const per = Math.ceil(res / W);
      for (let z0 = 0; z0 < res; z0 += per) ranges.push([z0, Math.min(z0 + per, res)]);
      const count = ranges.length;

      const distance = new Float32Array(res * res * res);
      const color = (srcUv && texture) ? new Uint8Array(res * res * res * 4) : null;
      const progresses = new Array(count).fill(0);
      let finished = 0, failed = false;
      const workers = [];
      const cleanup = () => workers.forEach((w) => w.terminate());

      ranges.forEach((rg, wi) => {
        const worker = new Worker(new URL('../sdfWorker.js', import.meta.url), { type: 'module' });
        workers.push(worker);
        // 各ワーカーへ複製を渡す(transferで元が無効化されるのを避ける)
        const positions = new Float32Array(srcPositions);
        const index = srcIndex ? new Uint32Array(srcIndex) : null;
        const uv = srcUv ? new Float32Array(srcUv) : null;
        const transfer = [positions.buffer];
        if (index) transfer.push(index.buffer);
        if (uv) transfer.push(uv.buffer);

        worker.onmessage = (e) => {
          const m = e.data;
          if (m.type === 'progress') {
            progresses[wi] = m.value;
            if (onProgress) onProgress(progresses.reduce((a, b) => a + b, 0) / count);
            return;
          }
          if (m.type === 'done') {
            distance.set(m.data, m.zStart * res * res);
            if (color && m.color) color.set(m.color, m.zStart * res * res * 4);
            worker.terminate();
            if (++finished === count && !failed) {
              resolve({
                name, resolution: res, min, max,
                modelBounds: { min: [bb.min.x, bb.min.y, bb.min.z], max: [bb.max.x, bb.max.y, bb.max.z] },
                signed: signRays > 0, hasColor: !!color,
                distance, color,
                mesh: { positions: srcPositions, index: srcIndex }, // 高精度メッシュ化用
              });
            }
          }
        };
        worker.onerror = (err) => { if (!failed) { failed = true; cleanup(); reject(err); } };
        worker.postMessage(
          { positions, index, uv, resolution: res, signRays, tex: texture, min, max, zStart: rg[0], zEnd: rg[1] },
          transfer,
        );
      });
    }).catch(reject);
  });
}
