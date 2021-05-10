import { generateRandomArray } from '@/utils/array.util';
import quickSort from '@/base/quickSort';

test('quickSort', () => {
  const ramdomArr = generateRandomArray(10);
  const sortArr = ramdomArr.slice().sort((prev, cur) => prev - cur);
  const quickSortArr = quickSort(ramdomArr.slice());
  console.log(ramdomArr);
  console.log(quickSortArr);
  expect(quickSortArr).toEqual(sortArr);
});
