import { generateRandomArray } from '@/src/utils/array.util';
import heapSort from '@/src/base/heapSort';

test('heapSort', () => {
  const ramdomArr = generateRandomArray(10);
  const sortArr = ramdomArr.slice().sort((prev, cur) => prev - cur);
  const heapSortArr = heapSort(ramdomArr.slice());
  console.log(heapSortArr);
  expect(heapSortArr).toEqual(sortArr);
});
