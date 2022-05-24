import { swap } from '../utils/array.util';

/**
 * 快速排序
 *  1.设置主元（一般为中点）
 *  2.左右两端设置指针，向主元移动。
 *  3.左指针遇到比主元大的值停止移动，右指针反之。若都遇到了对应的值，则交换对应的值。
 *  4.当左指针超过右指针时，将左指针的坐标返回，作下一步的排序。
 * 时间复杂度 O(nlogn)
 */
export default function quickSort<T>(arr: T[]): T[] {
  if (arr.length > 1) {
    quick(arr, 0, arr.length - 1);
  }
  return arr;
}

function quick<T>(arr: T[], leftIndex: number, rightIndex: number): void {
  if (leftIndex >= rightIndex) {
    return;
  }
  const index = partition(arr, leftIndex, rightIndex);
  quick(arr, leftIndex, index - 1);
  quick(arr, index, rightIndex);
}

function partition<T>(arr: T[], leftIndex: number, rightIndex: number): number {
  const pivotValue = arr[Math.floor((leftIndex + rightIndex) / 2)];
  let l = leftIndex;
  let r = rightIndex;
  while (l <= r) {
    while (arr[l] < pivotValue) {
      l++;
    }
    while (arr[r] > pivotValue) {
      r--;
    }
    if (l <= r) {
      swap(arr, l, r);
      l++;
      r--;
    }
  }
  return l;
}
