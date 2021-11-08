export const maxAreaOfIsland = (grid: number[][]): number => {
  let max: number = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      max = Math.max(max, dfs(grid, i, j))
    }
  }
  return max
}

const dfs = (grid: number[][], row: number, column: number): number => {
  if (
    row < 0 ||
    row >= grid.length ||
    column < 0 ||
    column >= grid[0].length ||
    grid[row][column] !== 1
  ) {
    return 0
  }
  grid[row][column] = 2
  return (
    1 +
    dfs(grid, row + 1, column) +
    dfs(grid, row, column + 1) +
    dfs(grid, row - 1, column) +
    dfs(grid, row, column - 1)
  )
}
