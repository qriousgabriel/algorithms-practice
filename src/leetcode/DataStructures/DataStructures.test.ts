import {
  createArrayFromBinaryTreeInLevelOrder,
  createBinaryTreeFromArrayInLevelOrder,
} from './dataStructures'

describe('building/traversing tree', () => {
  const arr = [2, 1, 3, null, 4, null, 7]
  expect(
    createArrayFromBinaryTreeInLevelOrder(
      createBinaryTreeFromArrayInLevelOrder(arr)
    )
  ).toEqual(arr)
})