# SDF Modeler — ハンドオフ資料

ブラウザ内で動く **SDF（符号付き距離場）CSG モデラー**。スキャン（GLB）を SDF ボリュームに変換し、プリミティブと Boolean で組み立て、スカルプトし、STL 書き出しまで行う。表示はすべて WebGL2 のレイマーチ（GPU）。

最終更新コミット: `e14b136`（タイル/クラスタ・カリング）。

---

## 1. 起動・ビルド

```bash
cd SDF-modeler
npm install
npm run dev      # http://localhost:5173 で開発サーバ
npm run build    # dist/ に本番ビルド
npm run preview  # ビルド結果のプレビュー
```

- 依存: `three@^0.169`, `three-mesh-bvh@^0.8`, `vite`。Node v25 で動作確認。
- 使い方: 起動後、`GLB` / `.sdf` / `.sdfm` をウィンドウにドラッグ&ドロップ、または「ファイル/変換」タブの「開く / 取り込み」。
- **重要**: シェーダの uniform/関数を変更したら必ず **ハードリロード（Cmd+Shift+R）**。Vite の HMR ではシェーダが更新されないことがある。

---

## 2. アーキテクチャ全体像

「変換（GLB→SDF）」と「モデリング（複数SDF→CSG→STL）」の2系統。表示はGPUレイマーチ、重い計算（変換・メッシュ化・ベイク）はCPU/Web Worker。

```
GLB ──(Web Worker, 並列)──▶ VolumeData(距離grid+色) ──▶ .sdf 保存
                                      │
.sdf / .sdfm ─▶ SdfScene(オブジェクト配列) ─┬─▶ RaymarchView(GPU表示)
プリミティブ/エクストラ追加 ───────────────┤
                                            ├─▶ sdfEval(JS評価) ─▶ Marching Cubes(Worker) ─▶ STL
                                            ├─▶ Sculpt(ボクセル彫刻)
                                            └─▶ 結合(ベイク)/.sdfm 保存
```

### データの持ち方
- **VolumeData**: `{ name, resolution, min[3], max[3], signed, hasColor, distance:Float32Array(res³), color:Uint8Array(res³*4)|null, mesh }`。
- **SdfObject**（`core/sdfScene.js`）: `kind`(0=ボリューム/1+=プリミティブ), `name`, `node`(THREE.Object3D=変換), `op`('union'|'subtract'|'intersect'), `smoothK`, `color`, `params`(プリミティブ寸法), `array`(配列モディファイア), `volume`(ボリューム参照)。
- **SdfScene**: `objects[]`（**配列順 = Boolean適用順**, 先頭がベース）, `volumes[]`（GPUスロット0..3）。`onChange` で UI/プロキシ更新。

### GLSL と JS の二重実装（同期必須）
SDF の式は **GLSL（表示）** と **JS（メッシュ化・ピッキング・スカルプト・結合）** の両方に存在し、**常に一致**させる必要がある。
- プリミティブ: `core/primitives.js` の各エントリが `glsl` 文字列と `js` 関数を持つ（単一ソース）。複合形状は共通ヘルパ（GLSL: `PRIM_HELPERS_GLSL` / JS: `b2/extr/box3/cylZ/jsL/jsU/jsH/jsTube/jsUTube/jsStairs/jsSpiral/jsHinge`）。
- シーン合成（min/max/smin/smax・配列折り返し・ボリュームサンプル）: GLSL=`render/raymarch.js`、JS=`core/sdfEval.js`。
- 検証は Node スクリプトで代表点の数値比較（ブラウザ自動テストは無し）。式を変えたら必ず両方直して Node で確認する。

---

## 3. ファイル別ガイド

| ファイル | 役割 |
|---|---|
| `src/main.js` | アプリ本体（~1100行）。レンダラ/カメラ(透視・正投影)/OrbitControls/TransformControls(ギズモ)/グリッド/ビューキューブ/選択(複数)/モーダル変形(G/R/S)/Undo/コピペ/配列UI/アウトライナ/プロパティ/タブ/ライティング/D&D/結合/保存。描画ループもここ。 |
| `src/render/raymarch.js` | **現行の**レイマーチ表示（CSGフラグメントシェーダのコード生成、GPU）。`RaymarchView` クラス。ボリュームは `uVol0..3`(sampler3D, 最大4)、オブジェクトは**データテクスチャ** `uObjTex`(12テクセル/行=実質無制限)。空間カリング/タイルカリング/低品質レンダ/テトラ法線もここ。 |
| `src/raymarch.js` | **レガシー（未使用）**。初期の単一ボリューム版。`main.js` は `render/raymarch.js` を使用。削除候補。 |
| `src/core/primitives.js` | プリミティブ定義（基本11種 kind 1-11 + エクストラ kind 12-20）。`PRIMITIVES`/`EXTRA_CATALOG`/`buildPrimitiveGLSL()`/`PRIM_BY_KIND`/`PRIM_BY_KEY`/`defaultParams`。各 kind は `{kindId,key,name,category,params,pack,bound,js,glsl}`。 |
| `src/core/sdfScene.js` | `SdfScene`/`SdfObject`。追加/削除/シリアライズ/ワールド境界/ボリュームテクスチャ生成/`objAABB`(カリング用)/`bakeReplace`(スカルプト)/`mergeToVolume`(結合)。 |
| `src/core/sdfEval.js` | JS版シーンSDF評価器 `makeEvaluator(desc,{hiDetail})`。MC・結合・ピッキングで使用。`objDistAt`(単一オブジェクト距離=ピッキングの面オーナー判定)。hiDetail時はBVHで真の距離。 |
| `src/core/constants.js` | `MAX_VOLUMES=4`, `MAX_OBJECTS=256`(シェーダループ天井), `OP`, `KIND_VOLUME=0`。 |
| `src/convert/convertGLB.js` | GLB→VolumeData（Z分割マルチワーカー、元メッシュ埋め込み）。 |
| `src/sdfWorker.js` | GLB→距離grid ワーカー（BVH最近点+パリティレイで符号、UV色サンプル）。 |
| `src/marchWorker.js` | Marching Cubes ワーカー（hiDetail, Z範囲）。 |
| `src/io/marchingCubes.js` | MC本体（標準テーブル + ストリーミング版 O(N²)）。 |
| `src/io/exportSTL.js` | STL生成（マルチワーカー `generateSceneMesh`/`planMesh`/`meshGeometryFromPositions`/`exportSTL`）。 |
| `src/io/sdfFile.js` | `.sdf`(単一ボリューム, magic `SDF1`)。 |
| `src/io/sdfmFile.js` | `.sdfm`(シーン, magic `SDFM`, ボリューム埋め込み)。 |
| `src/io/binFormat.js` | 共通バイナリコンテナ + `downloadArrayBuffer`。 |
| `src/sculpt.js` | スカルプト。`Sculpt` クラス。選択をボクセル化(bake)→ブラシ編集→テクスチャ再アップロード。 |
| `src/ui/sceneGrid.js` | 2段メートルグリッド。 |
| `src/loadGLB.js` | GLBローダ（変換器側）。 |
| `index.html` / `src/style.css` | UI（左:縦タブ、右:アウトライナ+プロパティ、下:ステータス）。Blender風ダークテーマ。 |

---

## 4. 主な機能と要点

### 表示（GPUレイマーチ）
- フルスクリーンクアッドのフラグメントシェーダでスフィアトレーシング。透視/正投影どちらもニア/ファー復元で正しいレイ。
- 合成: union=min, subtract=max(d,-di), intersect=max、smooth は多項式 smin/smax(`smoothK`)。
- 法線: **画面微分法**（`cross(dFdx(p),dFdy(p))`、向きは視線基準に補正）。旧テトラ法(sceneD 4回)は **Windows(ANGLE/D3D11)でFXCがprimitiveDistを6回インライン展開しシェーダコンパイルが約71秒→ブラウザごと固まる**ため廃止(Macは無症状)。代償でわずかな粒状ノイズ。歩幅に安全係数0.7（彫刻で非SDF化した場の穴防止）。退化勾配はNaN回避。詳細はメモリ `sdf-modeler-windows-freeze`。
- 表面色は **グローバル `uBaseColor`**（プリミティブ個別色は廃止）。ライティングは2灯+環境+スペキュラ+リム（プリセット5種）。
- **背景に注意**: `scene.background` は設定しない（autoClear と衝突してレイマーチが消える）。`renderer.setClearColor` + 手動 `clear`、`renderer.autoClear=false`。

### オブジェクト数の上限
- 旧: GLSL uniform 配列（固定サイズ）→ 8個で頭打ち。
- 現: **データテクスチャ** `uObjTex`（1オブジェクト=12テクセル: 0-3=逆行列, 4=色rgb+scale, 5/6=params, 7/8=配列, 9/10=AABB, 11=kind/volSlot/op/smoothK）。実質無制限（ループ天井 `MAX_OBJECTS=256`）。
- **ボリュームは最大4のまま**（GLSLのsampler配列は動的添字不可のため `uVol0..3` を if/else で切替）。

### 軽量化（重要）
レイマーチ負荷 ≒ ピクセル数 × ステップ数 × オブジェクト数。対策を多層で実装:
1. ~~**空間カリング**（`uCull`/`boxDistAABB`）~~: **撤去済み**。シェーダ内のtexelFetch+データ依存continueがFXCのコンパイルを更に膨張させ、機能はタイルカリングと重複していたため。タイルカリングのみ使用。
2. **タイル/クラスタ・カリング**（`uTileCull`, トグル「タイルカリング」）: 画面32pxタイルごとに、投影AABBが重なるオブジェクトのビットマスク（256bit/タイル=`RGBA32UI`整数テクスチャ `uTileMask`）をCPUで毎フレーム生成。シェーダは自タイルに無い union/subtract を一括スキップ（base/intersect は常時有効で順序維持）。
3. **操作中の低品質レイマーチ**: カメラ/ギズモ/スカルプト/モーダル中は `uMaxSteps` 減・`uMinStep` 拡大（`render(...,quality)` の `quality<1`）。静止で自動復帰。
4. **結合（ボリュームへベイク）**: モデリングタブの「統合」。Boolean結果を1ボリュームにベイクして毎ステップN評価→1テクスチャ参照に。再解像度化にも有効（※解析プリミティブ由来は高精細、既存ボリューム再ベイクは元解像度が上限）。

### モデリング操作
- ギズモ（TransformControls）+ Blender風 G/R/S（マウス追従・クリック確定）。5キーで透視/正投影、; でフィット、右上ビューキューブ。
- 複数選択（Shift追加 / Ctrl個別解除、3D・アウトライナ両方）。Undo/Redo(Cmd+Z)、コピペ(Cmd+C/V)。
- **クリック選択はSDF実表示面ベース**（CPUスフィアトレースでヒット→面オーナー=各オブジェクト距離最小を選択）。大きいバウンディングの誤選択を回避。
- アウトライナはドラッグで並べ替え（=Boolean順変更）。ファイルD&Dと切り分け（`dataTransfer.types` で判定）。
- 配列モディファイア（グリッドXYZ / 円形）。プリミティブ追加直後にサイズポップアップ（0.01〜100）。

### プリミティブ
- 基本(kind 1-11): 球/箱/角丸箱/円柱/カプセル/トーラス/平面/四角錐/三角錐/N角柱/スプリング(近似)。
- エクストラ(kind 12-20, `EXTRA_CATALOG`): H鋼/L字鋼・ブラケット・プレート/U字鋼・プレート/チューブ/U字チューブ/階段/螺旋階段/Icoスフィア(=球)/ヒンジ(クリックで左右2片)。同一kindを既定値違いで複数ボタン化（L/U系）。

### スカルプト（`sculpt.js`）
- 選択を `makeEvaluator` でワールドAABBにボクセル化→`bakeReplace` で置換。
- ブラシ: 盛り/削り（球スタンプの **hard union/subtract = 冪等で段差が出ない**, ドラッグ区間に補間スタンプ）/均し/移動。アルファ: 丸/四角/円錐。
- 操作: 左=彫刻 / Alt+左 or 中=回転 / 右=パン / ホイール=ズーム。Undoはストローク前グリッドのコピー（最大12）。

### 入出力
- `.sdf`(単一ボリューム) / `.sdfm`(シーン, ボリューム埋め込み) / STL書出（色なし、物理mm単位、自動ボクセル）。
- `.sdf` 保存はボリューム選択時はそれを、未選択時は**シーン（または選択）をその場でベイク**して保存。

---

## 5. 既知の制約・注意点

- **GLSL/JS の式は二重実装**。片方だけ直すと表示とメッシュ/選択がズレる。Nodeで一致確認すること。
- **ボリュームは最大4**（sampler制約）。プリミティブは無制限。
- **非一様スケール**: プリミティブは寸法paramsで厳密、ボリュームは最小軸スケールで距離補正（一様前提、非一様は近似）。
- **スプリングSDFは近似**（レイマーチの歩幅/法線に軽微な誤差）。
- **スカルプト/結合のベイクはパラメトリック性を失う**。Undoのみで復帰。再ベイクの精細さは元データ依存。
- **階段/螺旋はシェーダ内ループ**（最大24/48）。多段は重い。結合でボリューム化推奨。
- **整数テクスチャ（タイルカリング）はやや新しめのGPU機能**。表示不具合時はトグルでオフ可。
- `src/raymarch.js` は**レガシー未使用**（`src/render/raymarch.js` が現行）。
- **ブラウザ自動テストは無し**。検証は Node 単体テスト（一時 `.mjs` を書いて実行→削除）＋手動。

---

## 6. よくある変更レシピ

- **プリミティブ追加**: `core/primitives.js` に `{kindId,key,name,category,params,pack,bound,js,glsl}` を追加（複合形状は GLSL/JS ヘルパを両方に）。エクストラなら `EXTRA_CATALOG` にもボタン定義。Node で js↔glsl 数値一致を確認。
- **シェーダ合成の変更**: `render/raymarch.js` と `core/sdfEval.js` の両方を必ず同期。
- **uniform/関数追加後**: ハードリロード必須。
- **重い**: 「結合」でベイク、または空間/タイルカリングのオン確認、オブジェクト/段数を減らす。

---

## 7. 次の改善候補（未実装）
- **フロクセル化（3Dタイル）**: タイルカリングを奥行きにも拡張。
- **プログレッシブ・リファインメント**: 静止後に高品質へ蓄積。
- **インターバル演算による式の刈り込み（真の#4）**: テープVM/領域別シェーダ生成が必要で大規模・高リスク（見送り中）。
- **スパース・ボリューム化**（狭帯）でベイクのメモリ削減。
- レガシー `src/raymarch.js` の削除。

---

## 8. メモリ（assistant用）
プロジェクトの恒久メモは `~/.claude/.../memory/sdf-modeler-project.md`。設計判断・検証事実はそこにも反映する。
