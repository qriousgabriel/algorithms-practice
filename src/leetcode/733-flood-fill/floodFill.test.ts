import { floodFill } from './floodFill'

describe('flood fill', () => {
  it('test case 0', () => {
    expect(
      floodFill(
        [
          [1, 1, 1],
          [1, 1, 0],
          [1, 0, 1],
        ],
        1,
        1,
        2
      )
    ).toEqual([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ])
  })
  it('test case 1', () => {
    expect(
      floodFill(
        [
          [0, 0, 0],
          [0, 0, 0],
        ],
        0,
        0,
        2
      )
    ).toEqual([
      [2, 2, 2],
      [2, 2, 2],
    ])
  })
})
