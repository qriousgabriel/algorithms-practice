export const minimumDistance = (a: number[]): number => {
  let n = a.length
  if (n <= 1) {
    return -1
  }
  let min = -1
  const indices: { [num: number]: number[] } = {}
  for (let i = 0; i < n; i++) {
    const num = a[i]
    if (indices[num]) {
      indices[num].push(i)
      if (indices[num].length > 1) {
        const nIndices = indices[num].length - 1
        const distance = indices[num][nIndices] - indices[num][nIndices - 1]
        min = min === -1 ? distance : Math.min(distance, min)
      }
    } else {
      indices[num] = [i]
    }
  }
  return min
}
