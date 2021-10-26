export const exist = (board: string[][], word: string): boolean => {
  const search = (positions: number[], index: number): boolean => {
    const [i, j] = positions
    if (
      !board[i] ||
      (board[i] && !board[i][j]) ||
      board[i][j] !== word.charAt(index)
    ) {
      return false
    }
    if (index === word.length - 1) {
      return true
    }
    let tmp = board[i][j]
    board[i][j] = '0'
    const result =
      search([i + 1, j], index + 1) ||
      search([i, j + 1], index + 1) ||
      search([i - 1, j], index + 1) ||
      search([i, j - 1], index + 1)
    board[i][j] = tmp
    return result
  }

  const positions = []
  const chars = new Set()

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      chars.add(board[i][j])
      if (board[i][j] === word.charAt(0)) {
        positions.push([i, j])
      }
    }
  }

  if (!word.split('').every((char) => chars.has(char))) return false

  return positions.some((position) => search(position, 0))
}
