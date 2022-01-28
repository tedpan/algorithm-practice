import reserveLinkedList from '@/leetcode/reserve-linked-list';

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

test('reserveLinkedList', () => {
  const reservedLinkedList = reserveLinkedList(headNode);
  expect(reservedLinkedList.next.val).toEqual(3);
});
