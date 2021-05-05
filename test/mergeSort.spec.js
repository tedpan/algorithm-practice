import { generateRandomArray } from '@/src/utils/array.util';
import mergeSort from '@/src/base/mergeSort';

test('mergeSort', () => {
  const ramdomArr = generateRandomArray(10);
  console.log(ramdomArr);
  const sortArr = ramdomArr.slice().sort((prev, cur) => prev - cur);
  const mergeSortArr = mergeSort(ramdomArr.slice());
  console.log(mergeSortArr);
  expect(mergeSortArr).toEqual(sortArr);
});
