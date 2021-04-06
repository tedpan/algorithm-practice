import { swap, generateRandomArray } from '../utils/array.util';

/**
 * 冒泡排序
 * 比较相邻两项，如果符合比较条件则交换位置
 * 时间复杂度 O(n2)
 */
export default function bubbleSort<T>(arr: T[]): T[] {
  const len = arr.length;
  // 执行次数
  for (let time = 0; time < len; time++) {
    // 比较相邻两项, 跳过已经排序的项
    for (let index = 0; index < len - 1 - time; index++) {
      // 排序条件
      if (arr[index] < arr[index + 1]) {
        swap(arr, index, index + 1);
      }
    }
  }
  return arr;
}

function test() {
  const ramdomArr = generateRandomArray(10);
  console.log('randamArr:', ramdomArr);
  const sortArr = bubbleSort(ramdomArr);
  console.log('sortArr:', sortArr);
}

test();
