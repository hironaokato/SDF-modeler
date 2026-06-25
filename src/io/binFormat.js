// 共通バイナリコンテナ:  [magic(4) | version(u32 LE) | jsonLen(u32 LE) | JSON(UTF-8) | blob領域]
// blob領域は ArrayBuffer を連結。JSON 側に {off,len} を記録して参照する。

const HEADER = 12; // magic(4) + version(4) + jsonLen(4)

/**
 * @param {string} magic 4文字
 * @param {number} version
 * @param {object} manifest JSON化するメタ。blobの {off,len} は呼び出し側で埋める
 * @param {ArrayBuffer[]} blobs manifest内のoff/lenと整合する順序
 */
// blob は ArrayBuffer か TypedArray(ビュー)を受け付け、正確なバイト範囲を取り出す
function asU8(b) {
  if (b instanceof ArrayBuffer) return new Uint8Array(b);
  return new Uint8Array(b.buffer, b.byteOffset, b.byteLength); // TypedArray
}

export function encodeContainer(magic, version, manifest, blobs) {
  const json = new TextEncoder().encode(JSON.stringify(manifest));
  const jsonPad = (4 - (json.length % 4)) % 4; // 4バイト境界
  const views = blobs.map(asU8);
  const blobBytes = views.reduce((s, b) => s + b.byteLength, 0);
  const total = HEADER + json.length + jsonPad + blobBytes;

  const out = new ArrayBuffer(total);
  const dv = new DataView(out);
  const u8 = new Uint8Array(out);

  for (let i = 0; i < 4; i++) dv.setUint8(i, magic.charCodeAt(i));
  dv.setUint32(4, version, true);
  dv.setUint32(8, json.length, true);
  u8.set(json, HEADER);

  let off = HEADER + json.length + jsonPad;
  for (const b of views) { u8.set(b, off); off += b.byteLength; }
  return out;
}

/** blob領域の絶対オフセット(JSONの off はこの領域内の相対値) */
export function blobBase(arrayBuffer) {
  const dv = new DataView(arrayBuffer);
  const jsonLen = dv.getUint32(8, true);
  const jsonPad = (4 - (jsonLen % 4)) % 4;
  return HEADER + jsonLen + jsonPad;
}

export function decodeContainer(arrayBuffer) {
  const dv = new DataView(arrayBuffer);
  let magic = '';
  for (let i = 0; i < 4; i++) magic += String.fromCharCode(dv.getUint8(i));
  const version = dv.getUint32(4, true);
  const jsonLen = dv.getUint32(8, true);
  const json = new TextDecoder().decode(new Uint8Array(arrayBuffer, HEADER, jsonLen));
  const manifest = JSON.parse(json);
  const base = blobBase(arrayBuffer);
  // 相対off/lenで部分ビューを取り出すヘルパ
  const slice = (off, len) => arrayBuffer.slice(base + off, base + off + len);
  return { magic, version, manifest, slice, base, buffer: arrayBuffer };
}

/** ブラウザでファイルとして保存 */
export function downloadArrayBuffer(arrayBuffer, filename) {
  const blob = new Blob([arrayBuffer], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
