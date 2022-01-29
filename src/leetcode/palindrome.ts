/*
验证回文串
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
https://leetcode-cn.com/leetbook/read/top-interview-questions/xah8k6/
*/

export default function isPalindrome(str: string): boolean {
  // 去掉冗余的字符
  const formatStr = str.replace(/[^\da-zA-Z]/g, '').toLowerCase();
  const len = formatStr.length;
  if (len < 2) {
    return true;
  }
  // 从中间开始校验
  const isEven = len % 2 === 0;
  const middleIdx = Math.floor(len / 2);
  let prevIdx = middleIdx - 1;
  let nextIdx = isEven ? middleIdx : middleIdx + 1;
  for (; nextIdx < len; nextIdx++) {
    if (formatStr[prevIdx] !== formatStr[nextIdx]) {
      return false;
    }
    prevIdx--;
  }
  return true;
}
