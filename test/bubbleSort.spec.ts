import { generateRandomArray } from '@/utils/array.util';
import bubbleSort from '@/base/bubbleSort';

test('bubbleSort', () => {
  const ramdomArr = generateRandomArray(10);
  const sortArr = ramdomArr.slice().sort((prev, cur) => prev - cur);
  const bubbleSortArr = bubbleSort(ramdomArr.slice());
  expect(bubbleSortArr).toEqual(sortArr);
});
