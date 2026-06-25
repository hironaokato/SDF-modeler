import * as THREE from 'three';
import { makeEvaluator } from './core/sdfEval.js';
import { PRIM_BY_KIND } from './core/primitives.js';

const sminP = (a, b, k) => { if (k <= 0) return Math.min(a, b); const h = Math.min(Math.max(0.5 + (0.5 * (b - a)) / k, 0), 1); return a * h + b * (1 - h) - k * h * (1 - h); };
const smaxP = (a, b, k) => -sminP(-a, -b, k);

// SDFスカルプト: 選択オブジェクトをボクセル化(ベイク)し、距離グリッドをブラシで編集する。
// ブラシ: draw(盛り)/carve(削り)/smooth(均し)/move(掴み移動)。アルファ形状: round/square/cone。
export class Sculpt {
  constructor(deps) {
    this.deps = deps; // { renderer, canvas, sdfScene, raymarch, getCamera, getControls, refresh, pushHistory }
    this.active = false;
    this.obj = null;
    this.brush = { type: 'draw', shape: 'round', radius: 0.1, strength: 0.5 };
    this.ray = new THREE.Raycaster();
    this.lastHit = null;
    this.undoStack = []; // ストローク前グリッドのコピー(上限あり)
  }

  // --- オブジェクトのワールドAABB ---
  _worldBox(o) {
    const s = this.deps.sdfScene;
    const b = s._localBounds(o);
    const box = new THREE.Box3();
    o.node.updateMatrixWorld(true);
    for (let i = 0; i < 8; i++) {
      const c = new THREE.Vector3((i & 1) ? b.max.x : b.min.x, (i & 2) ? b.max.y : b.min.y, (i & 4) ? b.max.z : b.min.z);
      c.applyMatrix4(o.node.matrixWorld); box.expandByPoint(c);
    }
    return box;
  }

  // --- ベイク: オブジェクトのSDFをワールド空間のグリッドへ ---
  bake(o, res) {
    const s = this.deps.sdfScene;
    const inv = new THREE.Matrix4().copy(o.node.matrixWorld).invert();
    const sc = o.node.scale;
    const scale = Math.max(Math.min(Math.abs(sc.x), Math.abs(sc.y), Math.abs(sc.z)), 1e-5);
    const desc = { objects: [], volumes: [] };
    const base = { kind: o.kind, op: 'union', smoothK: 0, inv: Array.from(inv.elements), scale, array: { ...o.array } };
    if (o.isVolume) { base.volSlot = 0; desc.volumes.push({ res: o.volume.data.resolution, min: o.volume.data.min, max: o.volume.data.max, distance: o.volume.data.distance }); }
    else { const prim = PRIM_BY_KIND.get(o.kind); const p = prim.pack(o.params || {}); base.a = p.a; base.b = p.b; }
    desc.objects.push(base);
    const f = makeEvaluator(desc, { hiDetail: false });

    const box = this._worldBox(o);
    const size = box.getSize(new THREE.Vector3());
    const pad = size.length() * 0.18; // 盛り(外側への彫刻)の余地を確保
    const min = [box.min.x - pad, box.min.y - pad, box.min.z - pad];
    const max = [box.max.x + pad, box.max.y + pad, box.max.z + pad];
    const dist = new Float32Array(res * res * res);
    const dx = (max[0] - min[0]) / (res - 1), dy = (max[1] - min[1]) / (res - 1), dz = (max[2] - min[2]) / (res - 1);
    let i = 0;
    for (let z = 0; z < res; z++) { const wz = min[2] + z * dz; for (let y = 0; y < res; y++) { const wy = min[1] + y * dy; for (let x = 0; x < res; x++) dist[i++] = f(min[0] + x * dx, wy, wz); } }
    const data = { name: (o.name || 'sculpt') + ' (sculpt)', resolution: res, min, max, signed: true, hasColor: false, distance: dist, color: null, mesh: null };
    return s.bakeReplace(o, data);
  }

  enter(o, res) {
    if (this.active || !o) return null;
    this.obj = this.bake(o, res);
    const v = this.obj.volume.data;
    const ext = Math.max(v.max[0] - v.min[0], v.max[1] - v.min[1], v.max[2] - v.min[2]);
    this.brush.radius = ext * 0.12;
    this.voxel = Math.min((v.max[0] - v.min[0]), (v.max[1] - v.min[1]), (v.max[2] - v.min[2])) / (v.resolution - 1);
    this.active = true;
    this.undoStack = [];
    // 左ドラッグは彫刻に使い、カメラは中=回転 / 右=パン / ホイール=ズーム で許容
    const c = this.deps.getControls();
    this._savedButtons = Object.assign({}, c.mouseButtons);
    c.mouseButtons = { LEFT: -1, MIDDLE: THREE.MOUSE.ROTATE, RIGHT: THREE.MOUSE.PAN };
    return this.obj;
  }

  exit() {
    if (!this.active) return;
    this.active = false; this.lastHit = null;
    const c = this.deps.getControls();
    if (this._savedButtons) c.mouseButtons = this._savedButtons;
  }

  // --- グリッドのトリリニアサンプル(ワールド座標) ---
  _sample(grid, v, x, y, z) {
    const r = v.resolution;
    let fx = (x - v.min[0]) / (v.max[0] - v.min[0]) * (r - 1);
    let fy = (y - v.min[1]) / (v.max[1] - v.min[1]) * (r - 1);
    let fz = (z - v.min[2]) / (v.max[2] - v.min[2]) * (r - 1);
    fx = Math.min(Math.max(fx, 0), r - 1); fy = Math.min(Math.max(fy, 0), r - 1); fz = Math.min(Math.max(fz, 0), r - 1);
    const x0 = Math.floor(fx), y0 = Math.floor(fy), z0 = Math.floor(fz);
    const x1 = Math.min(x0 + 1, r - 1), y1 = Math.min(y0 + 1, r - 1), z1 = Math.min(z0 + 1, r - 1);
    const ax = fx - x0, ay = fy - y0, az = fz - z0;
    const id = (a, b, c) => a + b * r + c * r * r;
    const c00 = grid[id(x0, y0, z0)] * (1 - ax) + grid[id(x1, y0, z0)] * ax;
    const c10 = grid[id(x0, y1, z0)] * (1 - ax) + grid[id(x1, y1, z0)] * ax;
    const c01 = grid[id(x0, y0, z1)] * (1 - ax) + grid[id(x1, y0, z1)] * ax;
    const c11 = grid[id(x0, y1, z1)] * (1 - ax) + grid[id(x1, y1, z1)] * ax;
    return (c00 * (1 - ay) + c10 * ay) * (1 - az) + (c01 * (1 - ay) + c11 * ay) * az;
  }

  // --- カーソル下の表面をCPUスフィアトレースで取得 ---
  _raycast(e) {
    const v = this.obj.volume.data;
    const cam = this.deps.getCamera(), canvas = this.deps.canvas;
    const rect = canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
    this.ray.setFromCamera(ndc, cam);
    const ro = this.ray.ray.origin, rd = this.ray.ray.direction;
    // AABB
    const mn = v.min, mx = v.max;
    const inv = [1 / rd.x, 1 / rd.y, 1 / rd.z];
    let tn = -1e9, tf = 1e9;
    for (let k = 0; k < 3; k++) {
      const o = k === 0 ? ro.x : k === 1 ? ro.y : ro.z;
      const d = inv[k]; let t0 = (mn[k] - o) * d, t1 = (mx[k] - o) * d; if (t0 > t1) { const t = t0; t0 = t1; t1 = t; }
      tn = Math.max(tn, t0); tf = Math.min(tf, t1);
    }
    if (tf < Math.max(tn, 0)) return null;
    let t = Math.max(tn, 0) + this.voxel * 0.5;
    const grid = v.distance;
    for (let s = 0; s < 512 && t < tf; s++) {
      const px = ro.x + rd.x * t, py = ro.y + rd.y * t, pz = ro.z + rd.z * t;
      const d = this._sample(grid, v, px, py, pz);
      if (d < this.voxel * 0.5) return new THREE.Vector3(px, py, pz);
      t += Math.max(d, this.voxel * 0.5);
    }
    return null;
  }

  _falloff(d, R, shape) {
    if (shape === 'square') { const e = Math.max(0, 1 - d / R); return Math.min(1, e * 3); } // 端だけ落とす
    if (shape === 'cone') return Math.max(0, 1 - d / R);
    const t = Math.max(0, 1 - d / R); return t * t * (3 - 2 * t); // round(smoothstep)
  }

  // スタンプSDF(アルファ形状)
  _stamp(ox, oy, oz, r, shape) {
    if (shape === 'square') return Math.max(Math.abs(ox), Math.abs(oy), Math.abs(oz)) - r;
    if (shape === 'cone') return Math.sqrt(ox * ox + oy * oy + oz * oz) - r * 0.7; // 尖り(小さめ)
    return Math.sqrt(ox * ox + oy * oy + oz * oz) - r; // round
  }

  _apply(center, drag) {
    const v = this.obj.volume.data, r = v.resolution, grid = v.distance;
    const R = this.brush.radius, shape = this.brush.shape, type = this.brush.type, str = this.brush.strength;
    // Draw/Carve は球(箱)スタンプの smooth union/subtract(クレイ方式=段差なし・冪等)
    const stampR = R * (0.3 + str * 0.6);
    const RINF = Math.max(R, stampR);
    const dx = (v.max[0] - v.min[0]) / (r - 1), dy = (v.max[1] - v.min[1]) / (r - 1), dz = (v.max[2] - v.min[2]) / (r - 1);
    const gx = (center.x - v.min[0]) / dx, gy = (center.y - v.min[1]) / dy, gz = (center.z - v.min[2]) / dz;
    const rx = Math.ceil(RINF / dx) + 1, ry = Math.ceil(RINF / dy) + 1, rz = Math.ceil(RINF / dz) + 1;
    const x0 = Math.max(0, Math.floor(gx - rx)), x1 = Math.min(r - 1, Math.ceil(gx + rx));
    const y0 = Math.max(0, Math.floor(gy - ry)), y1 = Math.min(r - 1, Math.ceil(gy + ry));
    const z0 = Math.max(0, Math.floor(gz - rz)), z1 = Math.min(r - 1, Math.ceil(gz + rz));
    const src = (type === 'smooth' || type === 'move') ? grid.slice() : null;
    const id = (a, b, c) => a + b * r + c * r * r;
    const maxNorm = (a, b, c) => Math.max(Math.abs(a), Math.abs(b), Math.abs(c));
    for (let z = z0; z <= z1; z++) for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
      const wx = v.min[0] + x * dx, wy = v.min[1] + y * dy, wz = v.min[2] + z * dz;
      const ox = wx - center.x, oy = wy - center.y, oz = wz - center.z;
      const i = id(x, y, z);
      if (type === 'draw') { const sd = this._stamp(ox, oy, oz, stampR, shape); grid[i] = Math.min(grid[i], sd); }       // hard union(冪等=段差なし)
      else if (type === 'carve') { const sd = this._stamp(ox, oy, oz, stampR, shape); grid[i] = Math.max(grid[i], -sd); } // hard subtract
      else {
        const dd = shape === 'square' ? maxNorm(ox, oy, oz) : Math.sqrt(ox * ox + oy * oy + oz * oz);
        if (dd > R) continue;
        const w = this._falloff(dd, R, shape);
        if (type === 'smooth') {
          const xa = Math.max(0, x - 1), xb = Math.min(r - 1, x + 1), ya = Math.max(0, y - 1), yb = Math.min(r - 1, y + 1), za = Math.max(0, z - 1), zb = Math.min(r - 1, z + 1);
          const avg = (src[id(xa, y, z)] + src[id(xb, y, z)] + src[id(x, ya, z)] + src[id(x, yb, z)] + src[id(x, y, za)] + src[id(x, y, zb)]) / 6;
          grid[i] = src[i] + (avg - src[i]) * w * str;
        } else if (type === 'move' && drag) {
          grid[i] = this._sample(src, v, wx - drag.x * w, wy - drag.y * w, wz - drag.z * w);
        }
      }
    }
    this.obj.volume.distTex.needsUpdate = true;
  }

  pointerDown(e) {
    if (!this.active) return false;
    const hit = this._raycast(e);
    if (!hit) return false;
    // ストローク前のグリッドをUndo用に退避
    this.undoStack.push(this.obj.volume.data.distance.slice());
    if (this.undoStack.length > 12) this.undoStack.shift();
    this.stroking = true; this.lastHit = hit;
    this._apply(hit, null);
    return true;
  }
  pointerMove(e) {
    if (!this.active || !this.stroking) return;
    const hit = this._raycast(e);
    if (!hit) return;
    const t = this.brush.type;
    if ((t === 'draw' || t === 'carve') && this.lastHit) {
      // ドラッグ区間にスタンプを補間(速い移動でも連続したストロークに)
      const dist = hit.distanceTo(this.lastHit);
      const step = Math.max(this.brush.radius * 0.4, this.voxel);
      const n = Math.min(Math.max(1, Math.ceil(dist / step)), 16);
      for (let i = 1; i <= n; i++) this._apply(this.lastHit.clone().lerp(hit, i / n), null);
    } else {
      this._apply(hit, this.lastHit ? hit.clone().sub(this.lastHit) : null);
    }
    this.lastHit = hit;
  }
  pointerUp() {
    if (!this.stroking) return;
    this.stroking = false; this.lastHit = null;
    if (this.deps.pushHistory) this.deps.pushHistory();
  }
  undo() {
    if (!this.active || this.undoStack.length === 0) return;
    const g = this.undoStack.pop();
    this.obj.volume.data.distance.set(g);
    this.obj.volume.distTex.needsUpdate = true;
  }
}
