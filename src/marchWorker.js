import { makeEvaluator } from './core/sdfEval.js';
import { marchingCubesStreaming } from './io/marchingCubes.js';

self.onmessage = (e) => {
  const { dims, min, max, sceneDesc, hiDetail, zStart, zEnd } = e.data;
  const f = makeEvaluator(sceneDesc, { hiDetail: !!hiDetail });
  // 担当する Z 範囲だけ処理(並列実行用)。継ぎ目はセル単位なので結合可能。
  const positions = marchingCubesStreaming(dims, min, max, f, 0, (p) => {
    self.postMessage({ type: 'progress', value: p });
  }, zStart ?? 0, zEnd ?? dims[2]);
  self.postMessage({ type: 'done', positions, triangles: positions.length / 9 }, [positions.buffer]);
};
