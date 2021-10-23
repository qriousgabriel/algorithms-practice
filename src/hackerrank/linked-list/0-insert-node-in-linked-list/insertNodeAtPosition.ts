export class SinglyLinkedListNode {
  data: number
  next: SinglyLinkedListNode | null

  constructor(nodeData: number) {
    this.data = nodeData
    this.next = null
  }
}

export class SinglyLinkedList {
  head: SinglyLinkedListNode | null
  tail: SinglyLinkedListNode | null

  constructor() {
    this.head = null
    this.tail = null
  }

  insertNode(nodeData: number): void {
    const node = new SinglyLinkedListNode(nodeData)

    if (this.head == null) {
      this.head = node
    } else {
      this.tail!.next = node
    }

    this.tail = node
  }
}

export const getLinkedListFromArray = (arr: number[]): SinglyLinkedList => {
  const list = new SinglyLinkedList()
  for (const num of arr) {
    list.insertNode(num)
  }
  return list
}

export const getArrayFromLinkedList = (
  llistHead: SinglyLinkedListNode
): number[] => {
  const arr = []
  let currentNode = llistHead
  while (currentNode !== null) {
    arr.push(currentNode.data)
    currentNode = currentNode.next
  }
  return arr
}

export const insertNodeAtPosition = (
  llist: SinglyLinkedListNode,
  data: number,
  position: number
): SinglyLinkedListNode => {
  let index = 0
  let currentNode: SinglyLinkedListNode = llist
  while (currentNode !== null) {
    if (index + 1 === position) {
      const nodeToInsert = new SinglyLinkedListNode(data)
      const tmpNode = currentNode.next
      currentNode.next = nodeToInsert
      nodeToInsert.next = tmpNode
      break
    }
    currentNode = currentNode.next
    index++
  }
  return llist
}
