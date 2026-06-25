import * as THREE from 'three';
import { MAX_VOLUMES, OP, KIND_VOLUME } from './constants.js';
import { PRIM_BY_KIND, defaultParams } from './primitives.js';

let _id = 1;

/** 距離(Float) と 色(RGBA) の 3D テクスチャを生成 */
function makeVolumeTextures(renderer, v) {
  const res = v.resolution;
  const dist = new THREE.Data3DTexture(v.distance, res, res, res);
  dist.format = THREE.RedFormat;
  dist.type = THREE.FloatType;
  const hasFloatLinear = !!renderer.extensions.get('OES_texture_float_linear');
  const f = hasFloatLinear ? THREE.LinearFilter : THREE.NearestFilter;
  dist.minFilter = dist.magFilter = f;
  dist.wrapS = dist.wrapT = dist.wrapR = THREE.ClampToEdgeWrapping;
  dist.unpackAlignment = 1;
  dist.needsUpdate = true;

  let color = null;
  if (v.hasColor && v.color) {
    color = new THREE.Data3DTexture(v.color, res, res, res);
    color.format = THREE.RGBAFormat;
    color.type = THREE.UnsignedByteType;
    color.minFilter = color.magFilter = THREE.LinearFilter;
    color.wrapS = color.wrapT = color.wrapR = THREE.ClampToEdgeWrapping;
    color.unpackAlignment = 4;
    color.needsUpdate = true;
  }
  return { dist, color };
}

export class SdfObject {
  constructor(kind, name) {
    this.id = _id++;
    this.kind = kind;          // KIND_VOLUME or primitive id
    this.name = name;
    this.node = new THREE.Object3D();
    this.op = 'union';         // 'union'|'subtract'|'intersect'
    this.smoothK = 0;          // 0 = ハードブーリアン
    this.color = new THREE.Color(0.9, 0.9, 0.91); // プリミティブ用単色(linear, 約5%グレー)
    // volume 用
    this.volume = null;        // { data, distTex, colorTex } への参照
    // primitive 用
    this.params = {};
    // 配列モディファイア
    this.array = defaultArray();
  }
  get isVolume() { return this.kind === KIND_VOLUME; }
  get hasArray() { return this.array && this.array.mode !== 'none'; }
}

export function defaultArray() {
  return { mode: 'none', nx: 3, ny: 1, nz: 1, dx: 1, dy: 1, dz: 1, count: 6, radius: 1 };
}

export class SdfScene {
  constructor(renderer) {
    this.renderer = renderer;
    this.group = new THREE.Group();     // 全オブジェクトの node を保持
    this.volumes = [];                  // { data:VolumeData, distTex, colorTex, slot }
    this.objects = [];                  // SdfObject[]
    this.onChange = () => {};
  }

  notify() { this.onChange(); }

  _allocSlot() {
    const used = new Set(this.volumes.map((v) => v.slot));
    for (let s = 0; s < MAX_VOLUMES; s++) if (!used.has(s)) return s;
    return -1;
  }

  /** VolumeData を読み込みオブジェクト化(中心を原点へ寄せる) */
  addVolume(data) {
    const slot = this._allocSlot();
    if (slot < 0) throw new Error(`ボリュームは最大 ${MAX_VOLUMES} 個までです`);
    const tex = makeVolumeTextures(this.renderer, data);
    const vol = { data, distTex: tex.dist, colorTex: tex.color, slot };
    this.volumes.push(vol);

    const obj = new SdfObject(KIND_VOLUME, data.name || `volume ${this.objects.length + 1}`);
    obj.volume = vol;
    // 中心を原点に寄せる
    const cx = (data.min[0] + data.max[0]) / 2;
    const cy = (data.min[1] + data.max[1]) / 2;
    const cz = (data.min[2] + data.max[2]) / 2;
    obj.node.position.set(-cx, -cy, -cz);
    obj.node.updateMatrixWorld(true);
    this.group.add(obj.node);
    this.objects.push(obj);
    this.notify();
    return obj;
  }

  /** プリミティブ種別IDから新規オブジェクトを作成・追加 */
  addPrimitive(kindId, paramsOverride) {
    const prim = PRIM_BY_KIND.get(kindId);
    if (!prim) throw new Error(`未知のプリミティブ: ${kindId}`);
    const obj = new SdfObject(kindId, prim.name);
    obj.params = paramsOverride ? { ...defaultParams(prim), ...paramsOverride } : defaultParams(prim);
    obj.op = 'union';
    obj.node.updateMatrixWorld(true);
    this.group.add(obj.node);
    this.objects.push(obj);
    this.notify();
    return obj;
  }

  /** コピー用にオブジェクトの記述子を作る(ボリュームは参照を保持) */
  copyDescriptor(o) {
    return {
      kind: o.kind, name: o.name, op: o.op, smoothK: o.smoothK,
      color: [o.color.r, o.color.g, o.color.b],
      params: { ...o.params }, array: { ...o.array },
      pos: o.node.position.toArray(), quat: o.node.quaternion.toArray(), scale: o.node.scale.toArray(),
      volume: o.volume || null, volData: o.isVolume ? o.volume.data : null,
    };
  }

  /** 記述子から複製を生成して追加(少しずらす) */
  pasteDescriptor(d) {
    let obj;
    if (d.kind === KIND_VOLUME) {
      obj = new SdfObject(KIND_VOLUME, `${d.name || 'volume'} copy`);
      if (d.volume && this.volumes.includes(d.volume)) {
        obj.volume = d.volume; // 既存ボリュームを共有(テクスチャ複製なし)
      } else { // 元が破棄済み → データから再構築(新スロット)
        const slot = this._allocSlot();
        if (slot < 0) throw new Error(`ボリュームは最大 ${MAX_VOLUMES} 個までです`);
        const tex = makeVolumeTextures(this.renderer, d.volData);
        const vol = { data: d.volData, distTex: tex.dist, colorTex: tex.color, slot };
        this.volumes.push(vol); obj.volume = vol;
      }
    } else {
      obj = new SdfObject(d.kind, `${d.name || 'prim'} copy`);
      obj.params = { ...d.params };
    }
    obj.op = d.op; obj.smoothK = d.smoothK || 0; obj.color.fromArray(d.color);
    obj.array = d.array ? { ...d.array } : defaultArray();
    obj.node.position.fromArray(d.pos); obj.node.quaternion.fromArray(d.quat); obj.node.scale.fromArray(d.scale);

    // オブジェクトサイズに応じて少しずらす
    let sz = 1;
    if (d.kind === KIND_VOLUME && d.volData) {
      sz = Math.max(d.volData.max[0] - d.volData.min[0], d.volData.max[1] - d.volData.min[1], d.volData.max[2] - d.volData.min[2]);
    } else {
      const prim = PRIM_BY_KIND.get(d.kind);
      sz = (prim ? prim.bound(d.params || {}) * 2 : 1) || 1;
    }
    const off = sz * 0.3 * (Math.abs(obj.node.scale.x) || 1);
    obj.node.position.x += off; obj.node.position.z += off;
    obj.node.updateMatrixWorld(true);

    this.group.add(obj.node);
    this.objects.push(obj);
    this.notify();
    return obj;
  }

  /** 複数オブジェクトのBoolean結果を1ボリュームへ統合(元は削除) */
  mergeToVolume(objs, data) {
    const idxs = objs.map((o) => this.objects.indexOf(o)).filter((i) => i >= 0);
    const insertAt = idxs.length ? Math.min(...idxs) : this.objects.length;
    for (const o of objs) this.remove(o);
    const slot = this._allocSlot();
    if (slot < 0) throw new Error(`ボリュームは最大 ${MAX_VOLUMES} 個までです`);
    const tex = makeVolumeTextures(this.renderer, data);
    const vol = { data, distTex: tex.dist, colorTex: tex.color, slot };
    this.volumes.push(vol);
    const obj = new SdfObject(KIND_VOLUME, data.name);
    obj.volume = vol; obj.op = 'union';
    obj.node.updateMatrixWorld(true);
    this.group.add(obj.node);
    this.objects.splice(Math.min(insertAt, this.objects.length), 0, obj);
    this.notify();
    return obj;
  }

  /** スカルプト用: オブジェクトをベイク済みボリュームへ置換(同じ位置・op を維持) */
  bakeReplace(oldObj, data) {
    const idx = this.objects.indexOf(oldObj);
    const op = oldObj.op, smoothK = oldObj.smoothK;
    this.remove(oldObj);
    const slot = this._allocSlot();
    if (slot < 0) throw new Error(`ボリュームは最大 ${MAX_VOLUMES} 個までです`);
    const tex = makeVolumeTextures(this.renderer, data);
    const vol = { data, distTex: tex.dist, colorTex: tex.color, slot };
    this.volumes.push(vol);
    const obj = new SdfObject(KIND_VOLUME, data.name);
    obj.volume = vol; obj.op = op; obj.smoothK = smoothK;
    obj.node.updateMatrixWorld(true);
    this.group.add(obj.node);
    this.objects.splice(Math.min(idx < 0 ? this.objects.length : idx, this.objects.length), 0, obj);
    this.notify();
    return obj;
  }

  remove(obj) {
    const i = this.objects.indexOf(obj);
    if (i < 0) return;
    this.objects.splice(i, 1);
    this.group.remove(obj.node);
    if (obj.isVolume && obj.volume) {
      // 同じボリュームを他オブジェクトが使っていなければ破棄
      const stillUsed = this.objects.some((o) => o.volume === obj.volume);
      if (!stillUsed) {
        obj.volume.distTex.dispose();
        if (obj.volume.colorTex) obj.volume.colorTex.dispose();
        const vi = this.volumes.indexOf(obj.volume);
        if (vi >= 0) this.volumes.splice(vi, 1);
      }
    }
    this.notify();
  }

  clear() {
    [...this.objects].forEach((o) => this.remove(o));
    _id = 1;
  }

  /**
   * メッシュ化/表示に使うワールド境界 (THREE.Box3)。
   * union/base は和、intersect は積、subtract は無視(削るだけで材料を増やさない)。
   * これにより大きな削り用プリミティブ(平面/半空間など)でグリッドが膨張しない。
   */
  worldBounds() {
    const box = new THREE.Box3();
    const tmp = new THREE.Box3();
    this.objects.forEach((o, idx) => {
      const b = this._localBounds(o);
      tmp.makeEmpty();
      for (let i = 0; i < 8; i++) {
        const c = new THREE.Vector3(
          (i & 1) ? b.max.x : b.min.x,
          (i & 2) ? b.max.y : b.min.y,
          (i & 4) ? b.max.z : b.min.z,
        );
        c.applyMatrix4(o.node.matrixWorld);
        tmp.expandByPoint(c);
      }
      if (idx === 0 || o.op === 'union') {
        box.union(tmp);
      } else if (o.op === 'intersect') {
        if (box.isEmpty()) box.copy(tmp); else box.intersect(tmp);
      }
      // subtract は境界に影響させない
    });
    if (box.isEmpty()) { box.min.set(-1, -1, -1); box.max.set(1, 1, 1); }
    return box;
  }

  /** オブジェクトのワールドAABB(配列展開込み) */
  objAABB(o) {
    const b = this._localBounds(o);
    const box = new THREE.Box3();
    o.node.updateMatrixWorld(true);
    for (let i = 0; i < 8; i++) {
      const c = new THREE.Vector3((i & 1) ? b.max.x : b.min.x, (i & 2) ? b.max.y : b.min.y, (i & 4) ? b.max.z : b.min.z);
      c.applyMatrix4(o.node.matrixWorld); box.expandByPoint(c);
    }
    return box;
  }

  _localBounds(o) {
    const b = new THREE.Box3();
    if (o.isVolume) {
      b.min.fromArray(o.volume.data.min);
      b.max.fromArray(o.volume.data.max);
    } else {
      const prim = PRIM_BY_KIND.get(o.kind);
      const r = (prim ? prim.bound(o.params || {}) : 1) || 1;
      b.min.set(-r, -r, -r); b.max.set(r, r, r);
    }
    // 配列モディファイアで広がる範囲を反映
    const a = o.array;
    if (a && a.mode === 'grid') {
      if (a.nx > 1) b.max.x += (a.nx - 1) * a.dx;
      if (a.ny > 1) b.max.y += (a.ny - 1) * a.dy;
      if (a.nz > 1) b.max.z += (a.nz - 1) * a.dz;
    } else if (a && a.mode === 'circular') {
      const h = Math.max(Math.abs(b.min.x), Math.abs(b.max.x), Math.abs(b.min.z), Math.abs(b.max.z));
      const rr = a.radius + h;
      b.min.x = -rr; b.max.x = rr; b.min.z = -rr; b.max.z = rr;
    }
    return b;
  }

  // ---- シリアライズ ----
  serialize() {
    // volumes を一意化(VolumeData 参照ごと)
    const volList = this.volumes.map((v) => v.data);
    const volIndex = new Map(this.volumes.map((v, i) => [v, i]));
    const objects = this.objects.map((o) => {
      o.node.updateMatrix();
      const t = {
        pos: o.node.position.toArray(),
        quat: o.node.quaternion.toArray(),
        scale: o.node.scale.toArray(),
      };
      const base = {
        kind: o.kind, name: o.name, op: o.op, smoothK: o.smoothK,
        color: [o.color.r, o.color.g, o.color.b], transform: t,
        array: { ...o.array },
      };
      if (o.isVolume) base.volumeIndex = volIndex.get(o.volume);
      else base.params = o.params;
      return base;
    });
    return { objects, volumes: volList };
  }

  /** decodeSDFM 結果からシーンを復元 */
  loadSerialized({ objects, volumes }) {
    this.clear();
    // volumes をスロット付きで登録
    const volRefs = volumes.map((data) => {
      const slot = this._allocSlot();
      const tex = makeVolumeTextures(this.renderer, data);
      const vol = { data, distTex: tex.dist, colorTex: tex.color, slot };
      this.volumes.push(vol);
      return vol;
    });
    for (const s of objects) {
      const obj = new SdfObject(s.kind, s.name);
      obj.op = s.op; obj.smoothK = s.smoothK || 0;
      obj.array = s.array ? { ...s.array } : defaultArray();
      if (s.color) obj.color.fromArray(s.color);
      obj.node.position.fromArray(s.transform.pos);
      obj.node.quaternion.fromArray(s.transform.quat);
      obj.node.scale.fromArray(s.transform.scale);
      obj.node.updateMatrixWorld(true);
      if (s.kind === KIND_VOLUME) obj.volume = volRefs[s.volumeIndex];
      else obj.params = { ...(s.params || {}) }; // スナップショットと参照を共有しない
      this.group.add(obj.node);
      this.objects.push(obj);
    }
    this.notify();
  }
}

export { OP };
