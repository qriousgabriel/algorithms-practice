import { sortedSquares } from './sortedSquares'

describe('Square of Sorted Array', () => {
  it('test case 0', () => {
    expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100])
  })
  it('test case 1', () => {
    expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121])
  })
  it('test case 2', () => {
    expect(sortedSquares([-1])).toEqual([1])
  })
  fit('test case 3', () => {
    expect(sortedSquares([-10000, -9999, -7, -5, 0, 0, 10000])).toEqual([
      0, 0, 25, 49, 99980001, 100000000, 100000000,
    ])
  })
})
