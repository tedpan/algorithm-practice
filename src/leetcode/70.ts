/*
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

示例 1：

输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
示例 2：

输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶

提示：

1 <= n <= 45

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/climbing-stairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

// 思路是，登上n层台阶的最后一步只能是一步或两步，即登上n-1和n-2层台阶的方式总和。
const cache: { [key: number]: number } = {};
export function climb(n: number): number {
  // 对输入值进行合法性校验
  if (n < 1 || n > Number.MAX_SAFE_INTEGER) {
    throw new Error('invalid input!');
  }
  if (n < 3) {
    return n;
  }
  // 不加缓存的话，性能很糟糕
  if (cache[n] !== undefined) {
    return cache[n];
  }
  const cacheValue = climb(n - 1) + climb(n - 2);
  cache[n] = cacheValue;
  return cacheValue;
}
