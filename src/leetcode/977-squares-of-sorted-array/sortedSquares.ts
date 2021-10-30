export const sortedSquares = (nums: number[]): number[] => {
  const negatives = []
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negatives.push(nums[i])
    } else {
      break
    }
  }
  let i = negatives.length
  let j = negatives.length - 1
  while (i < nums.length) {
    if (j >= 0) {
      const negativeSquare = negatives[j] ** 2
      const nonNegativeSquare = nums[i] ** 2
      if (negativeSquare < nonNegativeSquare) {
        result.push(negativeSquare)
        j--
        continue
      } else {
        result.push(nonNegativeSquare)
        i++
        continue
      }
    } else {
      result.push(nums[i] ** 2)
      i++
    }
  }
  if (j >= 0) {
    for (; j >= 0; j--) {
      result.push(negatives[j] ** 2)
    }
  }
  return result
}
