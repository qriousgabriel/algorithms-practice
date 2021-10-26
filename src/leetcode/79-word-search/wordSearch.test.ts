import { exist } from './wordSearch'

describe('Word Search', () => {
  it('test case 0', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ]
    const word = 'ABCCED'
    expect(exist(board, word)).toBe(true)
  })
})
