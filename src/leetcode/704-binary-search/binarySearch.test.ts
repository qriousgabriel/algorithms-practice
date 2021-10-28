import { search } from './binarySearch'

describe('Binary Search', () => {
  test('test case 0', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4)
  })
  test('test case 1', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1)
  })
})
