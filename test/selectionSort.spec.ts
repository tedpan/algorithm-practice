import { generateRandomArray } from '@/utils/array.util';
import selectionSort from '@/base/selectionSort';

test('selectionSort', () => {
  const ramdomArr = generateRandomArray(10);
  const sortArr = ramdomArr.slice().sort((prev, cur) => prev - cur);
  const selectionSortArr = selectionSort(ramdomArr.slice());
  expect(selectionSortArr).toEqual(sortArr);
});
