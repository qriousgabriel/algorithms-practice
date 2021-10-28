import { minimumDistance } from './minimumDistance'

describe('minimum distance', () => {
  test('test case 0', () => {
    expect(minimumDistance([7, 1, 3, 4, 1, 7])).toBe(3)
  })
  test('test case 1', () => {
    expect(minimumDistance([1, 2, 3, 4, 10])).toBe(-1)
  })
})
