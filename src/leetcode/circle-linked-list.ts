/*
  环形链表
  给你一个链表的头节点 head ，判断链表中是否有环。
  https://leetcode-cn.com/leetbook/read/top-interview-questions/xaazns/

 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
*/

interface ListNode {
  val: any;
  next: ListNode;
}

export default function checkIsCircleLinkedList(listNode: ListNode): boolean {
  let currentNode = listNode;
  let nextNode = listNode?.next?.next;
  while (currentNode && nextNode) {
    if (currentNode === nextNode) {
      return true;
    } else {
      currentNode = currentNode.next;
      nextNode = nextNode?.next?.next;
    }
  }
  return false;
}
