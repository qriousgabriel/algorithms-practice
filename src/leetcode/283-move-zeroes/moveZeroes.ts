export const moveZeroes = (nums: number[]): void => {
  let nextNonZero = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nextNonZero] = nums[i]
      nextNonZero++
    }
  }
  if (nextNonZero < nums.length) {
    for (let i = nextNonZero; i < nums.length; i++) {
      nums[i] = 0
    }
  }
}
