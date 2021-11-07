import { ListNode } from '../dataStructures'

export const removeNthFromEnd = (
  head: ListNode | null,
  n: number
): ListNode | null => {
  if (head === null) {
    return null
  }
  let currentNode: ListNode = head
  let nMinus1thFromEndNode: ListNode = null
  let cnt = 0
  while (currentNode.next) {
    currentNode = currentNode.next
    cnt++
    if (cnt >= n) {
      if (nMinus1thFromEndNode === null) {
        nMinus1thFromEndNode = head
      } else {
        nMinus1thFromEndNode = nMinus1thFromEndNode.next
      }
    }
  }
  cnt++
  if (cnt === n) {
    let tmp = head
    head = head.next
    tmp = null
  } else {
    let nthFromEndNode = nMinus1thFromEndNode.next
    nMinus1thFromEndNode.next = nthFromEndNode.next
    nthFromEndNode = null
  }
  return head
}
