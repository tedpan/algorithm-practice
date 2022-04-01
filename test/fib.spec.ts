import { fib, fib2 } from '@/leetcode/剑指 Offer 10';

test('selectionSort', () => {
  expect(fib(2)).toEqual(1);
  expect(fib(20)).toEqual(6765);
  expect(fib2(2)).toEqual(1);
  expect(fib2(20)).toEqual(6765);
});
