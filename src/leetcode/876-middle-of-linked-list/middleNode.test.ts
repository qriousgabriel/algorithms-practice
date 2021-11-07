import { arrayToLinkedList, linkedListToArray } from '../dataStructures'
import { middleNode } from './middleNode'

describe('middle of the linked list', () => {
  it('test case 0', () => {
    const nums = [1, 2, 3, 4, 5]
    const head = arrayToLinkedList(nums)
    const mid = middleNode(head)
    const midArray = linkedListToArray(mid)
    expect(midArray).toEqual([3, 4, 5])
  })
  it('test case 1', () => {
    const nums = [1, 2, 3, 4, 5, 6]
    const head = arrayToLinkedList(nums)
    const mid = middleNode(head)
    const midArray = linkedListToArray(mid)
    expect(midArray).toEqual([4, 5, 6])
  })
})
