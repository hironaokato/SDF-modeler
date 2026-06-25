// .sdf : 単一SDFボリューム(変換器の出力 / モデラーの入力)
import { encodeContainer, decodeContainer } from './binFormat.js';

const MAGIC = 'SDF1';
const VERSION = 1;

/**
 * @typedef {Object} VolumeData
 * @property {string} name
 * @property {number} resolution
 * @property {number[]} min  長さ3
 * @property {number[]} max  長さ3
 * @property {boolean} signed
 * @property {boolean} hasColor
 * @property {Float32Array} distance  res^3
 * @property {Uint8Array|null} color  res^3*4 (RGBA)
 */

/** @param {VolumeData} v */
export function encodeSDF(v) {
  const blobs = [v.distance];
  let off = v.distance.byteLength;
  const manifest = {
    name: v.name || 'volume',
    resolution: v.resolution,
    min: v.min,
    max: v.max,
    signed: !!v.signed,
    hasColor: !!(v.hasColor && v.color),
    hasMesh: !!(v.mesh && v.mesh.positions),
    blobs: { distance: { off: 0, len: v.distance.byteLength } },
  };
  if (manifest.hasColor) {
    manifest.blobs.color = { off, len: v.color.byteLength };
    blobs.push(v.color); off += v.color.byteLength;
  }
  if (manifest.hasMesh) {
    manifest.blobs.meshPos = { off, len: v.mesh.positions.byteLength };
    blobs.push(v.mesh.positions); off += v.mesh.positions.byteLength;
    manifest.meshIndexed = !!v.mesh.index;
    if (v.mesh.index) {
      manifest.blobs.meshIdx = { off, len: v.mesh.index.byteLength };
      blobs.push(v.mesh.index); off += v.mesh.index.byteLength;
    }
  }
  return encodeContainer(MAGIC, VERSION, manifest, blobs);
}

/** manifest と slice から mesh を復元(共通) */
export function decodeMesh(manifest, slice) {
  if (!manifest.hasMesh || !manifest.blobs.meshPos) return null;
  const mp = manifest.blobs.meshPos;
  const positions = new Float32Array(slice(mp.off, mp.len));
  let index = null;
  if (manifest.meshIndexed && manifest.blobs.meshIdx) {
    const mi = manifest.blobs.meshIdx;
    index = new Uint32Array(slice(mi.off, mi.len));
  }
  return { positions, index };
}

/** @returns {VolumeData} */
export function decodeSDF(arrayBuffer) {
  const { magic, manifest, slice } = decodeContainer(arrayBuffer);
  if (magic !== MAGIC) throw new Error(`.sdf ではありません (magic=${magic})`);
  const d = manifest.blobs.distance;
  const distance = new Float32Array(slice(d.off, d.len));
  let color = null;
  if (manifest.hasColor && manifest.blobs.color) {
    const c = manifest.blobs.color;
    color = new Uint8Array(slice(c.off, c.len));
  }
  return {
    name: manifest.name,
    resolution: manifest.resolution,
    min: manifest.min,
    max: manifest.max,
    signed: manifest.signed,
    hasColor: !!color,
    distance,
    color,
    mesh: decodeMesh(manifest, slice),
  };
}

export function isSDF(arrayBuffer) {
  if (arrayBuffer.byteLength < 4) return false;
  const dv = new DataView(arrayBuffer);
  return String.fromCharCode(dv.getUint8(0), dv.getUint8(1), dv.getUint8(2), dv.getUint8(3)) === MAGIC;
}
