/** 生成一个从1开始递增 长度为length的数组 */
export function generateArray(length: number): number[] {
  return [...Array(length)].map((_item, index) => index + 1);
}

/** 洗牌函数，打乱数组 */
export function shuffle<T>(arr: T[]): T[] {
  for (let index = 0; index < arr.length - 1; index++) {
    // 每一项 跟 余下数组范围 [index+1,arr.length-1] 中随机一项交换位置
    const randomIndex = Math.floor(Math.random() * (arr.length - index - 1) + index + 1);
    swap(arr, index, randomIndex);
  }
  return arr;
}

/** 交换数组两项的位置 */
export function swap(arr: any[], index1: number, index2: number) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

export function generateRandomArray(length: number) {
  return shuffle(generateArray(length));
}
