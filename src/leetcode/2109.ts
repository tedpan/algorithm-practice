/*
给你一个下标从 0 开始的字符串 s ，以及一个下标从 0 开始的整数数组 spaces 。

数组 spaces 描述原字符串中需要添加空格的下标。每个空格都应该插入到给定索引处的字符值 之前 。

例如，s = "EnjoyYourCoffee" 且 spaces = [5, 9] ，那么我们需要在 'Y' 和 'C' 之前添加空格，这两个字符分别位于下标 5 和下标 9 。因此，最终得到 "Enjoy Your Coffee" 。
请你添加空格，并返回修改后的字符串。

示例 1：

输入：s = "LeetcodeHelpsMeLearn", spaces = [8,13,15]
输出："Leetcode Helps Me Learn"
解释：
下标 8、13 和 15 对应 "LeetcodeHelpsMeLearn" 中加粗斜体字符。
接着在这些字符前添加空格。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/adding-spaces-to-a-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// 解法1：leetcode报超时，只能优化下时间复杂度了，应该是移动数组项造成的。
export function addSpaces(s: string, spaces: number[]) {
  let res = '';
  let currentSpaceIdx = spaces.shift();
  for (let i = 0; i < s.length; i++) {
    if (i === currentSpaceIdx) {
      res += ` ${s[i]}`;
      currentSpaceIdx = spaces.shift();
    } else {
      res += s[i];
    }
  }
  return res;
}

// 解法2：
export function addSpaces2(s: string, spaces: number[]) {
  let res = '';
  let currentIdx = 0;
  let currentSpaceIdx = spaces[currentIdx];
  for (let i = 0; i < s.length; i++) {
    if (i === currentSpaceIdx) {
      res += ` ${s[i]}`;
      currentSpaceIdx = spaces[++currentIdx];
    } else {
      res += s[i];
    }
  }
  return res;
}
