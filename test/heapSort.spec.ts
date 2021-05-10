import { generateRandomArray } from '@/utils/array.util';
import heapSort from '@/base/heapSort';

test('heapSort', () => {
  const ramdomArr = generateRandomArray(10);
  const sortArr = ramdomArr.slice().sort((prev, cur) => prev - cur);
  const heapSortArr = heapSort(ramdomArr.slice());
  console.log(heapSortArr);
  expect(heapSortArr).toEqual(sortArr);
});
