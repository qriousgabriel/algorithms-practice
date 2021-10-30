import { rotate } from './rotateArray'

describe('Rotate Array', () => {
  it('test case 0', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    rotate(arr, 3)
    expect(arr).toEqual([5, 6, 7, 1, 2, 3, 4])
  })
  it('test case 1', () => {
    const arr = [-1, -100, 3, 99]
    rotate(arr, 2)
    expect(arr).toEqual([3, 99, -1, -100])
  })
  it('test case 2', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    rotate(arr, 7)
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
})
