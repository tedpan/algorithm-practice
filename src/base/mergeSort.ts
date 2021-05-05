/**
 * 归并排序
 * 将整体分解拆分项，再按排序规格排序、合并
 * 时间复杂度 O(nlogn)
 */
export default function mergeSort<T>(arr: T[]): T[] {
  if (arr.length === 1) {
    return arr;
  }
  // 拆分
  const spliceIndex = Math.floor(arr.length - 1 / 2);
  const leftPart = arr.slice(0, spliceIndex);
  const rigthPart = arr.slice(spliceIndex, arr.length);
  // 排序、合并
  return merge(mergeSort(leftPart), mergeSort(rigthPart));
}

function merge<T>(leftArr: T[], rightArr: T[]): T[] {
  const result: T[] = [];
  while (leftArr.length && rightArr.length) {
    // 排序规则
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift() as T);
    } else {
      result.push(rightArr.shift() as T);
    }
  }

  // 将剩余的项并入结果
  while (leftArr.length) {
    result.push(leftArr.shift() as T);
  }

  while (rightArr.length) {
    result.push(rightArr.shift() as T);
  }

  return result;
}
