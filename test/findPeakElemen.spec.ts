import findPeakElement from '@/leetcode/findPeakElement';

test('findPeakElement', () => {
  expect(findPeakElement([1, 2, 3, 1])).toEqual(2);
  const anotherTestValue = findPeakElement([1, 2, 1, 3, 5, 6, 4]);
  expect(anotherTestValue === 1 || anotherTestValue === 5).toBeTruthy();
});
