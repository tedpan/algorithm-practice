interface Node {
  element: string;
  next: Node | null;
}

/**
 * 反转链表
 */
export default function reverseLinkedList(head: Node): Node {
  let prev = null;
  let cur: Node | null = head;
  while (cur) {
    const temp: Node | null = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return head;
}
