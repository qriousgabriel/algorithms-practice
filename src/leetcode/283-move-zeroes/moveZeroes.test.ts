import { moveZeroes } from './moveZeroes'

describe('move zeros', () => {
  it('test case 0', () => {
    const nums = [0, 1, 0, 3, 12]
    moveZeroes(nums)
    expect(nums).toEqual([1, 3, 12, 0, 0])
  })
  it('test case 1', () => {
    const nums = [0]
    moveZeroes(nums)
    expect(nums).toEqual([0])
  })
})
