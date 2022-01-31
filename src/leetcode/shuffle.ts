/*
  打乱数组
  给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。打乱后，数组的所有排列应该是等可能的。

  实现 Solution class:

  Solution(int[] nums) 使用整数数组 nums 初始化对象
  int[] reset() 重设数组到它的初始状态并返回
  int[] shuffle() 返回数组随机打乱后的结果

  作者：力扣 (LeetCode)
  链接：https://leetcode-cn.com/leetbook/read/top-interview-questions/xmchc3/
  来源：力扣（LeetCode）
  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
import { shuffle } from '@/utils/array.util';

export default class Solution {
  private backupArr: number[] = [];
  private shuffleArr: number[] = [];

  constructor(arr: number[]) {
    this.backupArr = [...arr];
    this.shuffleArr = [...arr];
  }
  reset() {
    return this.backupArr;
  }
  shuffle() {
    return shuffle(this.shuffleArr);
  }
}
