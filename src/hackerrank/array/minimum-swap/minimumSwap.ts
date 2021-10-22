export const minimumSwaps = (arr: number[]): number => {
  let swapCount = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      let tmp = arr[arr[i] - 1]
      arr[arr[i] - 1] = arr[i]
      arr[i] = tmp
      swapCount++
      i--
    }
  }
  return swapCount
}
