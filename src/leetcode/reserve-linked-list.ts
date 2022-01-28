/*
  反转链表
  给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
  https://leetcode-cn.com/leetbook/read/top-interview-questions/xavip3/
*/

interface ListNode {
  val: any;
  next: ListNode;
}

export default function reserveLinkedList(listNode: ListNode): ListNode {
  let prevNode: ListNode = null;
  let currentNode = listNode;
  while (currentNode) {
    const nextCurrentNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextCurrentNode;
  }
  return prevNode;
}
