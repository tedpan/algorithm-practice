/**
 * 插入排序
 * 逐项按排序规则插入
 * 时间复杂度 O(n2)
 */
export default function insertionSort<T>(arr: T[]): T[] {
  const len = arr.length;
  // 从第二项逐项进行插入
  for (let index = 1; index < len; index++) {
    const valueTemp = arr[index];
    let indexTemp = index;
    while (indexTemp !== 0 && valueTemp < arr[indexTemp - 1]) {
      // 向后移动
      arr[indexTemp] = arr[indexTemp - 1];
      indexTemp--;
    }
    if (indexTemp !== index) {
      arr[indexTemp] = valueTemp;
    }
  }
  return arr;
}
