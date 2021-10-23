import { arrayManipulation } from './arrayManipulation'

describe('Array Manipulation', () => {
  it('test case 0', () => {
    expect(
      arrayManipulation(5, [
        [2, 5, 100],
        [1, 2, 100],
        [3, 4, 100],
      ])
    ).toBe(200)
  })
  it('test case 1', () => {
    expect(
      arrayManipulation(10, [
        [1, 5, 3],
        [4, 8, 7],
        [6, 9, 1],
      ])
    ).toBe(10)
  })
})
