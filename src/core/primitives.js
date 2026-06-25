// SDF プリミティブの単一ソース。
// 各プリミティブは GLSL(レイマーチ用) と JS(Marching Cubes用) の同一式を持つ。
// 式は Inigo Quilez の距離関数集を基準。pyramid/tetra/spring は近似。
//
// kindId: 0=volume 予約 / 1.. プリミティブ。raymarch・sdfEval と一致させること。

const PI = Math.PI;
const clamp = (x, a, b) => Math.min(Math.max(x, a), b);
const len2 = (x, y) => Math.hypot(x, y);
const len3 = (x, y, z) => Math.sqrt(x * x + y * y + z * z);
const gmod = (x, y) => x - y * Math.floor(x / y); // GLSL mod

// ---- 複合形状ヘルパ(JS。GLSL の PRIM_HELPERS_GLSL と一致させること) ----
function b2(px, py, bx, by) { const dx = Math.abs(px) - bx, dy = Math.abs(py) - by; return len2(Math.max(dx, 0), Math.max(dy, 0)) + Math.min(Math.max(dx, dy), 0); }
function extr(d2, pz, hz) { const wy = Math.abs(pz) - hz; return Math.min(Math.max(d2, wy), 0) + len2(Math.max(d2, 0), Math.max(wy, 0)); }
function box3(px, py, pz, bx, by, bz) { const qx = Math.abs(px) - bx, qy = Math.abs(py) - by, qz = Math.abs(pz) - bz; return len3(Math.max(qx, 0), Math.max(qy, 0), Math.max(qz, 0)) + Math.min(Math.max(qx, Math.max(qy, qz)), 0); }
function cylZ(px, py, pz, r, h) { const dr = len2(px, py) - r, dy = Math.abs(pz) - h; return Math.min(Math.max(dr, dy), 0) + len2(Math.max(dr, 0), Math.max(dy, 0)); }
function jsL(p, lx, ly, t, hz) { const h = b2(p.x, p.y - (-ly * 0.5 + t * 0.5), lx * 0.5, t * 0.5); const v = b2(p.x - (-lx * 0.5 + t * 0.5), p.y, t * 0.5, ly * 0.5); return extr(Math.min(h, v), p.z, hz); }
function jsU(p, hw, hh, t, hz) { const bo = b2(p.x, p.y - (-hh + t * 0.5), hw, t * 0.5); const l = b2(p.x - (-hw + t * 0.5), p.y, t * 0.5, hh); const r = b2(p.x - (hw - t * 0.5), p.y, t * 0.5, hh); return extr(Math.min(bo, Math.min(l, r)), p.z, hz); }
function jsH(p, hw, hh, ft, wt, hz) { const top = b2(p.x, p.y - (hh - ft * 0.5), hw, ft * 0.5); const bot = b2(p.x, p.y + (hh - ft * 0.5), hw, ft * 0.5); const web = b2(p.x, p.y, wt * 0.5, hh - ft); return extr(Math.min(top, Math.min(bot, web)), p.z, hz); }
function jsTube(p, oR, iR, hh) { const dor = len2(p.x, p.z) - oR, doy = Math.abs(p.y) - hh; const outer = Math.min(Math.max(dor, doy), 0) + len2(Math.max(dor, 0), Math.max(doy, 0)); const dir = len2(p.x, p.z) - iR, diy = Math.abs(p.y) - hh - 0.01; const inner = Math.min(Math.max(dir, diy), 0) + len2(Math.max(dir, 0), Math.max(diy, 0)); return Math.max(outer, -inner); }
function jsUTube(p, R, r, legLen) { const qx = Math.abs(p.x), qy = p.y; let cl; if (qy > 0) cl = Math.abs(len2(qx, qy) - R); else { const cy = clamp(qy, -legLen, 0); cl = len2(qx - R, qy - cy); } return len2(cl, p.z) - r; }
function jsStairs(p, hw, run, rise, nf) { const n = Math.round(nf); let d = 1e9; const off = nf * run * 0.5; for (let k = 0; k < n && k < 24; k++) { const hy = (k + 1) * rise * 0.5; d = Math.min(d, box3(p.x, p.y - hy, p.z - ((k + 0.5) * run - off), hw, hy, run * 0.5)); } return d; }
function jsSpiral(p, nf, rise, oR, angDeg, iR, th) { const n = Math.round(nf); const ang = angDeg * Math.PI / 180; let d = 1e9; const wz = oR * Math.sin(ang) * 0.6; for (let k = 0; k < n && k < 48; k++) { const A = -ang * k, ca = Math.cos(A), sa = Math.sin(A); const qy = p.y - k * rise; const xx = ca * p.x - sa * p.z, zz = sa * p.x + ca * p.z; d = Math.min(d, box3(xx - (iR + oR) * 0.5, qy, zz, (oR - iR) * 0.5, th * 0.5, wz)); } return d; }
function jsHinge(p, plateLen, t, hw, kr) { const kn = cylZ(p.x, p.y, p.z, kr, hw); const plate = box3(p.x - (kr + plateLen * 0.5), p.y, p.z, plateLen * 0.5, t * 0.5, hw); return Math.min(kn, plate); }

export const PRIMITIVES = [
  {
    kindId: 1, key: 'sphere', name: '球',
    params: [{ key: 'r', label: '半径', value: 0.5, min: 0.01, step: 0.01 }],
    pack: (p) => ({ a: [p.r, 0, 0, 0], b: [0, 0, 0, 0] }),
    bound: (p) => p.r,
    js: (p, a) => len3(p.x, p.y, p.z) - a[0],
    glsl: `if(kind==1){ return length(p)-a.x; }`,
  },
  {
    kindId: 2, key: 'box', name: '箱',
    params: [
      { key: 'x', label: '幅/2', value: 0.5, min: 0.01, step: 0.01 },
      { key: 'y', label: '高/2', value: 0.5, min: 0.01, step: 0.01 },
      { key: 'z', label: '奥/2', value: 0.5, min: 0.01, step: 0.01 },
    ],
    pack: (p) => ({ a: [p.x, p.y, p.z, 0], b: [0, 0, 0, 0] }),
    bound: (p) => len3(p.x, p.y, p.z),
    js: (p, a) => {
      const qx = Math.abs(p.x) - a[0], qy = Math.abs(p.y) - a[1], qz = Math.abs(p.z) - a[2];
      const o = len3(Math.max(qx, 0), Math.max(qy, 0), Math.max(qz, 0));
      return o + Math.min(Math.max(qx, Math.max(qy, qz)), 0);
    },
    glsl: `if(kind==2){ vec3 q=abs(p)-a.xyz; return length(max(q,0.0))+min(max(q.x,max(q.y,q.z)),0.0); }`,
  },
  {
    kindId: 3, key: 'roundbox', name: '角丸箱',
    params: [
      { key: 'x', label: '幅/2', value: 0.5, min: 0.01, step: 0.01 },
      { key: 'y', label: '高/2', value: 0.5, min: 0.01, step: 0.01 },
      { key: 'z', label: '奥/2', value: 0.5, min: 0.01, step: 0.01 },
      { key: 'r', label: '丸み', value: 0.1, min: 0, step: 0.01 },
    ],
    pack: (p) => ({ a: [p.x, p.y, p.z, p.r], b: [0, 0, 0, 0] }),
    bound: (p) => len3(p.x, p.y, p.z),
    js: (p, a) => {
      const qx = Math.abs(p.x) - a[0] + a[3], qy = Math.abs(p.y) - a[1] + a[3], qz = Math.abs(p.z) - a[2] + a[3];
      const o = len3(Math.max(qx, 0), Math.max(qy, 0), Math.max(qz, 0));
      return o + Math.min(Math.max(qx, Math.max(qy, qz)), 0) - a[3];
    },
    glsl: `if(kind==3){ vec3 q=abs(p)-a.xyz+a.w; return length(max(q,0.0))+min(max(q.x,max(q.y,q.z)),0.0)-a.w; }`,
  },
  {
    kindId: 4, key: 'cylinder', name: '円柱',
    params: [
      { key: 'r', label: '半径', value: 0.5, min: 0.01, step: 0.01 },
      { key: 'h', label: '高/2', value: 0.5, min: 0.01, step: 0.01 },
    ],
    pack: (p) => ({ a: [p.r, p.h, 0, 0], b: [0, 0, 0, 0] }),
    bound: (p) => len2(p.r, p.h),
    js: (p, a) => {
      const dx = len2(p.x, p.z) - a[0], dy = Math.abs(p.y) - a[1];
      return Math.min(Math.max(dx, dy), 0) + len2(Math.max(dx, 0), Math.max(dy, 0));
    },
    glsl: `if(kind==4){ vec2 d=vec2(length(p.xz)-a.x, abs(p.y)-a.y); return min(max(d.x,d.y),0.0)+length(max(d,0.0)); }`,
  },
  {
    kindId: 5, key: 'capsule', name: 'カプセル',
    params: [
      { key: 'r', label: '半径', value: 0.35, min: 0.01, step: 0.01 },
      { key: 'h', label: '芯/2', value: 0.5, min: 0, step: 0.01 },
    ],
    pack: (p) => ({ a: [p.r, p.h, 0, 0], b: [0, 0, 0, 0] }),
    bound: (p) => p.h + p.r,
    js: (p, a) => {
      const py = p.y - clamp(p.y, -a[1], a[1]);
      return len3(p.x, py, p.z) - a[0];
    },
    glsl: `if(kind==5){ vec3 q=p; q.y-=clamp(q.y,-a.y,a.y); return length(q)-a.x; }`,
  },
  {
    kindId: 6, key: 'torus', name: 'トーラス',
    params: [
      { key: 'R', label: '主半径', value: 0.5, min: 0.01, step: 0.01 },
      { key: 'r', label: '管半径', value: 0.18, min: 0.01, step: 0.01 },
    ],
    pack: (p) => ({ a: [p.R, p.r, 0, 0], b: [0, 0, 0, 0] }),
    bound: (p) => p.R + p.r,
    js: (p, a) => len2(len2(p.x, p.z) - a[0], p.y) - a[1],
    glsl: `if(kind==6){ vec2 q=vec2(length(p.xz)-a.x, p.y); return length(q)-a.y; }`,
  },
  {
    kindId: 7, key: 'plane', name: '平面/半空間',
    params: [],
    pack: () => ({ a: [0, 0, 0, 0], b: [0, 0, 0, 0] }),
    bound: () => 0.5,
    js: (p) => p.y,
    glsl: `if(kind==7){ return p.y; }`,
  },
  {
    kindId: 8, key: 'pyramid', name: '四角錐',
    params: [
      { key: 'base', label: '底辺/2', value: 0.5, min: 0.01, step: 0.01 },
      { key: 'h', label: '高さ', value: 1.0, min: 0.01, step: 0.01 },
    ],
    pack: (p) => ({ a: [p.base, p.h, 0, 0], b: [0, 0, 0, 0] }),
    bound: (p) => Math.max(p.base, p.h),
    js: (p, a) => {
      const scale = 2 * a[0];
      let px = p.x / scale, py = p.y / scale, pz = p.z / scale;
      const h = a[1] / scale;
      const m2 = h * h + 0.25;
      px = Math.abs(px); pz = Math.abs(pz);
      if (pz > px) { const t = px; px = pz; pz = t; }
      px -= 0.5; pz -= 0.5;
      const qx = pz, qy = h * py - 0.5 * px, qz = h * px + 0.5 * py;
      const s = Math.max(-qx, 0);
      const tt = clamp((qy - 0.5 * pz) / (m2 + 0.25), 0, 1);
      const A = m2 * (qx + s) * (qx + s) + qy * qy;
      const B = m2 * (qx + 0.5 * tt) * (qx + 0.5 * tt) + (qy - m2 * tt) * (qy - m2 * tt);
      const d2 = Math.min(qy, -qx * m2 - qy * 0.5) > 0 ? 0 : Math.min(A, B);
      return Math.sqrt((d2 + qz * qz) / m2) * Math.sign(Math.max(qz, -py)) * scale;
    },
    glsl: `if(kind==8){
      float scale=2.0*a.x; vec3 pp=p/scale; float h=a.y/scale;
      float m2=h*h+0.25; pp.xz=abs(pp.xz); pp.xz=(pp.z>pp.x)?pp.zx:pp.xz; pp.xz-=0.5;
      vec3 q=vec3(pp.z, h*pp.y-0.5*pp.x, h*pp.x+0.5*pp.y);
      float s=max(-q.x,0.0); float t=clamp((q.y-0.5*pp.z)/(m2+0.25),0.0,1.0);
      float A=m2*(q.x+s)*(q.x+s)+q.y*q.y;
      float B=m2*(q.x+0.5*t)*(q.x+0.5*t)+(q.y-m2*t)*(q.y-m2*t);
      float d2=min(q.y,-q.x*m2-q.y*0.5)>0.0?0.0:min(A,B);
      return sqrt((d2+q.z*q.z)/m2)*sign(max(q.z,-pp.y))*scale;
    }`,
  },
  {
    kindId: 9, key: 'tetra', name: '三角錐',
    params: [{ key: 's', label: 'サイズ', value: 0.6, min: 0.01, step: 0.01 }],
    pack: (p) => ({ a: [p.s, 0, 0, 0], b: [0, 0, 0, 0] }),
    bound: (p) => p.s,
    js: (p, a) => {
      const m = Math.max(
        Math.max(p.x + p.y - p.z, -p.x - p.y - p.z),
        Math.max(-p.x + p.y + p.z, p.x - p.y + p.z),
      );
      return (m - a[0]) * 0.5773502692;
    },
    glsl: `if(kind==9){
      float m=max(max(p.x+p.y-p.z,-p.x-p.y-p.z),max(-p.x+p.y+p.z,p.x-p.y+p.z));
      return (m-a.x)*0.5773502692;
    }`,
  },
  {
    kindId: 10, key: 'ngon', name: 'N角柱',
    params: [
      { key: 'r', label: '外接半径', value: 0.5, min: 0.01, step: 0.01 },
      { key: 'h', label: '高/2', value: 0.5, min: 0.01, step: 0.01 },
      { key: 'n', label: '辺の数', value: 6, min: 3, max: 12, step: 1 },
    ],
    pack: (p) => ({ a: [p.r, p.h, Math.max(3, Math.round(p.n)), 0], b: [0, 0, 0, 0] }),
    bound: (p) => len2(p.r, p.h),
    js: (p, a) => {
      const n = Math.max(3, Math.round(a[2]));
      const an = PI / n;
      const he = a[0] * Math.cos(an);
      let bn = Math.atan2(p.z, p.x);
      bn = gmod(bn + an, 2 * an) - an;
      const d2 = len2(p.x, p.z) * Math.cos(bn) - he;
      const dy = Math.abs(p.y) - a[1];
      return Math.min(Math.max(d2, dy), 0) + len2(Math.max(d2, 0), Math.max(dy, 0));
    },
    glsl: `if(kind==10){
      float n=max(3.0,a.z); float an=PI/n; float he=a.x*cos(an);
      float bn=atan(p.z,p.x); bn=mod(bn+an,2.0*an)-an;
      float d2=length(p.xz)*cos(bn)-he; float dy=abs(p.y)-a.y;
      return min(max(d2,dy),0.0)+length(vec2(max(d2,0.0),max(dy,0.0)));
    }`,
  },
  {
    kindId: 11, key: 'spring', name: 'スプリング(近似)',
    params: [
      { key: 'R', label: 'コイル半径', value: 0.5, min: 0.05, step: 0.01 },
      { key: 'r', label: '線半径', value: 0.08, min: 0.01, step: 0.005 },
      { key: 'pitch', label: 'ピッチ', value: 0.3, min: 0.02, step: 0.01 },
      { key: 'h', label: '高/2', value: 0.7, min: 0.05, step: 0.01 },
    ],
    pack: (p) => ({ a: [p.R, p.r, p.pitch, p.h], b: [0, 0, 0, 0] }),
    bound: (p) => Math.max(p.R + p.r, p.h),
    js: (p, a) => {
      const [R, r, pitch, h] = a;
      const angle = Math.atan2(p.z, p.x);
      const rad = len2(p.x, p.z) - R;
      let yrel = p.y - (pitch * angle) / (2 * PI);
      yrel = gmod(yrel + 0.5 * pitch, pitch) - 0.5 * pitch;
      const d = len2(rad, yrel) - r;
      return Math.max(d, Math.abs(p.y) - h);
    },
    glsl: `if(kind==11){
      float R=a.x,r=a.y,pitch=a.z,h=a.w;
      float angle=atan(p.z,p.x); float rad=length(p.xz)-R;
      float yrel=p.y-pitch*angle/(2.0*PI); yrel=mod(yrel+0.5*pitch,pitch)-0.5*pitch;
      float d=length(vec2(rad,yrel))-r; return max(d,abs(p.y)-h);
    }`,
  },

  // ---- エクストラ(複合形状) ----
  {
    kindId: 12, key: 'hbeam', name: 'H鋼', category: 'extra',
    params: [{ key: 'hw', label: '幅/2', value: 0.15, min: 0.01, step: 0.01 }, { key: 'hh', label: '高/2', value: 0.25, min: 0.01, step: 0.01 }, { key: 'ft', label: 'ﾌﾗﾝｼﾞ厚', value: 0.04, min: 0.005, step: 0.005 }, { key: 'wt', label: 'ｳｪﾌﾞ厚', value: 0.03, min: 0.005, step: 0.005 }, { key: 'hz', label: '長/2', value: 0.6, min: 0.02, step: 0.02 }],
    pack: (p) => ({ a: [p.hw, p.hh, p.ft, p.wt], b: [p.hz, 0, 0, 0] }),
    bound: (p) => Math.max(p.hw, p.hh, p.hz),
    js: (p, a, b) => jsH(p, a[0], a[1], a[2], a[3], b[0]),
    glsl: 'if(kind==12){ return _hbeam(p,a.x,a.y,a.z,a.w,b.x); }',
  },
  {
    kindId: 13, key: 'lprofile', name: 'L字鋼', category: 'extra',
    params: [{ key: 'lx', label: '脚X', value: 0.25, min: 0.02, step: 0.01 }, { key: 'ly', label: '脚Y', value: 0.25, min: 0.02, step: 0.01 }, { key: 't', label: '厚み', value: 0.04, min: 0.005, step: 0.005 }, { key: 'hz', label: '長/2', value: 0.6, min: 0.01, step: 0.02 }],
    pack: (p) => ({ a: [p.lx, p.ly, p.t, p.hz], b: [0, 0, 0, 0] }),
    bound: (p) => Math.max(p.lx, p.ly, p.hz),
    js: (p, a) => jsL(p, a[0], a[1], a[2], a[3]),
    glsl: 'if(kind==13){ return _lprofile(p,a.x,a.y,a.z,a.w); }',
  },
  {
    kindId: 14, key: 'uprofile', name: 'U字鋼', category: 'extra',
    params: [{ key: 'hw', label: '幅/2', value: 0.2, min: 0.02, step: 0.01 }, { key: 'hh', label: '高/2', value: 0.2, min: 0.02, step: 0.01 }, { key: 't', label: '厚み', value: 0.04, min: 0.005, step: 0.005 }, { key: 'hz', label: '長/2', value: 0.6, min: 0.01, step: 0.02 }],
    pack: (p) => ({ a: [p.hw, p.hh, p.t, p.hz], b: [0, 0, 0, 0] }),
    bound: (p) => Math.max(p.hw, p.hh, p.hz),
    js: (p, a) => jsU(p, a[0], a[1], a[2], a[3]),
    glsl: 'if(kind==14){ return _uprofile(p,a.x,a.y,a.z,a.w); }',
  },
  {
    kindId: 15, key: 'tube', name: 'チューブ', category: 'extra',
    params: [{ key: 'oR', label: '外半径', value: 0.3, min: 0.02, step: 0.01 }, { key: 'iR', label: '内半径', value: 0.22, min: 0.01, step: 0.01 }, { key: 'hh', label: '高/2', value: 0.5, min: 0.02, step: 0.02 }],
    pack: (p) => ({ a: [p.oR, Math.min(p.iR, p.oR - 0.005), p.hh, 0], b: [0, 0, 0, 0] }),
    bound: (p) => Math.max(p.oR, p.hh),
    js: (p, a) => jsTube(p, a[0], a[1], a[2]),
    glsl: 'if(kind==15){ return _tube(p,a.x,a.y,a.z); }',
  },
  {
    kindId: 16, key: 'utube', name: 'U字チューブ', category: 'extra',
    params: [{ key: 'R', label: '曲げ半径', value: 0.35, min: 0.05, step: 0.01 }, { key: 'r', label: '管半径', value: 0.08, min: 0.01, step: 0.005 }, { key: 'legLen', label: '脚長', value: 0.5, min: 0.02, step: 0.02 }],
    pack: (p) => ({ a: [p.R, p.r, p.legLen, 0], b: [0, 0, 0, 0] }),
    bound: (p) => p.R + p.legLen + p.r,
    js: (p, a) => jsUTube(p, a[0], a[1], a[2]),
    glsl: 'if(kind==16){ return _utube(p,a.x,a.y,a.z); }',
  },
  {
    kindId: 17, key: 'stairs', name: '階段', category: 'extra',
    params: [{ key: 'hw', label: '幅/2', value: 0.4, min: 0.02, step: 0.02 }, { key: 'run', label: '踏面', value: 0.18, min: 0.02, step: 0.01 }, { key: 'rise', label: '蹴上', value: 0.15, min: 0.02, step: 0.01 }, { key: 'n', label: '段数', value: 6, min: 1, max: 24, step: 1 }],
    pack: (p) => ({ a: [p.hw, p.run, p.rise, Math.round(p.n)], b: [0, 0, 0, 0] }),
    bound: (p) => Math.max(p.hw, p.n * p.run * 0.5, p.n * p.rise),
    js: (p, a) => jsStairs(p, a[0], a[1], a[2], a[3]),
    glsl: 'if(kind==17){ return _stairs(p,a.x,a.y,a.z,a.w); }',
  },
  {
    kindId: 18, key: 'spiralstairs', name: '螺旋階段', category: 'extra',
    params: [{ key: 'n', label: '段数', value: 12, min: 1, max: 48, step: 1 }, { key: 'rise', label: '蹴上', value: 0.18, min: 0.02, step: 0.01 }, { key: 'oR', label: '外半径', value: 0.5, min: 0.05, step: 0.02 }, { key: 'angDeg', label: '角度', value: 30, min: 5, max: 120, step: 1 }, { key: 'iR', label: '内半径', value: 0.12, min: 0, step: 0.01 }, { key: 'th', label: '段厚', value: 0.06, min: 0.01, step: 0.01 }],
    pack: (p) => ({ a: [Math.round(p.n), p.rise, p.oR, p.angDeg], b: [p.iR, p.th, 0, 0] }),
    bound: (p) => Math.max(p.oR, p.n * p.rise),
    js: (p, a, b) => jsSpiral(p, a[0], a[1], a[2], a[3], b[0], b[1]),
    glsl: 'if(kind==18){ return _spiral(p,a.x,a.y,a.z,a.w,b.x,b.y); }',
  },
  {
    kindId: 19, key: 'icosphere', name: 'Icoスフィア', category: 'extra',
    params: [{ key: 'r', label: '半径', value: 0.5, min: 0.01, step: 0.01 }],
    pack: (p) => ({ a: [p.r, 0, 0, 0], b: [0, 0, 0, 0] }),
    bound: (p) => p.r,
    js: (p, a) => len3(p.x, p.y, p.z) - a[0],
    glsl: 'if(kind==19){ return length(p)-a.x; }',
  },
  {
    kindId: 20, key: 'hingeleaf', name: 'ヒンジ片', category: 'extra',
    params: [{ key: 'plateLen', label: '板長', value: 0.4, min: 0.02, step: 0.01 }, { key: 't', label: '厚み', value: 0.04, min: 0.005, step: 0.005 }, { key: 'hw', label: '幅/2', value: 0.25, min: 0.02, step: 0.01 }, { key: 'kr', label: '軸半径', value: 0.06, min: 0.01, step: 0.005 }],
    pack: (p) => ({ a: [p.plateLen, p.t, p.hw, p.kr], b: [0, 0, 0, 0] }),
    bound: (p) => p.kr + p.plateLen,
    js: (p, a) => jsHinge(p, a[0], a[1], a[2], a[3]),
    glsl: 'if(kind==20){ return _hingeLeaf(p,a.x,a.y,a.z,a.w); }',
  },
];

// エクストラのカタログ(ボタン)。同じ kind を別既定値で複数ボタンにできる。
export const EXTRA_CATALOG = [
  { name: 'H鋼', kind: 12 },
  { name: 'L字鋼', kind: 13, params: { lx: 0.25, ly: 0.25, t: 0.04, hz: 0.6 } },
  { name: 'L字ﾌﾞﾗｹｯﾄ', kind: 13, params: { lx: 0.4, ly: 0.4, t: 0.08, hz: 0.2 } },
  { name: 'L字ﾌﾟﾚｰﾄ', kind: 13, params: { lx: 0.5, ly: 0.5, t: 0.12, hz: 0.03 } },
  { name: 'U字鋼', kind: 14, params: { hw: 0.2, hh: 0.2, t: 0.04, hz: 0.6 } },
  { name: 'U字ﾌﾟﾚｰﾄ', kind: 14, params: { hw: 0.35, hh: 0.3, t: 0.1, hz: 0.03 } },
  { name: 'チューブ', kind: 15 },
  { name: 'U字チューブ', kind: 16 },
  { name: '階段', kind: 17 },
  { name: '螺旋階段', kind: 18 },
  { name: 'Icoｽﾌｨｱ', kind: 19 },
  { name: 'ヒンジ', kind: 20, hinge: true },
];

export const PRIM_BY_KIND = new Map(PRIMITIVES.map((p) => [p.kindId, p]));
export const PRIM_BY_KEY = new Map(PRIMITIVES.map((p) => [p.key, p]));

// 複合形状の GLSL ヘルパ(JSの b2/extr/box3/cylZ/jsL... と一致させること)
const PRIM_HELPERS_GLSL = `
  float _b2(vec2 p, vec2 b){ vec2 d=abs(p)-b; return length(max(d,0.0))+min(max(d.x,d.y),0.0); }
  float _extr(float d2, float pz, float hz){ float wy=abs(pz)-hz; return min(max(d2,wy),0.0)+length(vec2(max(d2,0.0),max(wy,0.0))); }
  float _box3(vec3 p, vec3 b){ vec3 q=abs(p)-b; return length(max(q,0.0))+min(max(q.x,max(q.y,q.z)),0.0); }
  float _cylZ(vec3 p, float r, float h){ float dr=length(p.xy)-r, dy=abs(p.z)-h; return min(max(dr,dy),0.0)+length(vec2(max(dr,0.0),max(dy,0.0))); }
  float _lprofile(vec3 p, float lx, float ly, float t, float hz){
    float h=_b2(vec2(p.x, p.y-(-ly*0.5+t*0.5)), vec2(lx*0.5,t*0.5));
    float v=_b2(vec2(p.x-(-lx*0.5+t*0.5), p.y), vec2(t*0.5, ly*0.5));
    return _extr(min(h,v), p.z, hz);
  }
  float _uprofile(vec3 p, float hw, float hh, float t, float hz){
    float bo=_b2(vec2(p.x, p.y-(-hh+t*0.5)), vec2(hw, t*0.5));
    float l=_b2(vec2(p.x-(-hw+t*0.5), p.y), vec2(t*0.5, hh));
    float r=_b2(vec2(p.x-(hw-t*0.5), p.y), vec2(t*0.5, hh));
    return _extr(min(bo,min(l,r)), p.z, hz);
  }
  float _hbeam(vec3 p, float hw, float hh, float ft, float wt, float hz){
    float top=_b2(vec2(p.x, p.y-(hh-ft*0.5)), vec2(hw, ft*0.5));
    float bot=_b2(vec2(p.x, p.y+(hh-ft*0.5)), vec2(hw, ft*0.5));
    float web=_b2(vec2(p.x, p.y), vec2(wt*0.5, hh-ft));
    return _extr(min(top,min(bot,web)), p.z, hz);
  }
  float _tube(vec3 p, float oR, float iR, float hh){
    vec2 od=vec2(length(p.xz)-oR, abs(p.y)-hh);
    float outer=min(max(od.x,od.y),0.0)+length(max(od,0.0));
    vec2 idv=vec2(length(p.xz)-iR, abs(p.y)-hh-0.01);
    float inner=min(max(idv.x,idv.y),0.0)+length(max(idv,0.0));
    return max(outer,-inner);
  }
  float _utube(vec3 p, float R, float r, float legLen){
    vec2 q=vec2(abs(p.x), p.y); float cl;
    if(q.y>0.0) cl=abs(length(q)-R);
    else { float cy=clamp(q.y,-legLen,0.0); cl=length(vec2(q.x-R, q.y-cy)); }
    return sqrt(cl*cl + p.z*p.z) - r;
  }
  float _stairs(vec3 p, float hw, float run, float rise, float nf){
    int n=int(nf); float d=1e9; float off=nf*run*0.5;
    for(int k=0;k<24;k++){ if(k>=n)break; float hy=float(k+1)*rise*0.5;
      d=min(d, _box3(vec3(p.x, p.y-hy, p.z-((float(k)+0.5)*run-off)), vec3(hw, hy, run*0.5))); }
    return d;
  }
  float _spiral(vec3 p, float nf, float rise, float oR, float angDeg, float iR, float th){
    int n=int(nf); float ang=radians(angDeg); float d=1e9; float wz=oR*sin(ang)*0.6;
    for(int k=0;k<48;k++){ if(k>=n)break; float A=-ang*float(k); float ca=cos(A), sa=sin(A);
      float qy=p.y-float(k)*rise; vec2 xz=vec2(ca*p.x - sa*p.z, sa*p.x + ca*p.z);
      d=min(d, _box3(vec3(xz.x-(iR+oR)*0.5, qy, xz.y), vec3((oR-iR)*0.5, th*0.5, wz))); }
    return d;
  }
  float _hingeLeaf(vec3 p, float plateLen, float t, float hw, float kr){
    float kn=_cylZ(p, kr, hw);
    float plate=_box3(vec3(p.x-(kr+plateLen*0.5), p.y, p.z), vec3(plateLen*0.5, t*0.5, hw));
    return min(kn, plate);
  }
`;

/** 全プリミティブの GLSL を結合して primitiveDist 関数本体を作る */
export function buildPrimitiveGLSL() {
  const cases = PRIMITIVES.map((p) => p.glsl).join('\n      ');
  return `
  #define PI 3.141592653589793
  ${PRIM_HELPERS_GLSL}
  float primitiveDist(int kind, vec3 p, vec4 a, vec4 b) {
      ${cases}
      return 1e9;
  }`;
}

/** params(human) から既定値を作る */
export function defaultParams(prim) {
  const o = {};
  for (const pr of prim.params) o[pr.key] = pr.value;
  return o;
}
