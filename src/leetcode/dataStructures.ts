export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export const linkedListToArray = (head: ListNode | null): number[] => {
  const nums = []
  let currentNode = head
  while (currentNode) {
    nums.push(currentNode.val)
    currentNode = currentNode.next
  }
  return nums
}

export const arrayToLinkedList = (nums: number[]): ListNode | null => {
  if (nums.length === 0) {
    return null
  } else {
    const head = new ListNode(nums[0])
    if (nums.length === 1) {
      return head
    } else {
      let currentNode = head
      for (let i = 1; i < nums.length; i++) {
        currentNode.next = new ListNode(nums[i])
        currentNode = currentNode.next
      }
      return head
    }
  }
}
