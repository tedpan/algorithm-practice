/*
写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

F(0) = 0, F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

const cache: { [key: number]: number } = {};
export function fib(num: number): number {
  // 对输入值进行合法性校验
  if (num < 0 || num > Number.MAX_SAFE_INTEGER) {
    throw new Error('invalid input!');
  }
  // 不加缓存的话，性能很糟糕
  if (cache[num] !== undefined) {
    return cache[num];
  }
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  const cacheValue = fib(num - 1) + fib(num - 2);
  cache[num] = cacheValue;
  return cacheValue;
}

export function fib2(num: number): number {
  // 对输入值进行合法性校验
  if (num < 0 || num > Number.MAX_SAFE_INTEGER) {
    throw new Error('invalid input!');
  }
  const tempArr = [0, 1];
  if (num === 0 || num === 1) {
    return tempArr[num];
  }
  for (let i = 1; i < num; i++) {
    tempArr[i + 1] = tempArr[i] + tempArr[i - 1];
  }
  return tempArr[num];
}
