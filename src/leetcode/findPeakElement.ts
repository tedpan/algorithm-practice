/*
  寻找峰值
  峰值元素是指其值严格大于左右相邻值的元素。

  给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

  你可以假设 nums[-1] = nums[n] = -∞ 。

  你必须实现时间复杂度为 O(log n) 的算法来解决此问题。

  作者：力扣 (LeetCode)
  链接：https://leetcode-cn.com/leetbook/read/top-interview-questions/xacqw5/
  来源：力扣（LeetCode）
  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


  思路：爬坡法 - 设左右指针l、r,其中点m，如果m+1比它矮则证明l到m之间存在峰值，如果m+1比m高，则证明m-1到r之间有峰值，然后进一步压缩范围。。。
*/

export default function findPeakElement(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
