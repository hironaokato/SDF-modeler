import * as THREE from 'three';

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  precision highp sampler3D;

  layout(location = 0) out vec4 fragColor;
  varying vec2 vUv;

  uniform sampler3D uSDF;
  uniform sampler3D uColor;
  uniform int   uHasColor;     // カラーボリュームが存在するか
  uniform int   uShowColor;    // カラー表示 ON/OFF
  uniform vec3  uBoxMin;
  uniform vec3  uBoxMax;
  uniform vec3  uVoxel;        // ボクセル1辺(ワールド)
  uniform vec3  uCameraPos;
  uniform mat4  uInvProjection;
  uniform mat4  uCameraWorld;
  uniform float uLevel;        // 等値面レベル(ワールド)。符号付き=オフセット, 無符号=厚み
  uniform int   uSigned;       // 1=符号付き(ソリッド描画), 0=無符号(シェル描画)
  uniform int   uMaxSteps;

  vec3 toUVW(vec3 p) { return (p - uBoxMin) / (uBoxMax - uBoxMin); }

  // 生のフィールド値(符号付き/無符号どちらでも)
  float field(vec3 p) { return texture(uSDF, toUVW(p)).r; }

  // 表面までの保守的な距離。
  // 符号付き: v - level (level>0で膨張, <0で収縮)。中身の詰まった立体を描く。
  // 無符号  : |v| - level (level=厚み)。表面の殻を描く。
  float distToSurface(vec3 p) {
    float v = field(p);
    return (uSigned == 1) ? (v - uLevel) : (abs(v) - uLevel);
  }

  // 中心差分でフィールドの勾配
  vec3 calcNormal(vec3 p) {
    float h = min(min(uVoxel.x, uVoxel.y), uVoxel.z);
    vec3 e = vec3(h, 0.0, 0.0);
    return normalize(vec3(
      field(p + e.xyy) - field(p - e.xyy),
      field(p + e.yxy) - field(p - e.yxy),
      field(p + e.yyx) - field(p - e.yyx)
    ));
  }

  vec2 intersectBox(vec3 ro, vec3 rd) {
    vec3 inv = 1.0 / rd;
    vec3 t0 = (uBoxMin - ro) * inv;
    vec3 t1 = (uBoxMax - ro) * inv;
    vec3 tmin = min(t0, t1);
    vec3 tmax = max(t0, t1);
    float near = max(max(tmin.x, tmin.y), tmin.z);
    float far  = min(min(tmax.x, tmax.y), tmax.z);
    return vec2(near, far);
  }

  void main() {
    vec2 ndc = vUv * 2.0 - 1.0;
    vec4 clip = vec4(ndc, -1.0, 1.0);
    vec4 viewPos = uInvProjection * clip;
    viewPos /= viewPos.w;
    vec3 rdView = normalize(viewPos.xyz);
    vec3 rd = normalize((uCameraWorld * vec4(rdView, 0.0)).xyz);
    vec3 ro = uCameraPos;

    vec2 tb = intersectBox(ro, rd);
    if (tb.y < max(tb.x, 0.0)) discard;

    float minStep = min(min(uVoxel.x, uVoxel.y), uVoxel.z) * 0.4;
    float eps = minStep * 0.5;
    float t = max(tb.x, 0.0) + eps;

    bool hit = false;
    vec3 p;
    for (int i = 0; i < 1024; i++) {
      if (i >= uMaxSteps) break;
      p = ro + rd * t;
      float d = distToSurface(p);
      if (d < eps) { hit = true; break; }
      t += max(d, minStep);
      if (t > tb.y) break;
    }

    if (!hit) discard;

    vec3 n = calcNormal(p);
    if (dot(n, rd) > 0.0) n = -n;        // カメラ向きに揃える(符号不問で安定)

    vec3 lightDir = normalize(vec3(0.5, 0.85, 0.6));
    float diff = max(dot(n, lightDir), 0.0);
    float amb = 0.35;
    vec3 base = vec3(0.78);  // 既定の白っぽいソリッド(リニア)
    if (uHasColor == 1 && uShowColor == 1) {
      vec3 srgb = texture(uColor, toUVW(p)).rgb;
      base = pow(srgb, vec3(2.2));  // sRGB -> リニア
    }
    vec3 col = base * (amb + diff * 0.85);
    float rim = pow(1.0 - max(dot(n, -rd), 0.0), 3.0);
    col += rim * 0.2;

    fragColor = vec4(pow(col, vec3(0.4545)), 1.0);
  }
`;

export class RaymarchView {
  constructor(renderer) {
    this.renderer = renderer;
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.minVoxel = 1;

    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      glslVersion: THREE.GLSL3,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uSDF: { value: null },
        uColor: { value: null },
        uHasColor: { value: 0 },
        uShowColor: { value: 1 },
        uBoxMin: { value: new THREE.Vector3() },
        uBoxMax: { value: new THREE.Vector3() },
        uVoxel: { value: new THREE.Vector3() },
        uCameraPos: { value: new THREE.Vector3() },
        uInvProjection: { value: new THREE.Matrix4() },
        uCameraWorld: { value: new THREE.Matrix4() },
        uLevel: { value: 0.0 },
        uSigned: { value: 1 },
        uMaxSteps: { value: 512 },
      },
    });

    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.material);
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);
    this.ready = false;
  }

  /** Worker 結果から 3D テクスチャを構築。距離の統計も返す。
   *  signed=true: 符号付き(ソリッド), false: 無符号(シェル) */
  setVolume({ data, color, resolution, min, max }, signed = true) {
    const tex = new THREE.Data3DTexture(data, resolution, resolution, resolution);
    tex.format = THREE.RedFormat;
    tex.type = THREE.FloatType;

    // float テクスチャの線形補間は OES_texture_float_linear が必要。
    // 無ければ最近傍にフォールバック(無いと texture が不完全になり真っ黒になる)。
    const hasFloatLinear = !!this.renderer.extensions.get('OES_texture_float_linear');
    const filter = hasFloatLinear ? THREE.LinearFilter : THREE.NearestFilter;
    tex.minFilter = filter;
    tex.magFilter = filter;
    tex.wrapS = tex.wrapT = tex.wrapR = THREE.ClampToEdgeWrapping;
    tex.unpackAlignment = 1;
    tex.needsUpdate = true;

    const u = this.material.uniforms;
    if (u.uSDF.value) u.uSDF.value.dispose();
    u.uSDF.value = tex;

    // カラーボリューム(RGBA uint8。uint8 の線形補間は常にサポートされる)
    if (u.uColor.value) { u.uColor.value.dispose(); u.uColor.value = null; }
    if (color) {
      const ctex = new THREE.Data3DTexture(color, resolution, resolution, resolution);
      ctex.format = THREE.RGBAFormat;
      ctex.type = THREE.UnsignedByteType;
      ctex.minFilter = THREE.LinearFilter;
      ctex.magFilter = THREE.LinearFilter;
      ctex.wrapS = ctex.wrapT = ctex.wrapR = THREE.ClampToEdgeWrapping;
      ctex.unpackAlignment = 4;
      ctex.needsUpdate = true;
      u.uColor.value = ctex;
      u.uHasColor.value = 1;
    } else {
      u.uHasColor.value = 0;
    }

    u.uBoxMin.value.fromArray(min);
    u.uBoxMax.value.fromArray(max);
    const voxel = new THREE.Vector3(
      (max[0] - min[0]) / (resolution - 1),
      (max[1] - min[1]) / (resolution - 1),
      (max[2] - min[2]) / (resolution - 1),
    );
    u.uVoxel.value.copy(voxel);
    this.minVoxel = Math.min(voxel.x, voxel.y, voxel.z);
    u.uSigned.value = signed ? 1 : 0;
    // 符号付きは表面ぴったり(0)、無符号は薄皮が消えないよう少し厚みを付ける
    this.setLevelVoxels(signed ? 0.0 : 0.75);
    this.ready = true;

    // 統計
    let dmin = Infinity, dmax = -Infinity, nNeg = 0, nan = 0;
    for (let i = 0; i < data.length; i++) {
      const v = data[i];
      if (!Number.isFinite(v)) { nan++; continue; }
      if (v < dmin) dmin = v;
      if (v > dmax) dmax = v;
      if (v < 0) nNeg++;
    }
    return {
      dmin, dmax, nNeg, nan, count: data.length,
      filter: hasFloatLinear ? 'linear' : 'nearest',
      hasColor: !!color,
    };
  }

  setShowColor(on) { this.material.uniforms.uShowColor.value = on ? 1 : 0; }

  /** スライダー値(ボクセル単位)を等値面レベルに変換 */
  setLevelVoxels(v) {
    this.material.uniforms.uLevel.value = v * this.minVoxel;
  }

  render(renderer, perspCamera) {
    if (!this.ready) return;
    const u = this.material.uniforms;
    u.uCameraPos.value.copy(perspCamera.position);
    u.uInvProjection.value.copy(perspCamera.projectionMatrixInverse);
    u.uCameraWorld.value.copy(perspCamera.matrixWorld);
    renderer.render(this.scene, this.camera);
  }
}
