// シーンSDFの JS 評価器。raymarch.js の GLSL と「同一の合成」を行うこと。
// Marching Cubes(STL書き出し) で使用。
// hiDetail 時はボリュームの表面近傍を元メッシュ(BVH)の真の距離で評価し、
// 粗グリッドの解像度上限を超えて細かくメッシュ化できる(符号は粗グリッドから)。
import * as THREE from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import { PRIM_BY_KIND } from './primitives.js';

function sminP(a, b, k) {
  if (k <= 0) return Math.min(a, b);
  const h = Math.min(Math.max(0.5 + (0.5 * (b - a)) / k, 0), 1);
  return a * h + b * (1 - h) - k * h * (1 - h);
}
const smaxP = (a, b, k) => -sminP(-a, -b, k);

// 配列モディファイア(ドメイン折り返し) GLSL applyArray と一致させること
function foldArray(a, lp) {
  if (!a || a.mode === 'none') return;
  const cl = (v, lo, hi) => Math.min(Math.max(v, lo), hi);
  if (a.mode === 'grid') {
    if (a.dx > 0 && a.nx > 1) lp.x -= a.dx * cl(Math.floor(lp.x / a.dx + 0.5), 0, a.nx - 1);
    if (a.dy > 0 && a.ny > 1) lp.y -= a.dy * cl(Math.floor(lp.y / a.dy + 0.5), 0, a.ny - 1);
    if (a.dz > 0 && a.nz > 1) lp.z -= a.dz * cl(Math.floor(lp.z / a.dz + 0.5), 0, a.nz - 1);
  } else if (a.mode === 'circular') {
    const cnt = Math.max(a.count, 1), seg = (2 * Math.PI) / cnt;
    let ang = Math.atan2(lp.z, lp.x);
    ang -= seg * Math.floor(ang / seg + 0.5);
    const rad = Math.hypot(lp.x, lp.z);
    lp.x = Math.cos(ang) * rad - a.radius; lp.z = Math.sin(ang) * rad;
  }
}

// inv: 長さ16 column-major。ワールド点→ローカル点
function applyInv(inv, x, y, z, out) {
  out.x = inv[0] * x + inv[4] * y + inv[8] * z + inv[12];
  out.y = inv[1] * x + inv[5] * y + inv[9] * z + inv[13];
  out.z = inv[2] * x + inv[6] * y + inv[10] * z + inv[14];
  return out;
}

function trilinear(vol, ux, uy, uz) {
  const r = vol.res;
  // [0,1] -> グリッド座標
  let fx = ux * (r - 1), fy = uy * (r - 1), fz = uz * (r - 1);
  fx = Math.min(Math.max(fx, 0), r - 1); fy = Math.min(Math.max(fy, 0), r - 1); fz = Math.min(Math.max(fz, 0), r - 1);
  const x0 = Math.floor(fx), y0 = Math.floor(fy), z0 = Math.floor(fz);
  const x1 = Math.min(x0 + 1, r - 1), y1 = Math.min(y0 + 1, r - 1), z1 = Math.min(z0 + 1, r - 1);
  const dx = fx - x0, dy = fy - y0, dz = fz - z0;
  const d = vol.distance;
  const idx = (x, y, z) => x + y * r + z * r * r;
  const c000 = d[idx(x0, y0, z0)], c100 = d[idx(x1, y0, z0)];
  const c010 = d[idx(x0, y1, z0)], c110 = d[idx(x1, y1, z0)];
  const c001 = d[idx(x0, y0, z1)], c101 = d[idx(x1, y0, z1)];
  const c011 = d[idx(x0, y1, z1)], c111 = d[idx(x1, y1, z1)];
  const c00 = c000 * (1 - dx) + c100 * dx, c10 = c010 * (1 - dx) + c110 * dx;
  const c01 = c001 * (1 - dx) + c101 * dx, c11 = c011 * (1 - dx) + c111 * dx;
  const c0 = c00 * (1 - dy) + c10 * dy, c1 = c01 * (1 - dy) + c11 * dy;
  return c0 * (1 - dz) + c1 * dz;
}

/**
 * @param {Object} desc
 *   objects: [{kind, op:'union'|'subtract'|'intersect', smoothK, inv:Float32Array(16), scale, a:[4], b:[4], volSlot}]
 *   volumes: [{res, min:[3], max:[3], distance:Float32Array}]  (index = volSlot)
 * @returns {(x,y,z)=>number}
 */
// 1オブジェクトのワールド距離(ピッキングの面オーナー判定用, grid sampling)
export function objDistAt(o, vols, x, y, z) {
  const lp = { x: 0, y: 0, z: 0 };
  applyInv(o.inv, x, y, z, lp);
  foldArray(o.array, lp);
  if (o.kind === 0) {
    const v = vols[o.volSlot];
    const ux = (lp.x - v.min[0]) / (v.max[0] - v.min[0]);
    const uy = (lp.y - v.min[1]) / (v.max[1] - v.min[1]);
    const uz = (lp.z - v.min[2]) / (v.max[2] - v.min[2]);
    const raw = trilinear(v, ux, uy, uz);
    const qx = Math.max(v.min[0] - lp.x, lp.x - v.max[0], 0);
    const qy = Math.max(v.min[1] - lp.y, lp.y - v.max[1], 0);
    const qz = Math.max(v.min[2] - lp.z, lp.z - v.max[2], 0);
    return (raw + Math.sqrt(qx * qx + qy * qy + qz * qz)) * o.scale;
  }
  return PRIM_BY_KIND.get(o.kind).js(lp, o.a, o.b) * o.scale;
}

export function makeEvaluator(desc, opts = {}) {
  const hiDetail = !!opts.hiDetail;
  const lp = { x: 0, y: 0, z: 0 };
  const objs = desc.objects;
  const vols = desc.volumes;

  // 各ボリュームの粗ボクセル幅と、hiDetail 時の BVH を用意
  for (const v of vols) {
    v._cv = Math.min(
      (v.max[0] - v.min[0]) / (v.res - 1),
      (v.max[1] - v.min[1]) / (v.res - 1),
      (v.max[2] - v.min[2]) / (v.res - 1),
    );
    if (hiDetail && v.mesh && v.mesh.positions) {
      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.BufferAttribute(v.mesh.positions, 3));
      if (v.mesh.index) geom.setIndex(new THREE.BufferAttribute(v.mesh.index, 1));
      v._bvh = new MeshBVH(geom);
      v._band = v._cv * 3.0; // この帯の内側だけ BVH で精密評価
    }
  }
  const pt = new THREE.Vector3();
  const target = {};

  return function f(x, y, z) {
    let d = 1e9;
    for (let i = 0; i < objs.length; i++) {
      const o = objs[i];
      applyInv(o.inv, x, y, z, lp);
      foldArray(o.array, lp);
      let di;
      if (o.kind === 0) {
        const v = vols[o.volSlot];
        const ux = (lp.x - v.min[0]) / (v.max[0] - v.min[0]);
        const uy = (lp.y - v.min[1]) / (v.max[1] - v.min[1]);
        const uz = (lp.z - v.min[2]) / (v.max[2] - v.min[2]);
        const raw = trilinear(v, ux, uy, uz);
        const qx = Math.max(v.min[0] - lp.x, lp.x - v.max[0], 0);
        const qy = Math.max(v.min[1] - lp.y, lp.y - v.max[1], 0);
        const qz = Math.max(v.min[2] - lp.z, lp.z - v.max[2], 0);
        const outside = Math.sqrt(qx * qx + qy * qy + qz * qz);
        if (v._bvh && outside === 0 && Math.abs(raw) <= v._band) {
          // 表面近傍: 真の距離(BVH)、符号は粗グリッド
          pt.set(lp.x, lp.y, lp.z);
          target.distance = Infinity;
          v._bvh.closestPointToPoint(pt, target);
          di = (raw < 0 ? -target.distance : target.distance) * o.scale;
        } else {
          di = (raw + outside) * o.scale;
        }
      } else {
        const prim = PRIM_BY_KIND.get(o.kind);
        di = prim.js(lp, o.a, o.b) * o.scale;
      }
      if (i === 0) d = di;
      else if (o.op === 'union') d = sminP(d, di, o.smoothK);
      else if (o.op === 'subtract') d = smaxP(d, -di, o.smoothK);
      else d = smaxP(d, di, o.smoothK);
    }
    return d;
  };
}
