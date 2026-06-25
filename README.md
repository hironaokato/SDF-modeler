# SDF Modeler

スキャン(GLB)を SDF 化し、ブラウザ上で **複数SDF + プリミティブを Boolean 合成する簡易モデラー**。
変換・モデリング・STL書き出しまでブラウザ完結（サーバー不要）。

## ワークフロー（変換とモデリングは分離）

1. **変換**: GLB をドロップ → SDF 化 → 「選択ボリューム保存 (.sdf)」で書き出し
2. **モデリング**: `.sdf` を（複数）ロード → ギズモで配置 → プリミティブ追加 → Boolean
3. **保存**: 「シーン保存 (.sdfm)」（SDFのみ埋め込み・自己完結）→ 後で読込んで再開
4. **書き出し**: 「STL 書き出し」（Marching Cubes でメッシュ化・色なし）

## 機能

- 取り込み: `.glb/.gltf`(変換) / `.sdf`(ボリューム追加・再変換不要) / `.sdfm`(シーン復元)
- 複数ボリューム(最大4)＋プリミティブ(合計16オブジェクト)を CSG
- プリミティブ: 球 / 箱 / 角丸箱 / 円柱 / カプセル / トーラス / 平面 / 四角錐 / 三角錐 / N角柱 / スプリング(近似)
- Boolean: 合体 / 削る / 交差（+スムーズ smin/smax）
- ギズモ(移動 W / 回転 E / 拡大 R)、ビューポート/リストから選択、Deleteで削除
- 現実スケールの2段グリッド(セル幅をmで指定)＋軸
- カラー(テクスチャ転写)ボリュームの表示 ON/OFF

## 使い方

```bash
npm install
npm run dev      # 開発サーバー
npm run build    # dist/ に静的出力
```

mac は `start.command` をダブルクリックでも起動可。

## 構成

```
src/main.js              アプリ統合(描画ループ/D&D/ギズモ/UI)
src/core/
  constants.js           上限(MAX_VOLUMES=4, MAX_OBJECTS=16)
  primitives.js          プリミティブSDF(GLSL/JS 単一ソース)
  sdfScene.js            シーン(オブジェクト/スロット/AABB/シリアライズ)
  sdfEval.js             JS版シーンSDF(Marching Cubes用・GLSLと同一合成)
src/render/raymarch.js   CSGレイマーチ(複数ボリューム+プリミティブ+Boolean)
src/io/
  binFormat.js           バイナリコンテナ
  sdfFile.js / sdfmFile.js  .sdf / .sdfm 入出力
  marchingCubes.js       MCテーブル+メッシャ
  exportSTL.js           MCワーカー起動 + STLExporter
src/convert/convertGLB.js  GLB→SDF(既存 sdfWorker を使用)
src/sdfWorker.js         GLB→距離グリッド+色転写(変換ワーカー)
src/marchWorker.js       Marching Cubes ワーカー
src/loadGLB.js           GLB読込/メッシュ統合/テクスチャ画素化
src/ui/sceneGrid.js      現実スケールグリッド
```

## 既知の制約

- ボリュームは最大4、合計オブジェクト16（GLSLのsampler動的添字制約のため）。`src/core/constants.js` で調整可。
- 非一様スケール: プリミティブ寸法はパラメータで厳密。距離補正は安全側に最小スケールを使うため、非一様時は近似。
- スプリングは近似SDF。tetra/pyramid も近似（モデリング用途では十分）。
- STL は形状のみ（色なし・仕様確定）。
- GLSL と JS の SDF式は二重実装＝同期必須（プリミティブ値・MC再構成を Node でテスト済）。
```
