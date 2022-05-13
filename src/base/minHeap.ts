// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MinHeap {
  heap: number[];
  constructor(buildHeap: number[]) {
    this.heap = buildHeap;
    this.build();
  }

  build() {
    // 从下到上逐层，向下堆化，start取值可排除叶子节点。
    for (let start = Math.floor(this.size() / 2); start >= 0; start--) {
      this.heapDown(start);
    }
  }

  // 向下堆化，在替换节点时，
  heapDown(start: number) {
    const leftIdx = Math.pow(2, start) + 1;
    const rightIdx = Math.pow(2, start) + 2;
    let minIdx = start;
    if (this.heap[leftIdx] && this.heap[start] > this.heap[leftIdx]) {
      minIdx = leftIdx;
    }
    if (this.heap[rightIdx] && this.heap[start] > this.heap[rightIdx]) {
      minIdx = rightIdx;
    }
    if (start !== minIdx) {
      this.swap(start, minIdx);
      // 交换后需要重新堆化
      this.heapDown(minIdx);
    }
  }

  // 向上堆化，一般在插入操作后。
  heapUp(start: number) {
    // 与根节点换完后return
    if (start === 0) {
      return;
    }
    const parentIdx = Math.floor(Math.log2(start - 1));
    if (this.heap[start] < this.heap[parentIdx]) {
      this.swap(start, parentIdx);
      this.heapUp(parentIdx);
    }
  }

  swap(leftIdx: number, rightIdx: number) {
    [this.heap[leftIdx], this.heap[rightIdx]] = [this.heap[rightIdx], this.heap[leftIdx]];
  }

  insert(val: number) {
    this.heap.push(val);
    this.heapUp(this.heap.length - 1);
  }

  pop() {
    this.heap[0] = this.heap.pop();
    this.heapDown(0);
  }

  size() {
    return this.heap.length;
  }

  top() {
    return this.heap[0];
  }
}
