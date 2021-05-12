/**
 * 贪心算法处理最少硬币找零
 * 1、将问题拆分成多个独立的子问题，求各个子问题当前最优解（局部最优解），再合并成最终解。
 * 2、相比动态规划，贪心算法用更低的时间、空间复杂度得到一个不错的解（不一定是整体的最优解）。
 */
export default function greedyMinCoins(amount: number, coins: number[]): number[] {
  const minCoins: number[] = [];
  // 优先选面额大的币值
  for (let i = coins.length - 1; i >= 0; i--) {
    const coin = coins[i];
    while (amount - coin >= 0) {
      minCoins.push(coin);
      amount -= coin;
    }
  }
  return minCoins;
}
