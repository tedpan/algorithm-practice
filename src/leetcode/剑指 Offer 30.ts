/*
定义栈的数据结构，
请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
调用 min、push 及 pop 的时间复杂度都是 O(1)。

示例:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MinStack {
  minStack: number[];
  stack: number[];
  constructor() {
    this.minStack = [];
    this.stack = [];
  }

  push(x: number): void {
    this.stack.push(x);
    const currentMin = this.minStack[this.minStack.length - 1];
    if (currentMin === undefined || x <= currentMin) {
      this.minStack.push(x);
    }
  }

  pop(): void {
    const currentMin = this.minStack[this.minStack.length - 1];
    if (currentMin === this.stack.pop()) {
      this.minStack.pop();
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  min(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
