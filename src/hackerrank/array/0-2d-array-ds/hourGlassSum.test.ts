import { hourGlassSum } from './hourGlassSum'

describe('hourGlassSum', () => {
  it('should pass test case 0', () => {
    const input = [
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 2, 4, 4, 0],
      [0, 0, 0, 2, 0, 0],
      [0, 0, 1, 2, 4, 0],
    ]
    expect(hourGlassSum(input)).toBe(19)
  })
  it('should pass test case 1', () => {
    const input = [
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 9, 2, -4, -4, 0],
      [0, 0, 0, -2, 0, 0],
      [0, 0, -1, -2, -4, 0],
    ]
    expect(hourGlassSum(input)).toBe(13)
  })
})
