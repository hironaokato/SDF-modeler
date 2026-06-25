import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { SdfScene } from './core/sdfScene.js';
import { MAX_OBJECTS } from './core/constants.js';
import { RaymarchView } from './render/raymarch.js';
import { SceneGrid } from './ui/sceneGrid.js';
import { PRIMITIVES, PRIM_BY_KIND, EXTRA_CATALOG } from './core/primitives.js';
import { convertGLB } from './convert/convertGLB.js';
import { encodeSDF, decodeSDF, isSDF } from './io/sdfFile.js';
import { encodeSDFM, decodeSDFM, isSDFM } from './io/sdfmFile.js';
import { downloadArrayBuffer } from './io/binFormat.js';
import { exportSTL, generateSceneMesh, meshGeometryFromPositions, planMesh } from './io/exportSTL.js';
import { Sculpt } from './sculpt.js';
import { makeEvaluator, objDistAt } from './core/sdfEval.js';

const $ = (id) => document.getElementById(id);

// ---- three セットアップ ----
const canvas = $('view');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.autoClear = false;
renderer.setClearColor(0x15171c, 1);

// シェーダのコンパイル/リンク失敗を画面に出す(SDFが出ない原因の切り分け用)
renderer.debug.onShaderError = (gl, program, vs, fs) => {
  const fsLog = gl.getShaderInfoLog(fs) || '';
  const vsLog = gl.getShaderInfoLog(vs) || '';
  const pLog = gl.getProgramInfoLog(program) || '';
  const log = `[Shader error]\nFRAGMENT:\n${fsLog}\nVERTEX:\n${vsLog}\nPROGRAM:\n${pLog}`;
  console.error(log);
  const el = document.getElementById('shader-error');
  if (el) { el.textContent = log; el.classList.remove('hidden'); }
};

// WebGLコンテキスト喪失(GPUハング/ドライバ復帰等)を可視化し、タブごとクラッシュを避ける
canvas.addEventListener('webglcontextlost', (e) => {
  e.preventDefault(); // 既定の喪失処理を止めて復帰の余地を残す
  const el = document.getElementById('shader-error');
  if (el) { el.textContent = 'WebGLコンテキストが失われました（GPU負荷/ドライバの可能性）。\nオブジェクトを減らすか、ページをリロードしてください。'; el.classList.remove('hidden'); }
  console.error('[WebGL] context lost');
}, false);
canvas.addEventListener('webglcontextrestored', () => {
  console.warn('[WebGL] context restored — リロードを推奨します');
  const el = document.getElementById('shader-error');
  if (el) { el.textContent = 'WebGLが復帰しました。表示が乱れる場合はページをリロードしてください。'; }
}, false);

const scene = new THREE.Scene();
// scene.background は設定しない。設定すると renderer.render(scene) が autoClear を
// 無視して強制クリアし、先に描いたレイマーチSDFを消してしまうため。
// クリア色は renderer 側に設定し、animate 冒頭の手動 clear() に任せる。
const perspCamera = new THREE.PerspectiveCamera(50, 1, 0.001, 1000);
perspCamera.position.set(2, 1.6, 2.4);
const orthoCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.001, 1000);
let camera = perspCamera;   // アクティブカメラ(透視/正投影で切替)
let isOrtho = false;

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.2; // 既定0.05は惰性が強い→少しだけ残してすぐ止める
let lastInteract = 0; // 操作中(カメラ変化)の時刻。直近なら低解像度レンダで軽量化
let modal = null; // Blender風モーダル変形の状態。animate()が参照するため宣言を前方へ(TDZ回避)
controls.addEventListener('change', () => { lastInteract = performance.now(); });

// 正投影フラスタムを現在の距離/FOVから設定
function syncOrthoFrustum() {
  const dist = Math.max(perspCamera.position.distanceTo(controls.target), 1e-3);
  const h = 2 * dist * Math.tan((perspCamera.fov * Math.PI / 180) / 2);
  const aspect = window.innerWidth / window.innerHeight;
  orthoCamera.top = h / 2; orthoCamera.bottom = -h / 2;
  orthoCamera.left = -h / 2 * aspect; orthoCamera.right = h / 2 * aspect;
  orthoCamera.near = 0.001; orthoCamera.far = 1000; orthoCamera.zoom = 1;
  orthoCamera.updateProjectionMatrix();
}
// 透視⇄正投影(位置・向きを保持)
function setOrtho(on) {
  if (on === isOrtho) return;
  const to = on ? orthoCamera : perspCamera;
  to.position.copy(camera.position);
  to.quaternion.copy(camera.quaternion);
  to.up.copy(camera.up);
  if (on) syncOrthoFrustum(); else perspCamera.updateProjectionMatrix();
  camera = to;
  controls.object = camera;
  if (typeof gizmo !== 'undefined') gizmo.camera = camera;
  isOrtho = on;
  const btn = document.getElementById('toggle-ortho');
  if (btn) { btn.textContent = on ? '正投影' : '透視投影'; btn.classList.toggle('active', on); }
  controls.update();
}

const grid = new SceneGrid();
scene.add(grid.group);
grid.group.visible = false; // SDFに透過して見えるため既定オフ

// 3Dプリント ビルドプレート(200mm角)プレビュー
const plate = new THREE.Group();
plate.visible = false;
scene.add(plate);
function plateLabel(text) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 64;
  const g = c.getContext('2d'); g.clearRect(0, 0, 256, 64);
  g.fillStyle = '#9fc0ff'; g.font = 'bold 40px sans-serif'; g.textBaseline = 'middle'; g.fillText(text, 6, 34);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthTest: false }));
  return sp;
}
function updatePlate() {
  plate.clear();
  const exportScale = parseFloat($('export-scale').value) || 1000; // mm / scene単位
  const s = 200 / exportScale; const h = s / 2;                    // 200mm をscene単位に
  const pts = [[-h, -h], [h, -h], [h, h], [-h, h], [-h, -h]].map((p) => new THREE.Vector3(p[0], 0.0006, p[1]));
  const border = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x4b76c4 }));
  const fill = new THREE.Mesh(new THREE.PlaneGeometry(s, s),
    new THREE.MeshBasicMaterial({ color: 0x4b76c4, transparent: true, opacity: 0.08, side: THREE.DoubleSide, depthWrite: false }));
  fill.rotation.x = -Math.PI / 2;
  const label = plateLabel('200mm'); label.position.set(-h, 0.002, -h); label.scale.set(s * 0.5, s * 0.125, 1);
  plate.add(fill, border, label);
}

// メッシュプレビュー用ライト(レイマーチ/グリッドには影響しない)
scene.add(new THREE.HemisphereLight(0xffffff, 0x444455, 1.0));
const dirLight = new THREE.DirectionalLight(0xffffff, 1.3);
dirLight.position.set(1, 2, 1.5);
scene.add(dirLight);

// MCメッシュプレビュー
const previewGroup = new THREE.Group();
previewGroup.visible = false;
scene.add(previewGroup);

const sdfScene = new SdfScene(renderer);
scene.add(sdfScene.group);

const raymarch = new RaymarchView(renderer);
raymarch.bindScene(sdfScene);

// シェーダの初回コンパイル(Windows/ANGLE-D3D11では数秒)を非ブロックで先行実行。
// 完了までSDF描画を止め、ブラウザが固まらないようにする(グリッド/ギズモ/UIは操作可能)。
let raymarchReady = false;
{
  const statusEl = document.getElementById('status');
  const prev = statusEl ? statusEl.textContent : '';
  if (statusEl) statusEl.textContent = 'シェーダを初回コンパイル中…（数秒、初回のみ）';
  const done = () => { raymarchReady = true; if (statusEl && statusEl.textContent.startsWith('シェーダ')) statusEl.textContent = prev; };
  raymarch.warmup(renderer).then(done, done);
}

const sculpt = new Sculpt({
  renderer, canvas, sdfScene, raymarch,
  getCamera: () => camera, getControls: () => controls,
  pushHistory: () => pushHistory(), refresh: () => refreshList(),
});

const gizmo = new TransformControls(camera, canvas);
let gizmoStart = null;
gizmo.addEventListener('dragging-changed', (e) => {
  controls.enabled = !e.value;
  if (e.value) {
    // ドラッグ開始: 複数選択の各nodeの開始行列を記録(プライマリ以外を差分で動かす)
    if (selected) { selected.node.updateMatrix(); }
    gizmoStart = selected ? {
      primary: selected.node.matrix.clone(),
      items: selection.filter((o) => o !== selected).map((o) => { o.node.updateMatrix(); return { o, start: o.node.matrix.clone() }; }),
    } : null;
  } else { gizmoStart = null; pushHistory(); updateMeshReadout(); }
});
gizmo.addEventListener('objectChange', () => {
  if (modal) return;
  if (gizmoStart && gizmoStart.items.length) {
    selected.node.updateMatrix();
    const D = new THREE.Matrix4().multiplyMatrices(selected.node.matrix, new THREE.Matrix4().copy(gizmoStart.primary).invert());
    const m = new THREE.Matrix4();
    for (const it of gizmoStart.items) {
      m.multiplyMatrices(D, it.start);
      m.decompose(it.o.node.position, it.o.node.quaternion, it.o.node.scale);
      it.o.node.updateMatrixWorld(true);
    }
  }
  renderProperties();
});
scene.add(gizmo.getHelper ? gizmo.getHelper() : gizmo);

let selected = null;     // プライマリ(アクティブ)オブジェクト
let selection = [];      // 複数選択(selected を含む)
let clipboard = null;
let dragObj = null;      // アウトライナのドラッグ中オブジェクト

// ---- Undo/Redo(状態スナップショット方式) ----
const HIST_MAX = 60;
let history = [];
let histIndex = -1;
function snapshot() {
  const s = sdfScene.serialize();
  // objects は軽量なので deep copy、volumes(距離/メッシュ大配列) は参照共有
  return { objects: JSON.parse(JSON.stringify(s.objects)), volumes: s.volumes };
}
function pushHistory() {
  history = history.slice(0, histIndex + 1);
  history.push(snapshot());
  if (history.length > HIST_MAX) history.shift();
  histIndex = history.length - 1;
}
function resetHistory() { history = [snapshot()]; histIndex = 0; }
function restoreSnapshot(snap) {
  const selIdx = selected ? sdfScene.objects.indexOf(selected) : -1;
  selected = null; selection = [];
  gizmo.detach();
  sdfScene.loadSerialized({ objects: snap.objects, volumes: snap.volumes });
  const objs = sdfScene.objects;
  if (selIdx >= 0 && selIdx < objs.length) { selected = objs[selIdx]; selection = [selected]; }
  updateSelectionVisual();
}
function undo() { if (histIndex > 0) { histIndex--; restoreSnapshot(history[histIndex]); setStatus('元に戻しました'); } }
function redo() { if (histIndex < history.length - 1) { histIndex++; restoreSnapshot(history[histIndex]); setStatus('やり直しました'); } }

// ---- ビューキューブ(右上・クリックで正投影スナップ) ----
function faceTex(text, color) {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = color; g.fillRect(0, 0, 128, 128);
  g.strokeStyle = '#1a1d24'; g.lineWidth = 6; g.strokeRect(3, 3, 122, 122);
  g.fillStyle = '#f0f2f5'; g.font = 'bold 32px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, 64, 70);
  const t = new THREE.CanvasTexture(c); t.anisotropy = 4; return t;
}
const cubeScene = new THREE.Scene();
const cubeCam = new THREE.OrthographicCamera(-1.5, 1.5, 1.5, -1.5, 0.1, 10);
cubeCam.position.set(0, 0, 4); cubeCam.lookAt(0, 0, 0);
// BoxGeometry のマテリアル順: +X,-X,+Y,-Y,+Z,-Z
const CUBE_LABELS = ['右', '左', '上', '下', '前', '後'];
const CUBE_COLS = ['#6b5b95', '#6b5b95', '#5b8a95', '#5b8a95', '#95685b', '#95685b'];
const CUBE_DIRS = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
const viewCube = new THREE.Mesh(
  new THREE.BoxGeometry(1.7, 1.7, 1.7),
  CUBE_LABELS.map((t, i) => new THREE.MeshBasicMaterial({ map: faceTex(t, CUBE_COLS[i]) })),
);
cubeScene.add(viewCube);
const CUBE_DIM = 92; // px(CSS)
const CUBE_RIGHT = 204; // 右パネル(アウトライナ)の幅+余白ぶん左へ寄せる
const cubeRay = new THREE.Raycaster();

function snapView(dir) {
  setOrtho(true);
  const box = sdfScene.worldBounds();
  const center = box.getCenter(new THREE.Vector3());
  const radius = Math.max(box.getBoundingSphere(new THREE.Sphere()).radius, 0.1);
  const dist = Math.max(camera.position.distanceTo(controls.target), radius * 2);
  controls.target.copy(center);
  const d = new THREE.Vector3(dir[0], dir[1], dir[2]);
  camera.up.set(0, 1, 0);
  if (Math.abs(dir[1]) > 0.9) camera.up.set(0, 0, dir[1] > 0 ? -1 : 1); // 上下面は z-up
  camera.position.copy(center).addScaledVector(d, dist);
  camera.lookAt(center);
  // 正投影をモデルに合わせてフィット
  const aspect = window.innerWidth / window.innerHeight;
  const hh = radius * 1.2;
  orthoCamera.top = hh; orthoCamera.bottom = -hh;
  orthoCamera.left = -hh * aspect; orthoCamera.right = hh * aspect;
  orthoCamera.zoom = 1; orthoCamera.updateProjectionMatrix();
  controls.update();
}

// ---- リサイズ ----
function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, false);
  perspCamera.aspect = w / h; perspCamera.updateProjectionMatrix();
  if (isOrtho) syncOrthoFrustum();
}
window.addEventListener('resize', resize); resize();

// ---- 描画ループ ----
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  camera.updateMatrixWorld();
  renderer.clear();
  // 操作中(カメラ移動/ギズモ/スカルプト/モーダル変形)は低品質レイマーチで軽量化
  const moving = (performance.now() - lastInteract < 120) || gizmo.dragging || (sculpt.active && sculpt.stroking) || !!modal;
  if (showSDF && raymarchReady) raymarch.render(renderer, camera, moving ? 0.4 : 1.0);   // SDF(背景の上に透過描画。warmup完了まで待つ)
  renderer.render(scene, camera);      // グリッド+プロキシ+ギズモ+プレビューを上に

  // ビューキューブを右上に重ねて描画
  viewCube.quaternion.copy(camera.quaternion).invert();
  const cw = canvas.clientWidth, ch = canvas.clientHeight;
  const cubeX = cw - CUBE_DIM - CUBE_RIGHT;
  renderer.clearDepth();
  renderer.setScissorTest(true);
  renderer.setViewport(cubeX, ch - CUBE_DIM, CUBE_DIM, CUBE_DIM);
  renderer.setScissor(cubeX, ch - CUBE_DIM, CUBE_DIM, CUBE_DIM);
  renderer.render(cubeScene, cubeCam);
  renderer.setScissorTest(false);
  renderer.setViewport(0, 0, cw, ch);
}
let showSDF = true;
animate();
resetHistory(); // 空シーンを履歴の起点に

// ---- プロキシ(選択/ギズモ用の枠) ----
function clearProxies() {
  for (const o of sdfScene.objects) {
    if (o._proxy) { o.node.remove(o._proxy.g); o._proxy.boxGeo.dispose(); o._proxy = null; }
  }
}
function rebuildProxies() {
  clearProxies();
  for (const o of sdfScene.objects) {
    const lb = sdfScene._localBounds(o);
    const size = lb.getSize(new THREE.Vector3());
    const center = lb.getCenter(new THREE.Vector3());
    const boxGeo = new THREE.BoxGeometry(Math.max(size.x, 1e-3), Math.max(size.y, 1e-3), Math.max(size.z, 1e-3));
    const g = new THREE.Group();
    const pick = new THREE.Mesh(boxGeo, new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false }));
    pick.position.copy(center); pick.userData.obj = o;
    const wire = new THREE.LineSegments(new THREE.EdgesGeometry(boxGeo),
      new THREE.LineBasicMaterial({ color: 0x3b82f6 }));
    wire.position.copy(center); wire.visible = false;
    g.add(pick, wire);
    o.node.add(g);
    o._proxy = { g, pick, wire, boxGeo };
  }
  applyWireHighlights();
}

// ---- 選択(複数選択対応) ----
function isSelected(o) { return selection.includes(o); }
function applyWireHighlights() {
  for (const o of sdfScene.objects) {
    if (!o._proxy) continue;
    o._proxy.wire.visible = isSelected(o);
    o._proxy.wire.material.color.set(o === selected ? 0xffa64d : 0x3b82f6); // プライマリ=橙 他=青
  }
}
function updateSelectionVisual() {
  applyWireHighlights();
  if (selected) gizmo.attach(selected.node); else gizmo.detach();
  refreshList();
}
function select(obj) { // 単一選択
  selection = obj ? [obj] : [];
  selected = obj || null;
  updateSelectionVisual();
}
function clickSelect(obj, additive, toggle) {
  if (!obj) { if (!additive && !toggle) select(null); return; }
  if (toggle) { // Ctrl: 個別トグル
    const i = selection.indexOf(obj);
    if (i >= 0) { selection.splice(i, 1); if (selected === obj) selected = selection[selection.length - 1] || null; }
    else { selection.push(obj); selected = obj; }
  } else if (additive) { // Shift: 追加
    if (!selection.includes(obj)) selection.push(obj);
    selected = obj;
  } else { // 単一
    selection = [obj]; selected = obj;
  }
  updateSelectionVisual();
}
// アウトライナの並び替え(合成順の変更)
function reorderObject(obj, insertIndex) {
  const arr = sdfScene.objects;
  const cur = arr.indexOf(obj);
  if (cur < 0) return;
  arr.splice(cur, 1);
  let t = insertIndex; if (cur < insertIndex) t -= 1;
  t = Math.max(0, Math.min(arr.length, t));
  arr.splice(t, 0, obj);
  sdfScene.notify();
}
// ---- SDFベースのクリック選択(表示されている面のオーナーを選ぶ) ----
function buildSceneDesc(objList = sdfScene.objects) {
  const volIndex = new Map(sdfScene.volumes.map((v, i) => [v, i]));
  const volumes = sdfScene.volumes.map((v) => ({ res: v.data.resolution, min: v.data.min, max: v.data.max, distance: v.data.distance }));
  const objects = objList.map((o) => {
    o.node.updateMatrixWorld(true);
    const inv = new THREE.Matrix4().copy(o.node.matrixWorld).invert();
    const sc = o.node.scale;
    const scale = Math.max(Math.min(Math.abs(sc.x), Math.abs(sc.y), Math.abs(sc.z)), 1e-5);
    const base = { kind: o.kind, op: o.op, smoothK: o.smoothK || 0, inv: Array.from(inv.elements), scale, array: { ...o.array } };
    if (o.isVolume) base.volSlot = volIndex.get(o.volume);
    else { const prim = PRIM_BY_KIND.get(o.kind); const p = prim.pack(o.params || {}); base.a = p.a; base.b = p.b; }
    return base;
  });
  return { objects, volumes };
}
function pickSDF(e) {
  if (sdfScene.objects.length === 0) return null;
  const desc = buildSceneDesc();
  const f = makeEvaluator(desc, { hiDetail: false });
  const rect = canvas.getBoundingClientRect();
  const ndc = new THREE.Vector2(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  const ro = ray.ray.origin, rd = ray.ray.direction;
  const box = sdfScene.worldBounds();
  const sz = box.getSize(new THREE.Vector3());
  const pad = sz.length() * 0.02;
  const mn = [box.min.x - pad, box.min.y - pad, box.min.z - pad], mx = [box.max.x + pad, box.max.y + pad, box.max.z + pad];
  let tn = -1e9, tf = 1e9;
  for (let k = 0; k < 3; k++) {
    const o = k === 0 ? ro.x : k === 1 ? ro.y : ro.z, d = 1 / (k === 0 ? rd.x : k === 1 ? rd.y : rd.z);
    let t0 = (mn[k] - o) * d, t1 = (mx[k] - o) * d; if (t0 > t1) { const tt = t0; t0 = t1; t1 = tt; }
    tn = Math.max(tn, t0); tf = Math.min(tf, t1);
  }
  if (tf < Math.max(tn, 0)) return null;
  const eps = Math.max(sz.length() * 0.0012, 1e-5);
  let t = Math.max(tn, 0) + eps;
  for (let s = 0; s < 600 && t < tf; s++) {
    const px = ro.x + rd.x * t, py = ro.y + rd.y * t, pz = ro.z + rd.z * t;
    const d = f(px, py, pz);
    if (d < eps) {
      let best = -1, bestD = Infinity;
      desc.objects.forEach((o, idx) => { const od = Math.abs(objDistAt(o, desc.volumes, px, py, pz)); if (od < bestD) { bestD = od; best = idx; } });
      return best >= 0 ? sdfScene.objects[best] : null;
    }
    t += Math.max(d * 0.8, eps);
  }
  return null;
}
// ---- Boolean結果をボリュームへベイク(統合/軽量化) ----
function sampleVolumeData(objs, res, name) {
  const ordered = objs.slice().sort((a, b) => sdfScene.objects.indexOf(a) - sdfScene.objects.indexOf(b));
  const desc = buildSceneDesc(ordered);
  const f = makeEvaluator(desc, { hiDetail: false });
  const box = new THREE.Box3(); let any = false;
  for (const o of ordered) { if (o.op === 'subtract') continue; box.union(sdfScene.objAABB(o)); any = true; }
  if (!any) for (const o of ordered) box.union(sdfScene.objAABB(o));
  const size = box.getSize(new THREE.Vector3());
  const pad = size.length() * 0.05 + 1e-3;
  const min = [box.min.x - pad, box.min.y - pad, box.min.z - pad];
  const max = [box.max.x + pad, box.max.y + pad, box.max.z + pad];
  const dist = new Float32Array(res * res * res);
  const dx = (max[0] - min[0]) / (res - 1), dy = (max[1] - min[1]) / (res - 1), dz = (max[2] - min[2]) / (res - 1);
  let i = 0;
  for (let z = 0; z < res; z++) { const wz = min[2] + z * dz; for (let y = 0; y < res; y++) { const wy = min[1] + y * dy; for (let x = 0; x < res; x++) dist[i++] = f(min[0] + x * dx, wy, wz); } }
  return { name: name || 'merged', resolution: res, min, max, signed: true, hasColor: false, distance: dist, color: null, mesh: null };
}
function mergeToVolume(objs, res) {
  const ordered = objs.slice().sort((a, b) => sdfScene.objects.indexOf(a) - sdfScene.objects.indexOf(b));
  const data = sampleVolumeData(ordered, res, 'merged');
  return sdfScene.mergeToVolume(ordered, data);
}

function deleteSelected() {
  if (selection.length === 0) return;
  [...selection].forEach((o) => sdfScene.remove(o));
  selection = []; selected = null;
  updateSelectionVisual(); pushHistory();
}

// ---- 初期サイズ ポップアップ(プリミティブ追加直後) ----
const SIZE_PRESETS = [0.01, 0.1, 0.5, 1, 10, 100];
function hideSizePopup() { $('size-popup').classList.add('hidden'); }
function applyInitialSize(obj, size) {
  const prim = PRIM_BY_KIND.get(obj.kind);
  const base = (prim ? prim.bound(obj.params || {}) * 2 : 1) || 1; // scale=1での概略サイズ(プロキシ箱)
  obj.node.scale.setScalar(size / base);
  obj.node.updateMatrixWorld(true);
  rebuildProxies(); refreshList(); pushHistory();
}
function showSizePopup(obj) {
  const pop = $('size-popup');
  pop.innerHTML = '<span class="lbl">初期サイズ</span>';
  SIZE_PRESETS.forEach((s) => {
    const b = document.createElement('button');
    b.textContent = s;
    b.onclick = () => { applyInitialSize(obj, s); hideSizePopup(); };
    pop.appendChild(b);
  });
  camera.updateMatrixWorld();
  const sp = screenOf(obj.node.position);
  pop.classList.remove('hidden');
  const w = pop.offsetWidth || 280, h = pop.offsetHeight || 32;
  pop.style.left = Math.min(window.innerWidth - w - 8, Math.max(8, sp.x + 14)) + 'px';
  pop.style.top = Math.min(window.innerHeight - h - 8, Math.max(8, sp.y - h - 10)) + 'px';
}
// ポップアップ外のポインタ操作で閉じる(選択や他操作で即消す)
window.addEventListener('pointerdown', (e) => {
  const pop = $('size-popup');
  if (!pop.classList.contains('hidden') && !pop.contains(e.target)) hideSizePopup();
}, true);

// ---- カメラフィット ----
function fit() {
  const box = sdfScene.worldBounds();
  const center = box.getCenter(new THREE.Vector3());
  const sphere = box.getBoundingSphere(new THREE.Sphere());
  const r = Math.max(sphere.radius, 0.1);
  controls.target.copy(center);
  const dist = r / Math.sin((perspCamera.fov * Math.PI) / 180 / 2);
  camera.position.copy(center).add(new THREE.Vector3(0.8, 0.6, 1).normalize().multiplyScalar(dist * 1.1));
  camera.near = r / 200; camera.far = r * 200;
  if (camera.isPerspectiveCamera) camera.updateProjectionMatrix(); else syncOrthoFrustum();
}

// オブジェクトのワールドAABB
function objWorldBox(o) {
  const b = sdfScene._localBounds(o);
  const box = new THREE.Box3();
  o.node.updateMatrixWorld(true);
  for (let i = 0; i < 8; i++) {
    const c = new THREE.Vector3((i & 1) ? b.max.x : b.min.x, (i & 2) ? b.max.y : b.min.y, (i & 4) ? b.max.z : b.min.z);
    c.applyMatrix4(o.node.matrixWorld); box.expandByPoint(c);
  }
  return box;
}
// 現在の視線方向を保ったまま、与えた箱を画角にフィット
function frameBox(box) {
  const center = box.getCenter(new THREE.Vector3());
  const r = Math.max(box.getBoundingSphere(new THREE.Sphere()).radius, 0.05);
  const dir = new THREE.Vector3().subVectors(camera.position, controls.target);
  if (dir.lengthSq() < 1e-9) dir.set(0.8, 0.6, 1);
  dir.normalize();
  controls.target.copy(center);
  const dist = r / Math.sin((perspCamera.fov * Math.PI) / 180 / 2);
  camera.position.copy(center).addScaledVector(dir, dist * 1.1);
  camera.near = r / 200; camera.far = r * 200;
  if (camera.isPerspectiveCamera) camera.updateProjectionMatrix();
  else {
    const aspect = window.innerWidth / window.innerHeight, hh = r * 1.2;
    orthoCamera.top = hh; orthoCamera.bottom = -hh; orthoCamera.left = -hh * aspect; orthoCamera.right = hh * aspect;
    orthoCamera.zoom = 1; orthoCamera.updateProjectionMatrix();
  }
  controls.update();
}
function frameSelected() {
  if (sdfScene.objects.length === 0) return;
  if (selection.length === 0) { frameBox(sdfScene.worldBounds()); return; }
  const box = new THREE.Box3();
  selection.forEach((o) => box.union(objWorldBox(o)));
  frameBox(box);
}

// ---- アウトライナ(オブジェクト一覧) ----
function renderOutliner() {
  const list = $('object-list');
  list.innerHTML = '';
  if (sdfScene.objects.length === 0) { list.innerHTML = '<div class="empty">オブジェクトなし</div>'; return; }
  // ブーリアン種別による名前カラー(ベースは中立)
  const OP_COLOR = { union: '#8bd17c', subtract: '#f0928f', intersect: '#f0c674' };
  sdfScene.objects.forEach((o, idx) => {
    const row = document.createElement('div');
    row.className = 'orow' + (isSelected(o) ? ' sel' : '') + (o === selected ? ' primary' : '');
    row.onclick = (e) => clickSelect(o, e.shiftKey, e.ctrlKey || e.metaKey);
    // ドラッグで合成順を並び替え
    row.draggable = true;
    row.ondragstart = (e) => { dragObj = o; e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', ''); };
    row.ondragover = (e) => {
      if (!dragObj || dragObj === o) return;
      e.preventDefault();
      const r = row.getBoundingClientRect();
      const after = (e.clientY - r.top) > r.height / 2;
      row.classList.toggle('drop-after', after); row.classList.toggle('drop-before', !after);
    };
    row.ondragleave = () => row.classList.remove('drop-before', 'drop-after');
    row.ondrop = (e) => {
      e.preventDefault();
      if (!dragObj) return;
      const r = row.getBoundingClientRect();
      const after = (e.clientY - r.top) > r.height / 2;
      reorderObject(dragObj, idx + (after ? 1 : 0));
      pushHistory(); dragObj = null;
    };
    row.ondragend = () => { dragObj = null; document.querySelectorAll('.orow').forEach((x) => x.classList.remove('drop-before', 'drop-after')); };
    const ico = document.createElement('span');
    if (o.hasArray) { ico.className = 'ico arr'; ico.textContent = o.array.mode === 'circular' ? '◎' : '▦'; }
    else ico.className = 'ico ' + (o.isVolume ? 'vol' : 'prim');
    const nm = document.createElement('span'); nm.className = 'nm'; nm.textContent = o.name; nm.title = o.name;
    nm.style.color = (idx === 0) ? '#e6e8ec' : (OP_COLOR[o.op] || '#e6e8ec'); // 合体=緑 削る=赤 交差=黄
    const del = document.createElement('button'); del.className = 'x'; del.textContent = '✕'; del.title = '削除';
    del.onclick = (e) => {
      e.stopPropagation();
      sdfScene.remove(o);
      selection = selection.filter((x) => x !== o);
      if (selected === o) selected = selection[selection.length - 1] || null;
      updateSelectionVisual(); pushHistory();
    };
    row.append(ico, nm, del);
    list.appendChild(row);
  });
}

// ---- プロパティ(選択オブジェクト) ----
function renderProperties() {
  const body = $('prop-body');
  body.innerHTML = '';
  const o = selected;
  if (!o) { body.innerHTML = '<div class="empty">未選択</div>'; return; }
  const idx = sdfScene.objects.indexOf(o);

  const head = document.createElement('div'); head.className = 'pname';
  head.textContent = o.name + (idx === 0 ? '  (ベース)' : '');
  body.appendChild(head);

  if (idx > 0) {
    const lab = document.createElement('div'); lab.className = 'sh'; lab.textContent = 'ブーリアン';
    body.appendChild(lab);
    const seg = document.createElement('div'); seg.className = 'seg-row';
    [['union', '合体'], ['subtract', '削る'], ['intersect', '交差']].forEach(([v, t]) => {
      const b = document.createElement('button'); b.className = 'seg' + (o.op === v ? ' active' : ''); b.textContent = t;
      b.onclick = () => { o.op = v; pushHistory(); refreshList(); };
      seg.appendChild(b);
    });
    body.appendChild(seg);

    const sl = document.createElement('label'); sl.className = 'f';
    const sp = document.createElement('span'); sp.textContent = 'スムーズ';
    const sr = document.createElement('input');
    sr.type = 'range'; sr.min = 0; sr.max = 0.5; sr.step = 0.005; sr.value = o.smoothK;
    sr.oninput = () => { o.smoothK = parseFloat(sr.value); };
    sr.onchange = pushHistory;
    sl.append(sp, sr); body.appendChild(sl);
  }

  // 変換(位置 / 回転° / スケール) — ブーリアンの下
  const tlab = document.createElement('div'); tlab.className = 'sh'; tlab.textContent = '変換';
  body.appendChild(tlab);
  const xyzRow = (label, read, write, step) => {
    const row = document.createElement('div'); row.className = 'xyz';
    const s = document.createElement('span'); s.textContent = label; row.appendChild(s);
    ['x', 'y', 'z'].forEach((ax) => {
      const i = document.createElement('input');
      i.type = 'number'; i.step = step; i.value = +read(ax).toFixed(4);
      i.oninput = () => { const v = parseFloat(i.value); if (!isNaN(v)) { write(ax, v); o.node.updateMatrixWorld(true); } };
      i.onchange = pushHistory;
      row.appendChild(i);
    });
    body.appendChild(row);
  };
  xyzRow('位置', (ax) => o.node.position[ax], (ax, v) => { o.node.position[ax] = v; }, 0.01);
  xyzRow('回転°', (ax) => THREE.MathUtils.radToDeg(o.node.rotation[ax]), (ax, v) => { o.node.rotation[ax] = THREE.MathUtils.degToRad(v); }, 1);
  xyzRow('拡縮', (ax) => o.node.scale[ax], (ax, v) => { o.node.scale[ax] = v || 1e-3; }, 0.01);

  if (!o.isVolume) {
    const prim = PRIM_BY_KIND.get(o.kind);
    if (prim && prim.params.length) {
      const lab = document.createElement('div'); lab.className = 'sh'; lab.textContent = '寸法';
      body.appendChild(lab);
      const grid = document.createElement('div'); grid.className = 'g2';
      for (const pr of prim.params) {
        const l = document.createElement('label'); l.className = 'f';
        const s = document.createElement('span'); s.textContent = pr.label;
        const i = document.createElement('input');
        i.type = 'number'; i.step = pr.step ?? 0.01; i.value = o.params[pr.key];
        if (pr.min != null) i.min = pr.min; if (pr.max != null) i.max = pr.max;
        i.oninput = () => { o.params[pr.key] = parseFloat(i.value); rebuildProxies(); };
        i.onchange = pushHistory;
        l.append(s, i); grid.appendChild(l);
      }
      body.appendChild(grid);
    }
  }

  // ---- 配列モディファイア ----
  const alab = document.createElement('div'); alab.className = 'sh'; alab.textContent = '配列モディファイア';
  body.appendChild(alab);
  const amode = document.createElement('select');
  [['none', 'なし'], ['grid', 'グリッド(XYZ)'], ['circular', '円形']].forEach(([v, t]) => {
    const e = document.createElement('option'); e.value = v; e.textContent = t; amode.appendChild(e);
  });
  amode.value = o.array.mode;
  amode.onchange = () => { o.array.mode = amode.value; pushHistory(); rebuildProxies(); refreshList(); };
  body.appendChild(amode);

  const arrRow = (label, fields) => {
    const row = document.createElement('div'); row.className = 'xyz';
    const s = document.createElement('span'); s.textContent = label; row.appendChild(s);
    fields.forEach(({ key, step, min, int }) => {
      const i = document.createElement('input'); i.type = 'number'; i.step = step; if (min != null) i.min = min;
      i.value = o.array[key];
      i.oninput = () => { let v = parseFloat(i.value); if (!isNaN(v)) { if (int) v = Math.max(min || 1, Math.round(v)); o.array[key] = v; rebuildProxies(); } };
      i.onchange = pushHistory;
      row.appendChild(i);
    });
    body.appendChild(row);
  };
  if (o.array.mode === 'grid') {
    arrRow('個数', ['nx', 'ny', 'nz'].map((key) => ({ key, step: 1, min: 1, int: true })));
    arrRow('間隔', ['dx', 'dy', 'dz'].map((key) => ({ key, step: 0.05, min: 0 })));
  } else if (o.array.mode === 'circular') {
    arrRow('個数/半径', [{ key: 'count', step: 1, min: 1, int: true }, { key: 'radius', step: 0.05, min: 0 }]);
  }
}

function refreshList() { renderOutliner(); renderProperties(); }

sdfScene.onChange = () => {
  rebuildProxies(); refreshList(); updateMeshReadout();
  if (sdfScene.objects.length > MAX_OBJECTS) setStatus(`表示上限 ${MAX_OBJECTS} 個を超えています（${sdfScene.objects.length}個）。${MAX_OBJECTS + 1}個目以降は表示されません`);
};

// ---- メッシュ/STL 設定(物理単位ベース) ----
const MAX_AXIS = 1280; // ストリーミングMCでメモリO(N^2)のため大きめ可(制約は時間)
const AUTO_CELLS = 200; // 自動モードで最長辺をこのセル数に保つ(密度・速度を一定化)
function getMeshOpts() {
  const exportScale = parseFloat($('export-scale').value) || 1000; // scene単位→mm
  let voxelMm = parseFloat($('voxel-mm').value) || 1.0;            // 出力mmでのセルサイズ
  // 自動: Boolean後に残る範囲の最長辺からボクセルを算出(セル数を一定に)
  if ($('auto-voxel') && $('auto-voxel').checked && sdfScene.objects.length) {
    const sz = sdfScene.worldBounds().getSize(new THREE.Vector3());
    const maxMm = Math.max(sz.x, sz.y, sz.z) * exportScale;
    voxelMm = Math.max(maxMm / AUTO_CELLS, 0.001);
    $('voxel-mm').value = +voxelMm.toFixed(3); // 算出値を表示に反映
  }
  const cellSize = voxelMm / exportScale;                          // scene単位
  return { cellSize, maxAxis: MAX_AXIS, exportScale, voxelMm };
}
function updateMeshReadout() {
  const el = $('mesh-readout');
  if (!el) return;
  if (sdfScene.objects.length === 0) { el.textContent = ''; return; }
  const { cellSize, maxAxis, exportScale, voxelMm } = getMeshOpts();
  const plan = planMesh(sdfScene, cellSize, maxAxis);
  const outMm = plan.ext.map((e) => e * exportScale);
  const sizeStr = outMm.map((m) => (m < 10 ? m.toFixed(2) : Math.round(m))).join('×');
  const actVox = Math.max(...plan.cellUsed.map((c) => c * exportScale));
  el.textContent = `出力 ${sizeStr}mm / ボクセル ${voxelMm}mm / グリッド ${plan.dims.join('×')}`
    + (plan.clamped ? ` ⚠上限${maxAxis}で粗化(実${actVox.toFixed(2)}mm)` : '');
}

// ---- ファイル取り込み ----
function setStatus(m) { $('status').textContent = m; }
const progress = $('progress'), barFill = $('bar-fill'), progLabel = $('progress-label');

async function handleFile(file) {
  const buf = await file.arrayBuffer();
  const name = file.name;
  try {
    if (isSDFM(buf)) {
      const data = decodeSDFM(buf);
      sdfScene.loadSerialized(data);
      if (data.grid && data.grid.cellSize) { grid.setCellSize(data.grid.cellSize); $('grid-cell').value = grid.cellSize; updateLegend(); }
      select(null); fit();
      resetHistory();
      setStatus(`シーン読込: ${name}（オブジェクト ${data.objects.length}）`);
    } else if (isSDF(buf)) {
      const v = decodeSDF(buf); v.name = v.name || name.replace(/\.sdf$/i, '');
      const obj = sdfScene.addVolume(v); select(obj); fit();
      pushHistory();
      setStatus(`ボリューム追加: ${v.name}（${v.resolution}³）`);
    } else if (/\.(glb|gltf)$/i.test(name)) {
      await convertAndAdd(buf, name);
    } else {
      setStatus(`未対応のファイル: ${name}`);
    }
  } catch (err) { console.error(err); setStatus(`エラー: ${err.message}`); }
}

async function convertAndAdd(buf, name) {
  const resolution = parseInt($('resolution').value, 10);
  const signRays = parseInt($('sign-rays').value, 10);
  progress.classList.remove('hidden'); barFill.style.width = '0%';
  progLabel.textContent = `SDF変換中 (${resolution}³)…`;
  const t0 = performance.now();
  try {
    const v = await convertGLB(buf, {
      resolution, signRays, name: name.replace(/\.(glb|gltf)$/i, ''),
      onProgress: (p) => { barFill.style.width = `${(p * 100) | 0}%`; },
    });
    const obj = sdfScene.addVolume(v); select(obj); fit();
    pushHistory();
    const sec = ((performance.now() - t0) / 1000).toFixed(1);
    logVolumeDiag(v);
    setStatus(`変換完了: ${v.name}（${v.resolution}³, ${sec}s）/ 「.sdf保存」で再利用可`);
  } catch (err) { console.error(err); setStatus(`変換エラー: ${err.message}`); }
  finally { progress.classList.add('hidden'); }
}

function readFiles(files) { [...files].forEach((f) => handleFile(f)); }

// 診断: 距離場の統計とシーン境界をコンソールへ
function logVolumeDiag(v) {
  const d = v.distance; let mn = Infinity, mx = -Infinity, neg = 0;
  for (let i = 0; i < d.length; i++) { const x = d[i]; if (x < mn) mn = x; if (x > mx) mx = x; if (x < 0) neg++; }
  const box = sdfScene.worldBounds();
  console.log('[diag] volume', v.name, 'res', v.resolution,
    '\n  data.min', v.min, 'data.max', v.max,
    '\n  distance range', mn.toFixed(4), '..', mx.toFixed(4), ' neg%', (100 * neg / d.length).toFixed(1),
    '\n  worldBounds', box.min.toArray().map((n) => n.toFixed(3)), box.max.toArray().map((n) => n.toFixed(3)),
    '\n  objCount', sdfScene.objects.length, ' volumes', sdfScene.volumes.length);
}

// ---- D&D ----
const overlay = $('drop-overlay'); let dragDepth = 0;
// OSからのファイルドラッグのみ反応(アウトライナ内のドラッグ並び替えとは切り分け)
const isFileDrag = (e) => e.dataTransfer && Array.from(e.dataTransfer.types || []).includes('Files');
window.addEventListener('dragenter', (e) => { if (!isFileDrag(e)) return; e.preventDefault(); dragDepth++; overlay.classList.remove('hidden'); });
window.addEventListener('dragover', (e) => { if (!isFileDrag(e)) return; e.preventDefault(); });
window.addEventListener('dragleave', (e) => { if (!isFileDrag(e)) return; e.preventDefault(); if (--dragDepth <= 0) overlay.classList.add('hidden'); });
window.addEventListener('drop', (e) => { if (!isFileDrag(e)) return; e.preventDefault(); dragDepth = 0; overlay.classList.add('hidden'); if (e.dataTransfer.files.length) readFiles(e.dataTransfer.files); });

// ---- Blender風モーダル変形(G/R/S → マウス追従, クリック確定 / Esc・右クリック取消) ----
// 注: `modal` の宣言は animate() より前(ファイル冒頭付近)へ巻き上げ済み(TDZ回避)
const lastMouse = { x: 0, y: 0 };
const modalRay = new THREE.Raycaster();
const _camDir = new THREE.Vector3(), _plane = new THREE.Plane(), _hit = new THREE.Vector3();

function ndcOf(cx, cy) {
  const r = canvas.getBoundingClientRect();
  return new THREE.Vector2(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
}
function screenOf(worldPos) {
  const r = canvas.getBoundingClientRect();
  const v = worldPos.clone().project(camera);
  return { x: (v.x * 0.5 + 0.5) * r.width + r.left, y: (-v.y * 0.5 + 0.5) * r.height + r.top };
}
function axisVec(a) { return new THREE.Vector3(a === 'x' ? 1 : 0, a === 'y' ? 1 : 0, a === 'z' ? 1 : 0); }

function enterModal(mode) {
  if (selection.length === 0 || modal) return;
  camera.getWorldDirection(_camDir);
  // ピボット = 選択の中央(各nodeの位置の平均)
  const pivot = new THREE.Vector3();
  selection.forEach((o) => { o.node.updateMatrix(); pivot.add(o.node.position); });
  pivot.multiplyScalar(1 / selection.length);
  modal = {
    mode, axis: null, viewDir: _camDir.clone(), pivot,
    items: selection.map((o) => ({ o, start: o.node.matrix.clone() })),
  };
  _plane.setFromNormalAndCoplanarPoint(modal.viewDir, pivot);
  modalRay.setFromCamera(ndcOf(lastMouse.x, lastMouse.y), camera);
  modal.startHit = new THREE.Vector3();
  modalRay.ray.intersectPlane(_plane, modal.startHit);
  const sc = screenOf(pivot);
  modal.screenC = sc;
  modal.startAngle = Math.atan2(lastMouse.y - sc.y, lastMouse.x - sc.x);
  modal.startDist = Math.max(Math.hypot(lastMouse.x - sc.x, lastMouse.y - sc.y), 1e-3);
  controls.enabled = false;
  gizmo.enabled = false;
  (gizmo.getHelper ? gizmo.getHelper() : gizmo).visible = false;
  setGizmoMode(mode);
  const name = mode === 'translate' ? '移動(G)' : mode === 'rotate' ? '回転(R)' : '拡大(S)';
  const n = selection.length > 1 ? ` ×${selection.length}` : '';
  setStatus(`${name}${n}: マウス移動 / X・Y・Zで軸固定 / クリック確定 / Esc・右クリック取消`);
  updateModal(lastMouse.x, lastMouse.y);
}

function updateModal(cx, cy) {
  if (!modal) return;
  const T = (v) => new THREE.Matrix4().makeTranslation(v.x, v.y, v.z);
  const D = new THREE.Matrix4(); // ワールド空間の差分変換
  if (modal.mode === 'translate') {
    modalRay.setFromCamera(ndcOf(cx, cy), camera);
    if (!modalRay.ray.intersectPlane(_plane, _hit)) return;
    const delta = _hit.clone().sub(modal.startHit);
    if (modal.axis) { const ax = axisVec(modal.axis); delta.copy(ax).multiplyScalar(delta.dot(ax)); }
    D.makeTranslation(delta.x, delta.y, delta.z);
  } else if (modal.mode === 'rotate') {
    const ang = Math.atan2(cy - modal.screenC.y, cx - modal.screenC.x) - modal.startAngle;
    const axis = (modal.axis ? axisVec(modal.axis) : modal.viewDir.clone()).normalize();
    const R = new THREE.Matrix4().makeRotationAxis(axis, -ang);
    D.multiply(T(modal.pivot)).multiply(R).multiply(T(modal.pivot.clone().negate()));
  } else { // scale
    const dist = Math.max(Math.hypot(cx - modal.screenC.x, cy - modal.screenC.y), 1e-3);
    const f = dist / modal.startDist;
    const s = new THREE.Vector3(f, f, f);
    if (modal.axis === 'x') { s.y = 1; s.z = 1; } else if (modal.axis === 'y') { s.x = 1; s.z = 1; } else if (modal.axis === 'z') { s.x = 1; s.y = 1; }
    const S = new THREE.Matrix4().makeScale(s.x, s.y, s.z);
    D.multiply(T(modal.pivot)).multiply(S).multiply(T(modal.pivot.clone().negate()));
  }
  const m = new THREE.Matrix4();
  for (const it of modal.items) {
    m.multiplyMatrices(D, it.start);
    m.decompose(it.o.node.position, it.o.node.quaternion, it.o.node.scale);
    it.o.node.updateMatrixWorld(true);
  }
  if (selection.length === 1) renderProperties();
}

function exitModal(commit) {
  if (!modal) return;
  if (!commit) {
    for (const it of modal.items) {
      it.start.decompose(it.o.node.position, it.o.node.quaternion, it.o.node.scale);
      it.o.node.updateMatrixWorld(true);
    }
  }
  modal = null;
  controls.enabled = true;
  gizmo.enabled = true;
  (gizmo.getHelper ? gizmo.getHelper() : gizmo).visible = true;
  downPos = null;
  refreshList();
  if (commit) pushHistory();
  updateMeshReadout();
  setStatus(commit ? '変形を確定しました' : '変形を取消しました');
}

window.addEventListener('pointermove', (e) => {
  lastMouse.x = e.clientX; lastMouse.y = e.clientY;
  if (modal) updateModal(e.clientX, e.clientY);
  if (sculpt.active) sculpt.pointerMove(e);
});
canvas.addEventListener('contextmenu', (e) => { if (modal) e.preventDefault(); });
// スカルプト中: Alt+左ドラッグでカメラ回転(Altなしの左は彫刻)。中ドラッグ回転も併用可。
canvas.addEventListener('pointerdown', (e) => {
  if (sculpt.active) controls.mouseButtons.LEFT = e.altKey ? THREE.MOUSE.ROTATE : -1;
}, true);

// ---- ビューポート選択(クリック vs ドラッグ判別) ----
const ray = new THREE.Raycaster();
let downPos = null;
canvas.addEventListener('pointerdown', (e) => {
  if (sculpt.active) { if (e.button === 0 && !e.altKey) sculpt.pointerDown(e); return; } // 左=彫刻 / Alt+左=回転
  if (modal) { exitModal(e.button !== 2); e.preventDefault(); return; } // 左=確定 右=取消
  downPos = { x: e.clientX, y: e.clientY };
});
canvas.addEventListener('pointerup', (e) => {
  if (sculpt.active) { sculpt.pointerUp(); return; }
  if (modal) return;
  if (!downPos || gizmo.dragging) return;
  const moved = Math.hypot(e.clientX - downPos.x, e.clientY - downPos.y);
  downPos = null;
  if (moved > 4) return; // ドラッグはカメラ操作
  const rect = canvas.getBoundingClientRect();

  // ビューキューブ(右上)のクリック判定を先に
  const lx = e.clientX - rect.left, ly = e.clientY - rect.top;
  const cw = canvas.clientWidth;
  const cubeX = cw - CUBE_DIM - CUBE_RIGHT;
  if (lx >= cubeX && lx <= cubeX + CUBE_DIM && ly <= CUBE_DIM) {
    const nx = ((lx - cubeX) / CUBE_DIM) * 2 - 1;
    const ny = -(ly / CUBE_DIM) * 2 + 1;
    cubeRay.setFromCamera(new THREE.Vector2(nx, ny), cubeCam);
    const hit = cubeRay.intersectObject(viewCube)[0];
    if (hit) snapView(CUBE_DIRS[hit.face.materialIndex]);
    return;
  }

  const hit = pickSDF(e); // SDFの実表示面でピッキング(大きい境界の誤選択を防ぐ)
  clickSelect(hit, e.shiftKey, e.ctrlKey || e.metaKey); // Shift=追加 Ctrl=トグル
});

// ---- UI 配線 ----
$('open-btn').onclick = () => $('file-input').click();
$('file-input').onchange = (e) => readFiles(e.target.files);
$('show-color').onchange = (e) => raymarch.setShowColor(e.target.checked);

function updateLegend() { $('legend').textContent = grid.legend(); }
$('grid-cell').onchange = (e) => { grid.setCellSize(parseFloat(e.target.value) || 0.1); updateLegend(); };
$('show-grid').onchange = (e) => { grid.group.visible = e.target.checked; };
$('show-plate').onchange = (e) => { plate.visible = e.target.checked; if (e.target.checked) updatePlate(); };
$('tile-cull').onchange = (e) => raymarch.setTileCull(e.target.checked);
updateLegend();

// ギズモ mode
document.querySelectorAll('[data-gizmo]').forEach((btn) => {
  btn.onclick = () => {
    document.querySelectorAll('[data-gizmo]').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    gizmo.setMode(btn.dataset.gizmo);
  };
});
function setGizmoMode(m) {
  gizmo.setMode(m);
  document.querySelectorAll('[data-gizmo]').forEach((b) => b.classList.toggle('active', b.dataset.gizmo === m));
}
$('toggle-ortho').onclick = () => setOrtho(!isOrtho);
$('frame-sel').onclick = frameSelected;

// アウトライナ / プロパティ の高さ比をドラッグで調整
{
  const rsplit = $('rsplit'), rightEl = $('right'), outEl = $('outliner'), propEl = $('properties');
  let dragging = false;
  rsplit.addEventListener('pointerdown', (e) => { dragging = true; rsplit.setPointerCapture(e.pointerId); e.preventDefault(); });
  rsplit.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const rect = rightEl.getBoundingClientRect();
    const r = Math.min(0.85, Math.max(0.15, (e.clientY - rect.top) / rect.height));
    outEl.style.flexGrow = r; propEl.style.flexGrow = 1 - r;
  });
  rsplit.addEventListener('pointerup', () => { dragging = false; });
}
window.addEventListener('keydown', (e) => {
  hideSizePopup(); // 何かキー操作で初期サイズポップアップは閉じる
  // Undo/Redo は入力欄フォーカスより優先(グローバル)
  const mod = e.metaKey || e.ctrlKey;
  if (mod && (e.key === 'z' || e.key === 'Z')) { e.preventDefault(); if (sculpt.active) sculpt.undo(); else if (!modal) (e.shiftKey ? redo() : undo()); return; }
  if (mod && (e.key === 'y' || e.key === 'Y')) { e.preventDefault(); if (!modal) redo(); return; }

  if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
  const k = e.key.toLowerCase();
  // モーダル変形中: 軸固定(X/Y/Z) / 確定(Enter) / 取消(Esc) のみ
  if (modal) {
    if (k === 'x' || k === 'y' || k === 'z') { modal.axis = modal.axis === k ? null : k; updateModal(lastMouse.x, lastMouse.y); }
    else if (e.key === 'Escape') exitModal(false);
    else if (e.key === 'Enter') exitModal(true);
    e.preventDefault();
    return;
  }
  // Blender風: G=移動 R=回転 S=拡大 → 押した瞬間にマウス追従モーダル開始
  // コピー / ペースト(選択オブジェクト)
  if (mod && k === 'c') { if (selected) { clipboard = sdfScene.copyDescriptor(selected); setStatus('コピーしました'); } e.preventDefault(); return; }
  if (mod && k === 'v') {
    if (clipboard) {
      try { const obj = sdfScene.pasteDescriptor(clipboard); select(obj); pushHistory(); setStatus('貼り付けました'); }
      catch (err) { setStatus(err.message); }
    }
    e.preventDefault(); return;
  }
  const m = { g: 'translate', r: 'rotate', s: 'scale' }[k];
  if (m) { enterModal(m); return; }
  // ビュー: 5=透視/正投影, 1=前 3=右 7=上 (テンキー風)
  if (k === '5') { setOrtho(!isOrtho); return; }
  if (k === '1') { snapView([0, 0, 1]); return; }
  if (k === '3') { snapView([1, 0, 0]); return; }
  if (k === '7') { snapView([0, 1, 0]); return; }
  if (k === ';') { frameSelected(); return; }
  if ((e.key === 'Delete' || e.key === 'Backspace') && selection.length) { deleteSelected(); }
});

// プリミティブ アイコングリッド
const SVGW = (inner) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
const PRIM_ICONS = {
  sphere: '<circle cx="12" cy="12" r="8"/><path d="M5 10c3 2 11 2 14 0" opacity=".5"/>',
  box: '<path d="M12 3l8 4-8 4-8-4z"/><path d="M4 7v8l8 4V11"/><path d="M20 7v8l-8 4"/>',
  roundbox: '<rect x="4" y="4" width="16" height="16" rx="5"/>',
  cylinder: '<ellipse cx="12" cy="6" rx="7" ry="2.5"/><path d="M5 6v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6"/>',
  capsule: '<rect x="8" y="3" width="8" height="18" rx="4"/>',
  torus: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',
  plane: '<path d="M3 16l6-8h12l-6 8z"/>',
  pyramid: '<path d="M12 3l8 15H4z"/><path d="M4 18c2 1.4 14 1.4 16 0" opacity=".5"/>',
  tetra: '<path d="M12 4l8 15H4z"/><path d="M12 4v9M12 13L4 19M12 13l8 6" opacity=".7"/>',
  ngon: '<path d="M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9z"/>',
  spring: '<path d="M7 4c5 0 5 3.5 0 3.5M7 7.5c5 0 5 3.5 0 3.5M7 11c5 0 5 3.5 0 3.5M7 14.5c5 0 5 3.5 0 3.5"/>',
};
const primGrid = $('prim-grid');
PRIMITIVES.filter((p) => p.category !== 'extra').forEach((p) => {
  const b = document.createElement('button');
  b.className = 'prim'; b.title = p.name;
  b.innerHTML = SVGW(PRIM_ICONS[p.key] || '<rect x="5" y="5" width="14" height="14"/>') + `<span>${p.name}</span>`;
  b.onclick = () => { const obj = sdfScene.addPrimitive(p.kindId); if (sdfScene.objects.length === 1) fit(); select(obj); pushHistory(); showSizePopup(obj); };
  primGrid.appendChild(b);
});

// エクストラ プリミティブ(テキストボタン)
const extraGrid = $('extra-grid');
EXTRA_CATALOG.forEach((it) => {
  const b = document.createElement('button');
  b.className = 'prim'; b.title = it.name;
  b.innerHTML = `<span>${it.name}</span>`;
  b.onclick = () => {
    if (it.hinge) { // 一回で左右2片
      sdfScene.addPrimitive(it.kind, it.params);
      const leaf2 = sdfScene.addPrimitive(it.kind, it.params);
      leaf2.node.rotation.z = Math.PI; leaf2.node.updateMatrixWorld(true);
      if (sdfScene.objects.length <= 2) fit();
      select(leaf2); pushHistory();
      return;
    }
    const obj = sdfScene.addPrimitive(it.kind, it.params);
    if (sdfScene.objects.length === 1) fit();
    select(obj); pushHistory(); showSizePopup(obj);
  };
  extraGrid.appendChild(b);
});

// 左メニュー縦タブ切替
const PANES = ['file', 'model', 'sculpt', 'scene'];
document.querySelectorAll('.tab').forEach((t) => {
  t.onclick = () => {
    document.querySelectorAll('.tab').forEach((b) => b.classList.toggle('active', b === t));
    const id = t.dataset.tab;
    PANES.forEach((p) => $('pane-' + p).classList.toggle('hidden', p !== id));
  };
});

// ライティング プリセット(中立3 + クール/ウォーム)
const LIGHT_PRESETS = [
  { name: 'スタジオ', keyDir: [0.5, 0.85, 0.6], keyColor: [0.85, 0.85, 0.85], fillDir: [-0.5, 0.35, -0.45], fillColor: [0.32, 0.32, 0.34], ambient: [0.28, 0.28, 0.30], specGain: 0.14, specPow: 28, rimGain: 0.06, bg: 0x15171c },
  { name: 'ソフト', keyDir: [0.4, 0.9, 0.5], keyColor: [0.55, 0.55, 0.56], fillDir: [-0.4, 0.4, -0.4], fillColor: [0.42, 0.42, 0.44], ambient: [0.48, 0.48, 0.50], specGain: 0.04, specPow: 16, rimGain: 0.03, bg: 0x1b1d22 },
  { name: 'ハード', keyDir: [0.55, 0.8, 0.55], keyColor: [1.05, 1.05, 1.05], fillDir: [-0.5, 0.2, -0.5], fillColor: [0.12, 0.12, 0.14], ambient: [0.12, 0.12, 0.14], specGain: 0.32, specPow: 48, rimGain: 0.10, bg: 0x0d0e11 },
  { name: 'クール', keyDir: [0.5, 0.85, 0.6], keyColor: [0.70, 0.84, 1.05], fillDir: [-0.5, 0.35, -0.45], fillColor: [0.30, 0.40, 0.55], ambient: [0.20, 0.26, 0.34], specGain: 0.18, specPow: 32, rimGain: 0.08, bg: 0x10141d },
  { name: 'ウォーム', keyDir: [0.5, 0.85, 0.6], keyColor: [1.10, 0.90, 0.66], fillDir: [-0.5, 0.35, -0.45], fillColor: [0.50, 0.40, 0.30], ambient: [0.32, 0.27, 0.20], specGain: 0.18, specPow: 32, rimGain: 0.08, bg: 0x1a1510 },
];
// スカルプト UI
$('sculpt-enter').onclick = () => {
  if (!selected) { $('sculpt-status').textContent = 'オブジェクトを選択してください'; return; }
  if (sculpt.active) return;
  try {
    const res = parseInt($('sculpt-res').value, 10);
    const obj = sculpt.enter(selected, res);
    select(obj); pushHistory();
    const rs = $('brush-radius'); const ext = sculpt.brush.radius / 0.12;
    rs.min = ext * 0.02; rs.max = ext * 0.5; rs.step = ext * 0.004; rs.value = sculpt.brush.radius;
    $('sculpt-status').textContent = '彫刻中: 左ドラッグで編集 / 終了で確定';
  } catch (err) { $('sculpt-status').textContent = err.message; }
};
$('sculpt-exit').onclick = () => { sculpt.exit(); $('sculpt-status').textContent = '終了しました'; };
document.querySelectorAll('#brush-type button').forEach((b) => {
  b.onclick = () => { sculpt.brush.type = b.dataset.brush; document.querySelectorAll('#brush-type button').forEach((x) => x.classList.toggle('active', x === b)); };
});
document.querySelectorAll('#brush-shape button').forEach((b) => {
  b.onclick = () => { sculpt.brush.shape = b.dataset.shape; document.querySelectorAll('#brush-shape button').forEach((x) => x.classList.toggle('active', x === b)); };
});
$('brush-radius').oninput = (e) => { sculpt.brush.radius = parseFloat(e.target.value); };
$('brush-strength').oninput = (e) => { sculpt.brush.strength = parseFloat(e.target.value); };

function applyLighting(p) {
  raymarch.setLighting(p); renderer.setClearColor(p.bg, 1);
  $('mat-spec').value = p.specGain; $('mat-pow').value = p.specPow; $('mat-rim').value = p.rimGain; // スライダーに反映
}
{
  const cont = $('light-presets');
  LIGHT_PRESETS.forEach((p, i) => {
    const b = document.createElement('button');
    b.className = 'seg' + (i === 0 ? ' active' : '');
    b.textContent = p.name;
    b.onclick = () => { applyLighting(p); cont.querySelectorAll('button').forEach((x) => x.classList.remove('active')); b.classList.add('active'); };
    cont.appendChild(b);
  });
  applyLighting(LIGHT_PRESETS[0]);
}

// マテリアル / シェーダー調整
const setMatU = (name, v) => { raymarch.material.uniforms[name].value = v; };
$('mat-color').oninput = (e) => { const c = new THREE.Color(e.target.value); c.convertSRGBToLinear(); raymarch.material.uniforms.uBaseColor.value.set(c.r, c.g, c.b); };
$('mat-spec').oninput = (e) => setMatU('uSpecGain', parseFloat(e.target.value));
$('mat-pow').oninput = (e) => setMatU('uSpecPow', parseFloat(e.target.value));
$('mat-rim').oninput = (e) => setMatU('uRimGain', parseFloat(e.target.value));
$('mat-color').dispatchEvent(new Event('input')); // 初期表面色を反映

// 保存
$('save-sdfm').onclick = () => {
  if (sdfScene.objects.length === 0) { setStatus('保存するオブジェクトがありません'); return; }
  const s = sdfScene.serialize();
  const ab = encodeSDFM({ grid: { cellSize: grid.cellSize, unit: 'm' }, objects: s.objects, volumes: s.volumes });
  downloadArrayBuffer(ab, 'scene.sdfm');
  setStatus(`シーン保存: scene.sdfm（${(ab.byteLength / 1e6).toFixed(1)}MB）`);
};
$('save-sdf').onclick = () => {
  let data, label;
  if (selected && selected.isVolume) { data = selected.volume.data; label = selected.name || 'volume'; }
  else if (sdfScene.objects.length) {
    // ボリューム未選択: シーン(または選択)をその場でベイクして保存(シーンは変更しない)
    const objs = selection.length ? selection.slice() : sdfScene.objects.slice();
    const res = parseInt($('merge-res').value, 10);
    setStatus('ベイクして保存中…');
    data = sampleVolumeData(objs, res, 'volume'); label = 'volume';
  } else { setStatus('保存する形状がありません'); return; }
  const ab = encodeSDF(data);
  downloadArrayBuffer(ab, `${label}.sdf`);
  setStatus(`SDF保存: ${label}.sdf（${(ab.byteLength / 1e6).toFixed(1)}MB）`);
};
$('merge-btn').onclick = () => {
  const objs = selection.length ? selection.slice() : sdfScene.objects.slice();
  if (objs.length < 1) { setStatus('結合する形状がありません'); return; }
  const res = parseInt($('merge-res').value, 10);
  try {
    setStatus('結合(ベイク)中…');
    const vol = mergeToVolume(objs, res);
    select(vol); pushHistory();
    setStatus(`結合: ${objs.length}個を ${res}³ ボリュームに統合しました`);
  } catch (err) { console.error(err); setStatus(`結合エラー: ${err.message}`); }
};

// ---- メッシュプレビュー(STLになるポリゴンを画面で確認) ----
let previewWire = null, previewSurf = null;
function setPreviewMesh(positions) {
  // 既存を破棄
  previewGroup.clear();
  if (previewWire) { previewWire.geometry.dispose(); previewWire = null; }
  if (previewSurf) { previewSurf.geometry.dispose(); previewSurf = null; }

  const geo = meshGeometryFromPositions(positions);
  previewSurf = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
    color: 0x9aa3b2, flatShading: true, metalness: 0, roughness: 0.9, side: THREE.DoubleSide,
  }));
  const wireGeo = new THREE.WireframeGeometry(geo);
  previewWire = new THREE.LineSegments(wireGeo, new THREE.LineBasicMaterial({
    color: 0x1a1d24, transparent: true, opacity: 0.5,
  }));
  previewWire.visible = $('wireframe').checked;
  previewGroup.add(previewSurf, previewWire);
}

let previewBusy = false;
async function runPreview() {
  if (sdfScene.objects.length === 0) { setStatus('オブジェクトがありません'); return; }
  if (previewBusy) return;
  previewBusy = true;
  const opts = getMeshOpts();
  progress.classList.remove('hidden'); barFill.style.width = '0%';
  progLabel.textContent = 'メッシュ生成中…';
  try {
    const r = await generateSceneMesh(sdfScene, opts, (p) => { barFill.style.width = `${(p * 100) | 0}%`; });
    if (r.positions.length === 0) { setStatus('面が生成されませんでした'); return; }
    setPreviewMesh(r.positions);
    previewGroup.visible = true; $('show-preview').checked = true;
    showSDF = false; $('show-sdf').checked = false;
    setStatus(`プレビュー: 三角形 ${r.triangles.toLocaleString()} / グリッド ${r.dims.join('×')} / 並列${r.workers}`
      + (r.clamped ? ' ⚠上限で粗化' : ''));
  } catch (err) { console.error(err); setStatus(`プレビューエラー: ${err.message}`); }
  finally { previewBusy = false; progress.classList.add('hidden'); }
}
$('preview-mesh').onclick = runPreview;

// ボクセル/出力倍率を変えたら、プレビュー表示中は自動で作り直す(デバウンス)
let regenTimer = null;
function schedulePreviewRegen() {
  updateMeshReadout();
  if (!previewGroup.visible) return;
  clearTimeout(regenTimer);
  regenTimer = setTimeout(() => {
    if (previewBusy) { schedulePreviewRegen(); return; }
    runPreview();
  }, 450);
}
$('export-scale').oninput = () => { schedulePreviewRegen(); if (plate.visible) updatePlate(); };
$('voxel-mm').oninput = schedulePreviewRegen;
$('auto-voxel').onchange = () => { $('voxel-mm').disabled = $('auto-voxel').checked; schedulePreviewRegen(); };
$('voxel-mm').disabled = $('auto-voxel').checked; // 初期: 自動ONなので手動入力は無効
$('show-preview').onchange = (e) => { previewGroup.visible = e.target.checked; };
$('wireframe').onchange = (e) => { if (previewWire) previewWire.visible = e.target.checked; };
$('show-sdf').onchange = (e) => { showSDF = e.target.checked; };

// STL 書き出し
$('export-stl').onclick = async () => {
  if (sdfScene.objects.length === 0) { setStatus('オブジェクトがありません'); return; }
  const opts = getMeshOpts();
  progress.classList.remove('hidden'); barFill.style.width = '0%';
  progLabel.textContent = 'STL生成中…';
  try {
    const r = await exportSTL(sdfScene, opts, (p) => { barFill.style.width = `${(p * 100) | 0}%`; });
    setStatus(`STL書き出し: model.stl（三角形 ${r.triangles.toLocaleString()}, グリッド ${r.dims.join('×')}, ボクセル~${opts.voxelMm}mm）`
      + (r.clamped ? ' ⚠上限で粗化' : ''));
  } catch (err) { console.error(err); setStatus(`STLエラー: ${err.message}`); }
  finally { progress.classList.add('hidden'); }
};
