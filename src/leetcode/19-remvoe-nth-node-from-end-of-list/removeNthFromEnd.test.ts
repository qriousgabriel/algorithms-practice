import { arrayToLinkedList, linkedListToArray } from '../dataStructures'
import { removeNthFromEnd } from './removeNthFromEnd'

describe('remove nth node from end of list', () => {
  it('test case 0', () => {
    const nums = [1, 2, 3, 4, 5],
      n = 2
    expect(
      linkedListToArray(removeNthFromEnd(arrayToLinkedList(nums), n))
    ).toEqual([1, 2, 3, 5])
  })
  it('test case 1', () => {
    const nums = [1],
      n = 1
    expect(
      linkedListToArray(removeNthFromEnd(arrayToLinkedList(nums), n))
    ).toEqual([])
  })
  it('test case 2', () => {
    const nums = [1, 2],
      n = 1
    expect(
      linkedListToArray(removeNthFromEnd(arrayToLinkedList(nums), n))
    ).toEqual([1])
  })
  it('test case 3', () => {
    const nums = [1, 2],
      n = 2
    expect(
      linkedListToArray(removeNthFromEnd(arrayToLinkedList(nums), n))
    ).toEqual([2])
  })
  it('test case 4', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      n = 10
    expect(
      linkedListToArray(removeNthFromEnd(arrayToLinkedList(nums), n))
    ).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
