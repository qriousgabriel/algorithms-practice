import { countTriplets } from './countTriplets'

describe('Count Triplets', () => {
  it('test case 0', () => {
    expect(countTriplets([1, 2, 2, 4], 2)).toBe(2)
  })
  it('test case 1', () => {
    expect(countTriplets([1, 3, 9, 9, 27, 81], 3)).toBe(6)
  })
  it('test case 2', () => {
    expect(countTriplets([1, 5, 5, 25, 125], 5)).toBe(4)
  })
  it('test case 3', () => {
    expect(
      countTriplets(
        [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1,
        ],
        1
      )
    ).toBe(161700)
  })
})
