import { twoSum } from './twoSumII'

describe('two sum from sorted array', () => {
  it('test case 0', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2])
  })
  it('test case 1', () => {
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3])
  })
  it('test case 2', () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2])
  })
})
