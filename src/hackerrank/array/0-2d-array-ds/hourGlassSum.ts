export const hourGlassSum = (arr: number[][]): number => {
  const computeSum = (i: number, j: number, arr: number[][]): number => {
    return (
      arr[i][j] +
      arr[i][j + 1] +
      arr[i][j + 2] +
      arr[i + 1][j + 1] +
      arr[i + 2][j] +
      arr[i + 2][j + 1] +
      arr[i + 2][j + 2]
    )
  }

  let sum = Number.MIN_SAFE_INTEGER,
    y = arr.length,
    x = arr[0].length

  for (let i = 0; i <= y - 3; i++) {
    for (let j = 0; j <= x - 3; j++) {
      sum = Math.max(sum, computeSum(i, j, arr))
    }
  }
  return sum
}
