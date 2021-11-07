/**
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 */

import { ListNode } from '../dataStructures'

export const middleNode = (head: ListNode | null): ListNode | null => {
  if (head === null) {
    return null
  }
  let currentMiddleNode = head
  let currentNode = head
  let cnt = 0
  while (currentNode.next) {
    currentNode = currentNode.next
    cnt++
    if (cnt % 2 !== 0) {
      currentMiddleNode = currentMiddleNode.next
    }
  }
  return currentMiddleNode
}
