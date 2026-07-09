import * as THREE from 'three';

/**
 * 現実スケールの2段グリッド(細=cellSize, 太=10*cellSize)+ 軸。
 * cellSize はメートル想定(Scaniverse等)。
 */
export class SceneGrid {
  constructor() {
    this.group = new THREE.Group();
    this.cellSize = 0.1;     // m
    this.minorCells = 100;   // 片側ではなく全体の分割数
    this._build();
  }

  _build() {
    this.group.clear();
    const span = this.cellSize * this.minorCells;        // グリッド全体の一辺(m)
    const majorDiv = Math.max(1, Math.round(this.minorCells / 10));

    const minor = new THREE.GridHelper(span, this.minorCells, 0x2a2f3a, 0x222632);
    const major = new THREE.GridHelper(span, majorDiv, 0x4a5568, 0x39414f);
    major.position.y = 0.0005; // z-fight回避
    minor.material.transparent = major.material.transparent = true;
    minor.material.opacity = 0.5; major.material.opacity = 0.9;
    this.group.add(minor, major);

    const axes = new THREE.AxesHelper(span * 0.5);
    this.group.add(axes);
    this.span = span;
  }

  setCellSize(m) {
    this.cellSize = Math.max(1e-4, m);
    this._build();
  }

  /** 凡例テキスト */
  legend(unitScaleMm = 1000) {
    const fmt = (mm) => `${Number.parseFloat(mm.toFixed(mm < 10 ? 2 : mm < 100 ? 1 : 0)).toLocaleString()}mm`;
    return `細 1マス=${fmt(this.cellSize * unitScaleMm)} / 太 1マス=${fmt(this.cellSize * 10 * unitScaleMm)} / 全体 ${fmt(this.span * unitScaleMm)}`;
  }
}
