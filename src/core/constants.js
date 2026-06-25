// シェーダ配列の上限(GLSL ES 3.00 は sampler 配列の動的添字が不可のため
// ボリュームは明示サンプラを if/else で切替 → 少数に制限)
export const MAX_VOLUMES = 4;   // 同時に扱える GLB由来SDF(ボリューム)数
// オブジェクトデータはデータテクスチャ(1オブジェクト=12テクセル)で渡すため uniform 上限に縛られない。
// これはシェーダのループ上限(実質の天井)で、十分大きく取る。
export const MAX_OBJECTS = 256;

export const OP = { union: 0, subtract: 1, intersect: 2 };

// プリミティブ種別ID(0 はボリューム予約)。primitives.js と一致させる。
export const KIND_VOLUME = 0;
