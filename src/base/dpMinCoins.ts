/**
 *  动态规划解决最少硬币找零问题
 */
export default class DpMinCoins {
  private coins: number[] = [];
  // 缓存各种余额的最优解
  private cache: any = {};
  constructor(coins: number[]) {
    this.coins = coins;
  }

  // 返回最少硬币列表
  makeChange(amount: number): number[] {
    const { cache, coins } = this;

    if (amount < 0) {
      return [];
    }
    // 利用缓存减少计算是动态规划的核心之一，如果没有这步，就跟穷举没有什么区别。
    if (cache[amount] !== undefined) {
      return cache[amount];
    }

    // 最少硬币列表
    let minCoins: number[] = [];
    // 缓存同一amount的不同找零的硬币列表
    let newMinCoins: number[] = [];

    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      const newAmount = amount - coin;
      if (newAmount >= 0) {
        newMinCoins = this.makeChange(newAmount);
      }
      // 符合条件会更新最少硬币列表
      if (newAmount >= 0 && (newMinCoins.length < minCoins.length - 1 || !minCoins.length)) {
        minCoins = [coin, ...newMinCoins];
      }
    }
    // 缓存结果
    cache[amount] = minCoins;
    return minCoins;
  }
}
