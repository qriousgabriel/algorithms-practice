import { newYearChaos } from './newYearChaos'

describe('new year chaos', () => {
  it('test case 0', () => {
    expect(newYearChaos([2, 1, 5, 3, 4])).toBe(3)
  })
  it('test case 1', () => {
    expect(newYearChaos([2, 5, 1, 3, 4])).toBe('Too chaotic')
  })
  it('test case 2', () => {
    expect(newYearChaos([5, 1, 2, 3, 7, 8, 6, 4])).toBe('Too chaotic')
  })
  it('test case 3', () => {
    expect(newYearChaos([1, 2, 5, 3, 7, 8, 6, 4])).toBe(7)
  })
})
