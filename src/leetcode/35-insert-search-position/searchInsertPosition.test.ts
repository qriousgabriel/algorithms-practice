import { searchInsert } from './searchInsertPosition'

describe('Search Insert Position', () => {
  test('test case 0', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2)
  })
  it('test case 1', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1)
  })
  test('test case 2', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4)
  })
  test('test case 3', () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0)
  })
  test('test case 4', () => {
    expect(searchInsert([1], 0)).toBe(0)
  })
})
