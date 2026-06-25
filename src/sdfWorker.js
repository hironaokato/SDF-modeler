import * as THREE from 'three';
import { MeshBVH } from 'three-mesh-bvh';

/**
 * メッシュから符号付き距離場(SDF)+カラーボリュームを計算する Web Worker。
 * 並列化のため担当 Z 範囲 [zStart, zEnd) のスライスのみ計算して返す。
 * 境界(min/max)は全ワーカーで揃えるため main から受け取る。
 * - 距離: BVH 最近点クエリ / 符号: 複数斜めレイの交差パリティ / 色: 重心UV補間サンプリング
 */
self.onmessage = (e) => {
  const { positions, index, uv, resolution, signRays, tex, min, max, zStart, zEnd } = e.data;
  const res = resolution;
  const z0 = zStart ?? 0;
  const z1 = zEnd ?? res;

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  if (uv) geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  if (index) geometry.setIndex(new THREE.BufferAttribute(index, 1));

  const bvh = new MeshBVH(geometry);
  const idx = geometry.index ? geometry.index.array : null;
  const wantColor = !!(tex && uv);

  const sliceZ = z1 - z0;
  const data = new Float32Array(res * res * sliceZ);
  const color = wantColor ? new Uint8Array(res * res * sliceZ * 4) : null;

  const point = new THREE.Vector3();
  const target = {};
  const ray = new THREE.Ray();
  const dirs = [
    new THREE.Vector3(0.5, 0.7, 0.31).normalize(),
    new THREE.Vector3(-0.41, 0.62, 0.77).normalize(),
    new THREE.Vector3(0.83, -0.34, 0.55).normalize(),
    new THREE.Vector3(0.27, -0.81, 0.49).normalize(),
    new THREE.Vector3(-0.69, -0.52, 0.31).normalize(),
  ];

  const sx = (max[0] - min[0]) / (res - 1);
  const sy = (max[1] - min[1]) / (res - 1);
  const sz = (max[2] - min[2]) / (res - 1);

  // --- 色サンプリング補助 ---
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  const v0 = new THREE.Vector3(), v1 = new THREE.Vector3(), v2 = new THREE.Vector3();
  const texW = wantColor ? tex.width : 0;
  const texH = wantColor ? tex.height : 0;
  const texData = wantColor ? tex.data : null;
  const vi = (face, k) => (idx ? idx[face * 3 + k] : face * 3 + k);

  function sampleColor(faceIndex, p, out) {
    const i0 = vi(faceIndex, 0), i1 = vi(faceIndex, 1), i2 = vi(faceIndex, 2);
    a.fromArray(positions, i0 * 3); b.fromArray(positions, i1 * 3); c.fromArray(positions, i2 * 3);
    v0.subVectors(b, a); v1.subVectors(c, a); v2.subVectors(p, a);
    const d00 = v0.dot(v0), d01 = v0.dot(v1), d11 = v1.dot(v1), d20 = v2.dot(v0), d21 = v2.dot(v1);
    const denom = d00 * d11 - d01 * d01;
    let wb = 0, wc = 0, wa = 1;
    if (Math.abs(denom) > 1e-20) {
      wb = (d11 * d20 - d01 * d21) / denom;
      wc = (d00 * d21 - d01 * d20) / denom;
      wa = 1 - wb - wc;
    }
    let u = uv[i0 * 2] * wa + uv[i1 * 2] * wb + uv[i2 * 2] * wc;
    let v = uv[i0 * 2 + 1] * wa + uv[i1 * 2 + 1] * wb + uv[i2 * 2 + 1] * wc;
    u -= Math.floor(u); v -= Math.floor(v);
    const px = Math.min(texW - 1, Math.max(0, (u * (texW - 1)) | 0));
    const py = Math.min(texH - 1, Math.max(0, (v * (texH - 1)) | 0));
    const t = (py * texW + px) * 4;
    out[0] = texData[t]; out[1] = texData[t + 1]; out[2] = texData[t + 2]; out[3] = 255;
  }
  const rgba = [255, 255, 255, 255];

  let i = 0;
  for (let z = z0; z < z1; z++) {
    const wz = min[2] + z * sz;
    for (let y = 0; y < res; y++) {
      const wy = min[1] + y * sy;
      for (let x = 0; x < res; x++) {
        point.set(min[0] + x * sx, wy, wz);
        target.distance = Infinity; target.faceIndex = -1;
        bvh.closestPointToPoint(point, target);
        let dist = target.distance;

        if (signRays > 0) {
          let insideVotes = 0;
          for (let r = 0; r < signRays; r++) {
            ray.origin.copy(point);
            ray.direction.copy(dirs[r % dirs.length]);
            const hits = bvh.raycast(ray, THREE.DoubleSide);
            if (hits.length % 2 === 1) insideVotes++;
          }
          if (insideVotes * 2 > signRays) dist = -dist;
        }
        data[i] = dist;

        if (wantColor) {
          if (target.faceIndex >= 0 && target.point) sampleColor(target.faceIndex, target.point, rgba);
          else { rgba[0] = rgba[1] = rgba[2] = 200; rgba[3] = 255; }
          const ci = i * 4;
          color[ci] = rgba[0]; color[ci + 1] = rgba[1]; color[ci + 2] = rgba[2]; color[ci + 3] = rgba[3];
        }
        i++;
      }
    }
    self.postMessage({ type: 'progress', value: (z - z0 + 1) / sliceZ });
  }

  const transfer = [data.buffer];
  if (color) transfer.push(color.buffer);
  self.postMessage({ type: 'done', data, color, zStart: z0, zEnd: z1 }, transfer);
};
