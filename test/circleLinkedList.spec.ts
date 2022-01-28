import checkIsCircleLinkedList from '@/leetcode/circle-linked-list';

const tailNode: any = {
  val: 4,
  next: null,
};

const thridNode = {
  val: 3,
  next: tailNode,
};

const secondNode = {
  val: 2,
  next: thridNode,
};

const headNode = {
  val: 1,
  next: secondNode,
};

test('checkIsCircleLinkedList', () => {
  tailNode.next = secondNode;
  const isCircleLinkedList = checkIsCircleLinkedList(headNode);
  expect(isCircleLinkedList).toEqual(true);
  tailNode.next = null;
  const isCircleLinkedList2 = checkIsCircleLinkedList(headNode);
  expect(isCircleLinkedList2).toEqual(false);
});
