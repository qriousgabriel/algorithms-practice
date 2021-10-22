import { leftRotation } from './leftRotation'

describe('left rotation', () => {
  it('test case 0', () => {
    expect(leftRotation([1, 2, 3, 4, 5], 4)).toEqual([5, 1, 2, 3, 4])
  })
  it('test case 1', () => {
    expect(leftRotation([1, 2, 3, 4, 5], 12)).toEqual([3, 4, 5, 1, 2])
  })
})
