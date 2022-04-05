/*
  用两个栈实现一个队列。
  队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
  分别完成在队列尾部插入整数和在队列头部删除整数的功能。
  (若队列中没有元素，deleteHead 操作返回 -1 )

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class CQueue {
  stack: number[];
  stackTemp: number[];

  constructor() {
    this.stack = [];
    this.stackTemp = [];
  }

  appendTail(value: number): void {
    while (this.stack.length) {
      const val = this.stack.pop();
      this.stackTemp.push(val);
    }
    this.stack = [value];
    while (this.stackTemp.length) {
      const val = this.stackTemp.pop();
      this.stack.push(val);
    }
  }

  deleteHead(): number {
    if (!this.stack.length) {
      return -1;
    }
    return this.stack.pop();
  }
}
