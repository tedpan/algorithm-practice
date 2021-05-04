import { generateRandomArray } from '@/src/utils/array.util';
import insertionSort from '@/src/base/insertionSort';

test('insertionSort', () => {
  const ramdomArr = generateRandomArray(10);
  const sortArr = ramdomArr.slice().sort((prev, cur) => prev - cur);
  const insertionSortArr = insertionSort(ramdomArr.slice());
  expect(insertionSortArr).toEqual(sortArr);
});
