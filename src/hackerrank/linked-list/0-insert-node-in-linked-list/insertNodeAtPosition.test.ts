import {
  getArrayFromLinkedList,
  getLinkedListFromArray,
  insertNodeAtPosition,
} from './insertNodeAtPosition'

describe('Insert Node At Position', () => {
  it('test case 0', () => {
    const llist = getLinkedListFromArray([16, 13, 7])
    expect(
      getArrayFromLinkedList(insertNodeAtPosition(llist.head, 1, 2))
    ).toEqual([16, 13, 1, 7])
  })
  it('test case 1', () => {
    const llist = getLinkedListFromArray([11, 9, 19, 10, 4])
    expect(
      getArrayFromLinkedList(insertNodeAtPosition(llist.head, 20, 3))
    ).toEqual([11, 9, 19, 20, 10, 4])
  })
})
