import { generateRandomArray } from '@/utils/array.util';
import insertionSort from '@/base/insertionSort';

test('insertionSort', () => {
  const ramdomArr = generateRandomArray(10);
  const sortArr = ramdomArr.slice().sort((prev, cur) => prev - cur);
  const insertionSortArr = insertionSort(ramdomArr.slice());
  expect(insertionSortArr).toEqual(sortArr);
});
