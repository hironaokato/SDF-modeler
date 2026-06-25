import * as THREE from 'three';
import { MAX_VOLUMES, MAX_OBJECTS, OP } from '../core/constants.js';
import { buildPrimitiveGLSL, PRIM_BY_KIND } from '../core/primitives.js';

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

// primitiveGLSL: float primitiveDist(int kind, vec3 p, vec4 a, vec4 b) を定義する文字列
function buildFragment(primitiveGLSL) {
  return /* glsl */ `
  precision highp float;
  precision highp sampler3D;
  layout(location = 0) out vec4 fragColor;
  varying vec2 vUv;

  #define MAX_VOLUMES ${MAX_VOLUMES}
  #define MAX_OBJECTS ${MAX_OBJECTS}

  uniform sampler3D uVol0; uniform sampler3D uVol1; uniform sampler3D uVol2; uniform sampler3D uVol3;
  uniform sampler3D uVolC0; uniform sampler3D uVolC1; uniform sampler3D uVolC2; uniform sampler3D uVolC3;
  uniform vec3 uVolMin[MAX_VOLUMES];
  uniform vec3 uVolMax[MAX_VOLUMES];
  uniform int  uVolHasColor[MAX_VOLUMES];

  uniform int       uObjCount;
  uniform sampler2D uObjTex;   // 1オブジェクト=12テクセル(行)。uniform配列上限を回避し実質無制限に
  vec4 objTexel(int i, int c) { return texelFetch(uObjTex, ivec2(c, i), 0); }

  // タイル/クラスタ・カリング: 各タイルに重なるオブジェクトのビットマスク(256bit=uvec4×2)
  uniform highp usampler2D uTileMask;
  uniform int uTileSize;
  uniform int uTileCull;
  bool maskBitV(uvec4 m0, uvec4 m1, int i) {
    int w = i >> 5; uint bit = uint(i) & 31u; uint word;
    if (w == 0) word = m0.x; else if (w == 1) word = m0.y; else if (w == 2) word = m0.z; else if (w == 3) word = m0.w;
    else if (w == 4) word = m1.x; else if (w == 5) word = m1.y; else if (w == 6) word = m1.z; else word = m1.w;
    return ((word >> bit) & 1u) == 1u;
  }

  uniform vec3  uSceneMin;
  uniform vec3  uSceneMax;
  uniform float uMinStep;
  uniform float uNormalH;   // 法線(勾配)サンプリング幅。広めにして陰影を平滑化
  uniform int   uMaxSteps;
  uniform int   uShowColor;

  // ライティング(プリセットで変更)
  uniform vec3  uKeyDir; uniform vec3 uKeyColor;
  uniform vec3  uFillDir; uniform vec3 uFillColor;
  uniform vec3  uAmbient; uniform float uSpecGain; uniform float uSpecPow; uniform float uRimGain;
  uniform vec3  uBaseColor; // 非テクスチャ面の既定色(マテリアル)

  uniform vec3  uCameraPos;
  uniform mat4  uInvProjection;
  uniform mat4  uCameraWorld;

  // sampler 配列の動的添字は不可 → if/else で静的アクセス
  float volDist(int slot, vec3 uvw) {
    if (slot == 0) return texture(uVol0, uvw).r;
    if (slot == 1) return texture(uVol1, uvw).r;
    if (slot == 2) return texture(uVol2, uvw).r;
    return texture(uVol3, uvw).r;
  }
  vec3 volColor(int slot, vec3 uvw) {
    if (slot == 0) return texture(uVolC0, uvw).rgb;
    if (slot == 1) return texture(uVolC1, uvw).rgb;
    if (slot == 2) return texture(uVolC2, uvw).rgb;
    return texture(uVolC3, uvw).rgb;
  }

  ${primitiveGLSL}

  float sminP(float a, float b, float k) {
    if (k <= 0.0) return min(a, b);
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
  }
  float smaxP(float a, float b, float k) { return -sminP(-a, -b, k); }

  // 配列モディファイア(ドメイン折り返し)
  vec3 applyArray(vec4 A, vec4 B, vec3 lp) {
    int mode = int(A.x + 0.5);
    if (mode == 1) {                 // グリッド: 個数 A.yzw, 間隔 B.xyz
      if (B.x > 0.0 && A.y > 1.0) lp.x -= B.x * clamp(floor(lp.x / B.x + 0.5), 0.0, A.y - 1.0);
      if (B.y > 0.0 && A.z > 1.0) lp.y -= B.y * clamp(floor(lp.y / B.y + 0.5), 0.0, A.z - 1.0);
      if (B.z > 0.0 && A.w > 1.0) lp.z -= B.z * clamp(floor(lp.z / B.z + 0.5), 0.0, A.w - 1.0);
    } else if (mode == 2) {          // 円形: 個数 A.y, 半径 B.x, Y軸まわり
      float cnt = max(A.y, 1.0);
      float seg = 6.28318530718 / cnt;
      float ang = atan(lp.z, lp.x);
      ang -= seg * floor(ang / seg + 0.5);
      float rad = length(lp.xz);
      lp.x = cos(ang) * rad - B.x; lp.z = sin(ang) * rad;
    }
    return lp;
  }

  // 1オブジェクトの距離(+色)。データはテクスチャから取得
  float objDist(int i, vec3 wp, out vec3 col, out bool textured) {
    mat4 inv = mat4(objTexel(i, 0), objTexel(i, 1), objTexel(i, 2), objTexel(i, 3));
    vec4 cs = objTexel(i, 4);     // rgb=色(未使用), w=スケール
    vec4 meta = objTexel(i, 11);  // x=kind, y=volSlot, z=op, w=smoothK
    int kind = int(meta.x + 0.5);
    vec3 lp = applyArray(objTexel(i, 7), objTexel(i, 8), (inv * vec4(wp, 1.0)).xyz);
    float d;
    textured = false;
    if (kind == 0) {                      // ボリューム
      int slot = int(meta.y + 0.5);
      vec3 mn = uVolMin[slot], mx = uVolMax[slot];
      vec3 uvw = (lp - mn) / (mx - mn);
      float raw = volDist(slot, clamp(uvw, 0.0, 1.0));
      vec3 q = max(max(mn - lp, lp - mx), vec3(0.0));   // 箱外の距離
      d = (raw + length(q)) * cs.w;
      if (uVolHasColor[slot] == 1) { col = pow(volColor(slot, clamp(uvw, 0.0, 1.0)), vec3(2.2)); textured = true; }
      else col = uBaseColor;
    } else {                              // プリミティブ(グローバル表面色)
      d = primitiveDist(kind, lp, objTexel(i, 5), objTexel(i, 6)) * cs.w;
      col = uBaseColor;
    }
    return d;
  }

  float sceneD(vec3 wp) {
    float d = 1e9;
    bool tileOn = uTileCull == 1;
    uvec4 M0 = uvec4(0u), M1 = uvec4(0u);
    if (tileOn) { int tx = int(gl_FragCoord.x) / uTileSize; int ty = int(gl_FragCoord.y) / uTileSize; M0 = texelFetch(uTileMask, ivec2(tx * 2, ty), 0); M1 = texelFetch(uTileMask, ivec2(tx * 2 + 1, ty), 0); }
    for (int i = 0; i < uObjCount; i++) {   // 上限はuniform(動的)。FXCの展開を抑止(CPU側で uObjCount<=MAX_OBJECTS を保証)
      if (tileOn && !maskBitV(M0, M1, i)) continue; // タイル外の union/subtract を一括スキップ
      vec4 meta = objTexel(i, 11); int op = int(meta.z + 0.5); float k = meta.w;
      if (i == 0) { vec3 c; bool t; d = objDist(i, wp, c, t); continue; }
      // 空間カリング(boxDistAABB)は撤去。D3D11/FXCでシェーダコンパイルが数十秒に膨張し
      // ブラウザごと固まる(texelFetch+データ依存continueがFXCに致命的)。画面空間のタイルカリングのみ使用。
      if (op == 0) {            // union
        vec3 c; bool t; d = sminP(d, objDist(i, wp, c, t), k);
      } else if (op == 1) {     // subtract
        vec3 c; bool t; d = smaxP(d, -objDist(i, wp, c, t), k);
      } else {                  // intersect
        vec3 c; bool t; d = smaxP(d, objDist(i, wp, c, t), k);
      }
    }
    return d;
  }

  float sceneDC(vec3 wp, out vec3 col) {
    float d = 1e9; col = uBaseColor;
    bool tileOn = uTileCull == 1;
    uvec4 M0 = uvec4(0u), M1 = uvec4(0u);
    if (tileOn) { int tx = int(gl_FragCoord.x) / uTileSize; int ty = int(gl_FragCoord.y) / uTileSize; M0 = texelFetch(uTileMask, ivec2(tx * 2, ty), 0); M1 = texelFetch(uTileMask, ivec2(tx * 2 + 1, ty), 0); }
    for (int i = 0; i < uObjCount; i++) {   // 上限はuniform(動的)。FXCの展開を抑止
      if (tileOn && !maskBitV(M0, M1, i)) continue;
      vec4 meta = objTexel(i, 11); int op = int(meta.z + 0.5); float k = meta.w;
      if (i == 0) { vec3 c; bool t; d = objDist(i, wp, c, t); if (uShowColor == 0 && t) c = uBaseColor; col = c; continue; }
      // 空間カリング撤去(sceneDと同理由)。タイルカリングのみ。
      if (op == 0) {
        vec3 c; bool t; float di = objDist(i, wp, c, t); if (uShowColor == 0 && t) c = uBaseColor;
        if (di < d) col = c; d = sminP(d, di, k);
      } else if (op == 1) {
        vec3 c; bool t; d = smaxP(d, -objDist(i, wp, c, t), k);
      } else {
        vec3 c; bool t; float di = objDist(i, wp, c, t); if (uShowColor == 0 && t) c = uBaseColor;
        if (di > d) col = c; d = smaxP(d, di, k);
      }
    }
    return d;
  }

  // 法線: 画面微分(dFdx/dFdy)で表面の幾何法線を求める。sceneD を一度も呼ばないため
  // primitiveDist のインライン箇所が 6→2 に激減し、ANGLE/D3D11(FXC)のシェーダコンパイルが
  // 71秒→約7秒に短縮(=ブラウザごと固まる主因を解消)。テトラ法(sceneD×4)はFXCで超線形に膨張するため不可。
  vec3 calcNormal(vec3 p) {
    vec3 gx = dFdx(p), gy = dFdy(p);
    float lx = length(gx), ly = length(gy);
    if (lx < 1e-30 || ly < 1e-30) return vec3(0.0, 1.0, 0.0); // 片方向に変化なし(エッジ等)→NaN回避
    // 接ベクトルを正規化してから外積。外積の大きさ(~sinθ)が物体スケールに依らず O(1) になり、
    // 小さい物体/カメラ近接で外積が極小→退化(法線が定数化して白飛び)するのを防ぐ。
    vec3 n = cross(gx / lx, gy / ly);
    float L = length(n);
    return (L > 1e-4) ? n / L : vec3(0.0, 1.0, 0.0); // 接線が平行(シルエット等)
  }

  vec2 intersectBox(vec3 ro, vec3 rd) {
    vec3 inv = 1.0 / rd;
    vec3 t0 = (uSceneMin - ro) * inv;
    vec3 t1 = (uSceneMax - ro) * inv;
    vec3 tmin = min(t0, t1), tmax = max(t0, t1);
    return vec2(max(max(tmin.x, tmin.y), tmin.z), min(min(tmax.x, tmax.y), tmax.z));
  }

  void main() {
    if (uObjCount == 0) discard;
    vec2 ndc = vUv * 2.0 - 1.0;
    // near/far から復元(透視・正投影どちらでも正しいレイになる)
    vec4 nh = uInvProjection * vec4(ndc, -1.0, 1.0); nh /= nh.w;
    vec4 fh = uInvProjection * vec4(ndc,  1.0, 1.0); fh /= fh.w;
    vec3 rd = normalize((uCameraWorld * vec4(fh.xyz - nh.xyz, 0.0)).xyz);
    vec3 ro = (uCameraWorld * vec4(nh.xyz, 1.0)).xyz;

    vec2 tb = intersectBox(ro, rd);
    if (tb.y < max(tb.x, 0.0)) discard;

    float minStep = uMinStep;
    float eps = minStep * 0.5;
    float t = max(tb.x, 0.0) + eps;
    bool hit = false; vec3 p = ro + rd * t;
    float tPrev = t, dPrev = 1e9;   // 直前ステップ(ヒット点を小数精度で補間)
    for (int i = 0; i < uMaxSteps; i++) {   // 上限はuniform(動的)。FXC(D3D/ANGLE)のループ展開を抑止しコンパイルハングを回避
      p = ro + rd * t;
      float d = sceneD(p);
      if (d < eps) {
        // 直前(dPrev)と現在(d)の線形補間で表面位置を小数精度に補正。追加のsceneD評価ゼロ。
        // ヒット点がステップ量子化でブレなくなり、画面微分(dFdx)法線のザラつきを大幅に低減。
        float denom = dPrev - d;
        if (denom > 1e-6) t = clamp(tPrev + (t - tPrev) * dPrev / denom, tPrev, t + (t - tPrev) * 4.0);
        p = ro + rd * t;
        hit = true; break;
      }
      tPrev = t; dPrev = d;
      t += max(d * 0.7, minStep); // 安全係数(彫刻で非SDF化した場の飛び越え=穴を防ぐ)
      if (t > tb.y) break;
    }
    if (!hit) discard;

    vec3 n = calcNormal(p);
    if (dot(n, rd) > 0.0) n = -n; // 画面微分法線は向きが不定 → 視線(rd)に対して手前向きへ
    vec3 albedo; sceneDC(p, albedo);

    vec3 viewDir = -rd;
    float kd = max(dot(n, uKeyDir), 0.0);
    float fd = max(dot(n, uFillDir), 0.0);
    vec3 lit = uAmbient + uKeyColor * kd + uFillColor * fd;
    vec3 col = albedo * lit;
    // スペキュラ(キーライト色で色付け)
    vec3 hlf = normalize(uKeyDir + viewDir);
    col += uKeyColor * (pow(max(dot(n, hlf), 0.0), uSpecPow) * uSpecGain);
    // リム
    col += pow(1.0 - max(dot(n, viewDir), 0.0), 4.0) * uRimGain;
    fragColor = vec4(pow(col, vec3(0.4545)), 1.0);
  }
  `;
}

const PRIMITIVE_STUB = `float primitiveDist(int kind, vec3 p, vec4 a, vec4 b) { return 1e9; }`;

export class RaymarchView {
  constructor(renderer, primitiveGLSL = buildPrimitiveGLSL()) {
    this.renderer = renderer;
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const arr = (n, make) => Array.from({ length: n }, make);
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: buildFragment(primitiveGLSL),
      glslVersion: THREE.GLSL3,
      transparent: true, depthTest: false, depthWrite: false,
      uniforms: {
        uVol0: { value: null }, uVol1: { value: null }, uVol2: { value: null }, uVol3: { value: null },
        uVolC0: { value: null }, uVolC1: { value: null }, uVolC2: { value: null }, uVolC3: { value: null },
        uVolMin: { value: arr(MAX_VOLUMES, () => new THREE.Vector3()) },
        uVolMax: { value: arr(MAX_VOLUMES, () => new THREE.Vector3(1, 1, 1)) },
        uVolHasColor: { value: new Int32Array(MAX_VOLUMES) },

        uObjCount: { value: 0 },
        uObjTex: { value: null },
        uTileMask: { value: null },
        uTileSize: { value: 32 },
        uTileCull: { value: 1 },

        uSceneMin: { value: new THREE.Vector3(-1, -1, -1) },
        uSceneMax: { value: new THREE.Vector3(1, 1, 1) },
        uMinStep: { value: 0.01 },
        uNormalH: { value: 0.02 },
        uMaxSteps: { value: 512 },
        uShowColor: { value: 1 },
        uKeyDir: { value: new THREE.Vector3(0.5, 0.85, 0.6).normalize() },
        uKeyColor: { value: new THREE.Vector3(0.85, 0.85, 0.85) },
        uFillDir: { value: new THREE.Vector3(-0.5, 0.35, -0.45).normalize() },
        uFillColor: { value: new THREE.Vector3(0.32, 0.32, 0.34) },
        uAmbient: { value: new THREE.Vector3(0.28, 0.28, 0.30) },
        uSpecGain: { value: 0.14 },
        uSpecPow: { value: 28 },
        uRimGain: { value: 0.06 },
        uBaseColor: { value: new THREE.Vector3(0.9, 0.9, 0.91) },

        uCameraPos: { value: new THREE.Vector3() },
        uInvProjection: { value: new THREE.Matrix4() },
        uCameraWorld: { value: new THREE.Matrix4() },
      },
    });

    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.material);
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);
    this._sceneRef = null;

    // 未使用 sampler3D 用のダミー(WebGLは3Dテクスチャの既定が無く、null束縛は不正)
    this._dDist = new THREE.Data3DTexture(new Float32Array([1]), 1, 1, 1);
    this._dDist.format = THREE.RedFormat; this._dDist.type = THREE.FloatType; this._dDist.needsUpdate = true;
    this._dColor = new THREE.Data3DTexture(new Uint8Array([200, 200, 200, 255]), 1, 1, 1);
    this._dColor.format = THREE.RGBAFormat; this._dColor.type = THREE.UnsignedByteType;
    this._dColor.unpackAlignment = 4; this._dColor.needsUpdate = true;
    for (const k of ['uVol0', 'uVol1', 'uVol2', 'uVol3']) this.material.uniforms[k].value = this._dDist;
    for (const k of ['uVolC0', 'uVolC1', 'uVolC2', 'uVolC3']) this.material.uniforms[k].value = this._dColor;

    // オブジェクトデータ用のテクスチャ(1オブジェクト=12テクセル/行)
    this._objTex = null; this._objTexData = null; this._objTexH = 0;
    this._objDummy = new THREE.DataTexture(new Float32Array(4), 1, 1, THREE.RGBAFormat, THREE.FloatType);
    this._objDummy.minFilter = THREE.NearestFilter; this._objDummy.magFilter = THREE.NearestFilter;
    this._objDummy.needsUpdate = true;
    this.material.uniforms.uObjTex.value = this._objDummy;
    this._baseMinStep = 0.01;

    // タイルカリング用の整数テクスチャ(ダミー + 実体)
    this._tileSize = 32; this._tileTex = null; this._tileData = null; this._tileTexW = 0; this._tileTexH = 0;
    this._tmpSize = new THREE.Vector2(); this._tmpVP = new THREE.Matrix4(); this._tmpV4 = new THREE.Vector4();
    this._tileDummy = new THREE.DataTexture(new Uint32Array(4), 1, 1, THREE.RGBAIntegerFormat, THREE.UnsignedIntType);
    this._tileDummy.internalFormat = 'RGBA32UI';
    this._tileDummy.minFilter = this._tileDummy.magFilter = THREE.NearestFilter;
    this._tileDummy.needsUpdate = true;
    this.material.uniforms.uTileMask.value = this._tileDummy;
  }

  setShowColor(on) { this.material.uniforms.uShowColor.value = on ? 1 : 0; }
  setTileCull(on) { this.material.uniforms.uTileCull.value = on ? 1 : 0; if (!on) this.material.uniforms.uTileMask.value = this._tileDummy; }

  // 画面タイルごとに「投影AABBが重なるオブジェクト」のビットマスクを作る(CPU)
  _updateTileMask(renderer, cam) {
    const s = this._sceneRef; if (!s) return;
    const dbs = renderer.getDrawingBufferSize(this._tmpSize);
    const W = Math.max(1, Math.floor(dbs.x)), H = Math.max(1, Math.floor(dbs.y));
    const TS = this._tileSize;
    const tilesX = Math.ceil(W / TS), tilesY = Math.ceil(H / TS);
    const texW = tilesX * 2, texH = tilesY;
    if (!this._tileTex || this._tileTexW !== texW || this._tileTexH !== texH) {
      if (this._tileTex) this._tileTex.dispose();
      this._tileData = new Uint32Array(texW * texH * 4);
      this._tileTex = new THREE.DataTexture(this._tileData, texW, texH, THREE.RGBAIntegerFormat, THREE.UnsignedIntType);
      this._tileTex.internalFormat = 'RGBA32UI';
      this._tileTex.minFilter = this._tileTex.magFilter = THREE.NearestFilter;
      this._tileTexW = texW; this._tileTexH = texH;
    } else {
      this._tileData.fill(0);
    }
    this.material.uniforms.uTileMask.value = this._tileTex;
    this.material.uniforms.uTileSize.value = TS;
    const data = this._tileData;
    const setBit = (tx, ty, i) => { const w = i >> 5; const tX = tx * 2 + (w >> 2); const ch = w & 3; data[((ty * texW) + tX) * 4 + ch] |= (1 << (i & 31)); };
    const setAll = (i) => { for (let ty = 0; ty < tilesY; ty++) for (let tx = 0; tx < tilesX; tx++) setBit(tx, ty, i); };
    cam.updateMatrixWorld();
    this._tmpVP.multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse);
    const vp = this._tmpVP, v4 = this._tmpV4;
    const n = Math.min(s.objects.length, MAX_OBJECTS);
    for (let i = 0; i < n; i++) {
      const o = s.objects[i];
      if (i === 0 || o.op === 'intersect') { setAll(i); continue; } // base/交差は全タイルで評価
      const ab = s.objAABB(o);
      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity, behind = false;
      for (let c = 0; c < 8; c++) {
        v4.set((c & 1) ? ab.max.x : ab.min.x, (c & 2) ? ab.max.y : ab.min.y, (c & 4) ? ab.max.z : ab.min.z, 1).applyMatrix4(vp);
        if (v4.w <= 1e-6) { behind = true; break; } // 近/背面にまたがる→保守的に全タイル
        const px = (v4.x / v4.w * 0.5 + 0.5) * W, py = (v4.y / v4.w * 0.5 + 0.5) * H;
        minX = Math.min(minX, px); maxX = Math.max(maxX, px); minY = Math.min(minY, py); maxY = Math.max(maxY, py);
      }
      if (behind) { setAll(i); continue; }
      if (maxX < 0 || minX > W || maxY < 0 || minY > H) continue; // 画面外→どのタイルにも入れない
      const tx0 = Math.max(0, Math.floor(minX / TS)), tx1 = Math.min(tilesX - 1, Math.floor(maxX / TS));
      const ty0 = Math.max(0, Math.floor(minY / TS)), ty1 = Math.min(tilesY - 1, Math.floor(maxY / TS));
      for (let ty = ty0; ty <= ty1; ty++) for (let tx = tx0; tx <= tx1; tx++) setBit(tx, ty, i);
    }
    this._tileTex.needsUpdate = true;
  }

  /** ライティングプリセット適用(配列で受ける) */
  setLighting(p) {
    const u = this.material.uniforms;
    u.uKeyDir.value.fromArray(p.keyDir).normalize();
    u.uKeyColor.value.fromArray(p.keyColor);
    u.uFillDir.value.fromArray(p.fillDir).normalize();
    u.uFillColor.value.fromArray(p.fillColor);
    u.uAmbient.value.fromArray(p.ambient);
    u.uSpecGain.value = p.specGain;
    u.uSpecPow.value = p.specPow;
    u.uRimGain.value = p.rimGain;
  }

  bindScene(sdfScene) { this._sceneRef = sdfScene; }

  /** シェーダを事前コンパイル。KHR_parallel_shader_compile 対応環境では非ブロックで進むため、
   *  初回 render 時にメインスレッド(=ブラウザ)が数秒固まるのを防ぐ。Promise を返す。
   *  Windows(ANGLE/D3D11)は FXC コンパイルに数秒かかるため特に重要。 */
  warmup(renderer) {
    try {
      if (renderer.compileAsync) return renderer.compileAsync(this.scene, this.camera);
    } catch (e) { /* 非対応時は即時 render に委ねる */ }
    return Promise.resolve();
  }

  /** SdfScene の現在状態を uniform へ反映 */
  sync() {
    const s = this._sceneRef;
    if (!s) return;
    const u = this.material.uniforms;

    // ボリュームのスロット別バインド(未使用はダミー)
    const samplers = ['uVol0', 'uVol1', 'uVol2', 'uVol3'];
    const csamplers = ['uVolC0', 'uVolC1', 'uVolC2', 'uVolC3'];
    for (let slot = 0; slot < MAX_VOLUMES; slot++) {
      u[samplers[slot]].value = this._dDist;
      u[csamplers[slot]].value = this._dColor;
      u.uVolHasColor.value[slot] = 0;
    }
    for (const v of s.volumes) {
      const slot = v.slot;
      u[samplers[slot]].value = v.distTex;
      u[csamplers[slot]].value = v.colorTex || this._dColor;
      u.uVolMin.value[slot].fromArray(v.data.min);
      u.uVolMax.value[slot].fromArray(v.data.max);
      u.uVolHasColor.value[slot] = v.colorTex ? 1 : 0;
    }

    // オブジェクト → データテクスチャ(12テクセル/行: 0-3=inv, 4=色rgb+scale, 5=paramsA, 6=paramsB,
    //   7=arrA, 8=arrB, 9=AABBmin, 10=AABBmax, 11=kind,volSlot,op,smoothK)
    const n = Math.min(s.objects.length, MAX_OBJECTS);
    u.uObjCount.value = n;
    const W = 12, H = Math.max(n, 1);
    if (!this._objTex || this._objTexH < H) {
      if (this._objTex) this._objTex.dispose();
      this._objTexData = new Float32Array(W * H * 4);
      this._objTex = new THREE.DataTexture(this._objTexData, W, H, THREE.RGBAFormat, THREE.FloatType);
      this._objTex.minFilter = THREE.NearestFilter; this._objTex.magFilter = THREE.NearestFilter;
      this._objTex.needsUpdate = true; this._objTexH = H;
      u.uObjTex.value = this._objTex;
    }
    const data = this._objTexData;
    const m = this._tmpM || (this._tmpM = new THREE.Matrix4());
    const tv = this._tmpV || (this._tmpV = new THREE.Vector3());
    for (let i = 0; i < n; i++) {
      const o = s.objects[i];
      o.node.updateMatrixWorld(true);
      const base = i * W * 4;
      m.copy(o.node.matrixWorld).invert();
      for (let e = 0; e < 16; e++) data[base + e] = m.elements[e];   // texel0-3 = inv(列優先)
      const sc = o.node.scale;
      const scale = Math.max(Math.min(Math.abs(sc.x), Math.abs(sc.y), Math.abs(sc.z)), 1e-5);
      data[base + 16] = o.color ? o.color.r : 0.9; data[base + 17] = o.color ? o.color.g : 0.9; data[base + 18] = o.color ? o.color.b : 0.91; data[base + 19] = scale;
      if (o.isVolume) {
        for (let e = 20; e < 28; e++) data[base + e] = 0;
      } else {
        const prim = PRIM_BY_KIND.get(o.kind);
        const pk = prim ? prim.pack(o.params || {}) : { a: [0, 0, 0, 0], b: [0, 0, 0, 0] };
        data[base + 20] = pk.a[0]; data[base + 21] = pk.a[1]; data[base + 22] = pk.a[2]; data[base + 23] = pk.a[3];
        data[base + 24] = pk.b[0]; data[base + 25] = pk.b[1]; data[base + 26] = pk.b[2]; data[base + 27] = pk.b[3];
      }
      const a = o.array || { mode: 'none' };
      let A = [0, 0, 0, 0], B = [0, 0, 0, 0];
      if (a.mode === 'grid') { A = [1, a.nx, a.ny, a.nz]; B = [a.dx, a.dy, a.dz, 0]; }
      else if (a.mode === 'circular') { A = [2, a.count, 0, 0]; B = [a.radius, 0, 0, 0]; }
      data[base + 28] = A[0]; data[base + 29] = A[1]; data[base + 30] = A[2]; data[base + 31] = A[3];
      data[base + 32] = B[0]; data[base + 33] = B[1]; data[base + 34] = B[2]; data[base + 35] = B[3];
      const ab = s.objAABB(o);
      const apad = ab.getSize(tv).length() * 0.02 + 1e-3;
      data[base + 36] = ab.min.x - apad; data[base + 37] = ab.min.y - apad; data[base + 38] = ab.min.z - apad; data[base + 39] = 0;
      data[base + 40] = ab.max.x + apad; data[base + 41] = ab.max.y + apad; data[base + 42] = ab.max.z + apad; data[base + 43] = 0;
      data[base + 44] = o.kind; data[base + 45] = o.isVolume ? o.volume.slot : 0; data[base + 46] = OP[o.op] ?? 0; data[base + 47] = o.smoothK || 0;
    }
    this._objTex.needsUpdate = true;

    // シーン境界とステップ
    const box = s.worldBounds();
    const pad = box.getSize(new THREE.Vector3()).length() * 0.02;
    u.uSceneMin.value.copy(box.min).subScalar(pad);
    u.uSceneMax.value.copy(box.max).addScalar(pad);

    // 最小ボクセル(ワールド) からステップ幅
    let minVoxel = Infinity;
    for (const v of s.volumes) {
      const d = v.data;
      const vx = (d.max[0] - d.min[0]) / (d.resolution - 1);
      const vy = (d.max[1] - d.min[1]) / (d.resolution - 1);
      const vz = (d.max[2] - d.min[2]) / (d.resolution - 1);
      minVoxel = Math.min(minVoxel, vx, vy, vz);
    }
    if (!isFinite(minVoxel)) minVoxel = box.getSize(new THREE.Vector3()).length() / 256;
    this._baseMinStep = Math.max(minVoxel * 0.4, 1e-5);
    u.uMinStep.value = this._baseMinStep;
    u.uNormalH.value = Math.max(minVoxel * 1.0, 1e-5); // 法線差分幅(平滑化と凹部破綻のバランス)
  }

  // quality: 1=通常。<1 で操作中の軽量化(最大ステップ減+歩幅拡大。描画経路は不変で安全)
  render(renderer, perspCamera, quality = 1) {
    this.sync();
    const u = this.material.uniforms;
    u.uCameraPos.value.copy(perspCamera.position);
    u.uInvProjection.value.copy(perspCamera.projectionMatrixInverse);
    u.uCameraWorld.value.copy(perspCamera.matrixWorld);
    if (u.uTileCull.value === 1) this._updateTileMask(renderer, perspCamera);
    if (quality < 1) {
      u.uMaxSteps.value = Math.max(48, Math.round(512 * quality));
      u.uMinStep.value = this._baseMinStep / quality;
    } else {
      u.uMaxSteps.value = 512;
      u.uMinStep.value = this._baseMinStep;
    }
    renderer.render(this.scene, this.camera);
  }
}
