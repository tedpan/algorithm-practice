/**
 * 堆排序
 * 依次对数组前n、n-1、n-2... 堆化（下面例子写的是最大堆，实际按排序规则堆化），每次堆化后的首项放到数组后方。
 * 时间复杂度 O(nlogn)
 */
import { swap } from '../utils/array.util';

export default function heapSort<T>(arr: T[]): T[] {
  buildHeap(arr);

  let heapSize = arr.length;
  while (heapSize > 1) {
    heapSize--;
    swap(arr, 0, heapSize);
    // 交换首项后，需要重新对其子树堆化
    heapify(arr, heapSize, 0);
  }
  return arr;
}

function buildHeap(arr: any[]) {
  const heapSize = arr.length;
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    heapify(arr, heapSize, i);
  }
}

// （最大）堆化
function heapify(arr: any[], heapSize: number, i: number) {
  const leftIndex = 2 * i + 1;
  const rightIndex = 2 * i + 2;
  let largestIndex = i;
  if (leftIndex < heapSize && arr[leftIndex] > arr[largestIndex]) {
    largestIndex = leftIndex;
  }
  if (rightIndex < heapSize && arr[rightIndex] > arr[largestIndex]) {
    largestIndex = rightIndex;
  }
  if (largestIndex !== i) {
    swap(arr, largestIndex, i);
    // 交换后需要重新对子树堆化
    heapify(arr, heapSize, largestIndex);
  }
}
