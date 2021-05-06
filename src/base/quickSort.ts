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
  return quick(arr, 0, arr.length - 1);
}

function quick<T>(arr: T[], leftIndex: number, rightIndex: number): T[] {
  if (arr.length > 1) {
    const index = partition(arr, leftIndex, rightIndex);
    if (leftIndex < index - 1) {
      quick(arr, leftIndex, index - 1);
    }
    if (rightIndex > index) {
      quick(arr, index, rightIndex);
    }
  }
  return arr;
}

function partition<T>(arr: T[], leftIndex: number, rightIndex: number): number {
  const middleValue = arr[Math.floor((leftIndex + rightIndex) / 2)];
  while (leftIndex <= rightIndex) {
    while (arr[leftIndex] < middleValue) {
      leftIndex++;
    }
    while (arr[rightIndex] > middleValue) {
      rightIndex--;
    }
    if (leftIndex <= rightIndex) {
      swap(arr, leftIndex, rightIndex);
      leftIndex++;
      rightIndex--;
    }
  }
  return leftIndex;
}
