/**
 *
 *  动态规划解决01背包问题
 *  使用矩阵（二维数组），通过比较 （该容量-物品重量 的最优方案 + 剩余容量 的最优方案） 和 （该容量目前的最优方案），从而获得最优解。
 *
 * @export
 * @param {number[]} values 物品价值列表
 * @param {number[]} weights 物品重量列表
 * @param {number} capacity 背包容量
 * @return {*}  {number}
 */
export default function dpKnapsack(values: number[], weights: number[], capacity: number): number {
  // 构建矩阵，每行为不容容量对同一物品的最优解
  const knapsack: number[][] = [...Array(values.length + 1)].map(() => []);
  for (let itemIndex = 0; itemIndex <= values.length; itemIndex++) {
    for (let weight = 0; weight <= capacity; weight++) {
      if (itemIndex === 0 || weight === 0) {
        // 首行首列为0，因为要获取剩余重量为0的最优方案 和 容量的上一次最优方案
        knapsack[itemIndex][weight] = 0;
      } else if (weight >= weights[itemIndex - 1]) {
        // 该容量-物品重量 的最优方案 + 剩余容量 的最优方案
        const maxValue1 =
          values[itemIndex - 1] + knapsack[itemIndex - 1][weight - weights[itemIndex - 1]];
        // 该容量目前的最优方案
        const maxValue2 = knapsack[itemIndex - 1][weight];
        const maxValue = maxValue1 > maxValue2 ? maxValue1 : maxValue2;
        knapsack[itemIndex][weight] = maxValue;
      } else {
        // 否则取该容量目前的最优方案
        knapsack[itemIndex][weight] = knapsack[itemIndex - 1][weight];
      }
    }
  }

  return knapsack[values.length][capacity];
}
