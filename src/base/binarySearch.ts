/**
 *  二分搜索
 *  前提：数组已排序
 */
export default function binarySearch(arr: any[], item: any) {
  const index = -1;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const currentItem = arr[mid];
    if (item > currentItem) {
      low = mid + 1;
    } else if (item < currentItem) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return index;
}
