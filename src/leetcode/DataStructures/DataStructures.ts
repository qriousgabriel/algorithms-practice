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

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export const createBinaryTreeFromArrayInLevelOrder = (
  arr: number[]
): TreeNode | null => {
  let root: TreeNode | null = null
  if (arr.length === 0) {
    return root
  }
  const queue: TreeNode[] = []
  root = new TreeNode(arr[0])
  queue.push(root)
  let isLeft: boolean = true
  let currentNode: TreeNode = null
  for (let i = 1; i < arr.length; i++) {
    const node = arr[i] === null ? null : new TreeNode(arr[i])
    if (isLeft) {
      currentNode = queue.shift()
      currentNode.left = node
    } else {
      currentNode.right = node
    }
    isLeft = !isLeft
    if (arr[i] !== null) {
      queue.push(node)
    }
  }
  return root
}

export const createArrayFromBinaryTreeInLevelOrder = (
  root: TreeNode | null
): number[] => {
  const arr: number[] = []
  if (root === null) {
    return arr
  }
  const queue: TreeNode[] = []
  queue.push(root)
  while (queue.length > 0) {
    let currentNode = queue.shift()
    arr.push(currentNode ? currentNode.val : null)
    if (currentNode !== null) {
      queue.push(currentNode.left)
      queue.push(currentNode.right)
    }
  }
  return arr
}
