import { countValleys } from './countingValleys'

describe('Counting Valleys', () => {
  it('test case 0', () => {
    expect(countValleys(8, 'UDDDUDUU')).toBe(1)
  })
  it('test case 1', () => {
    expect(countValleys(12, 'DDUUDDUDUUUD')).toBe(2)
  })
})
