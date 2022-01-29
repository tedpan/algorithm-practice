import isPalindrome from '@/leetcode/palindrome';

test('isPalindrome', () => {
  expect(isPalindrome('a,,,bc,,b.?a')).toEqual(true);
  expect(isPalindrome('mkgsegfse')).toEqual(false);
});
