/**
 *  贪心算法处理分数背包问题
 *  动态规划不适合处理（处理不了）分数背包问题
 */
export default function greedyKnapsack(
  values: number[],
  weights: number[],
  capacity: number,
): number {
  // 贪心算法的一般思路是装得越多，价值越大，所以先装质量小的。
  // 这里优化一下，按价值质量比排序。
  const valueRatioSortedKnapsack = weights
    .map((w, index) => {
      return {
        value: values[index],
        weight: w,
        valueRatio: values[index] / w,
      };
    })
    .sort((prev, cur) => cur.valueRatio - prev.valueRatio);
  let load = 0;
  let loadValue = 0;
  for (let i = 0; i < valueRatioSortedKnapsack.length; i++) {
    const { weight, value } = valueRatioSortedKnapsack[i];
    if (capacity - load - weight >= 0) {
      load += weight;
      loadValue += value;
    } else {
      const ratio = (capacity - load) / weight;
      load += weight * ratio;
      loadValue += value * ratio;
      // 填满了，可以退出
      break;
    }
  }
  return loadValue;
}
