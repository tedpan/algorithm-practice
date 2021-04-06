import { swap, generateRandomArray } from '../utils/array.util';

/**
 * 选择排序
 * 遍历每个位置，为每个位置选择符合条件的项
 * 时间复杂度 O(n2)
 */
export default function selectionSort<T>(arr: T[]): T[] {
  const len = arr.length;
  // 位置
  for (let pos = 0; pos < len - 1; pos++) {
    let suitableIndex = pos;
    // 在当前位置后比较所有项
    for (let index = pos + 1; index < len; index++) {
      // 排序条件
      if (arr[index] < arr[suitableIndex]) {
        suitableIndex = index;
      }
    }
    if (pos !== suitableIndex) {
      swap(arr, pos, suitableIndex);
    }
  }
  return arr;
}

function test() {
  const ramdomArr = generateRandomArray(10);
  console.log('randamArr:', ramdomArr);
  const sortArr = selectionSort(ramdomArr);
  console.log('sortArr:', sortArr);
}

test();
