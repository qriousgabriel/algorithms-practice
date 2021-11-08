export const floodFill = (
  image: number[][],
  sr: number,
  sc: number,
  newColour: number
): number[][] => {
  const r = image.length
  const c = image[0].length
  const oldColour = image[sr][sc]
  if (oldColour === newColour) {
    return image
  }
  dfs(image, sr, sc, r, c, oldColour, newColour)
  return image
}

const dfs = (
  image: number[][],
  sr: number,
  sc: number,
  r: number,
  c: number,
  oldColour: number,
  newColour: number
): void => {
  if (sr < 0 || sr >= r || sc < 0 || sc >= c || image[sr][sc] !== oldColour) {
    return
  }
  image[sr][sc] = newColour
  dfs(image, sr - 1, sc, r, c, oldColour, newColour)
  dfs(image, sr, sc + 1, r, c, oldColour, newColour)
  dfs(image, sr + 1, sc, r, c, oldColour, newColour)
  dfs(image, sr, sc - 1, r, c, oldColour, newColour)
}
