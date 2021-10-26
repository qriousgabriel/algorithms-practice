export const findWords = (board: string[][], words: string[]): string[] => {
  const map = {}
  const chars = new Set()
  const result = []
  const findWord = (word: string) => {
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

    if (!word.split('').every((char) => chars.has(char))) return false

    const positions = map[word.charAt(0)]
    return positions ? positions.some((position) => search(position, 0)) : false
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const char = board[i][j]
      chars.add(char)
      if (map[char]) {
        map[char].push([i, j])
      } else {
        map[char] = [[i, j]]
      }
    }
  }

  for (let word of words) {
    findWord(word) && result.push(word)
  }

  return result
}
