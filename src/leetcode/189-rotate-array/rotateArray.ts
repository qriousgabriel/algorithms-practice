export const rotate = (nums: number[], k: number): void => {
  const reverse = (nums: number[], i: number, j: number): void => {
    while (i < j) {
      let tmp = nums[i]
      nums[i] = nums[j]
      nums[j] = tmp
      i++
      j--
    }
  }
  const n = nums.length
  const actualRotation = k % n
  reverse(nums, 0, n - actualRotation - 1)
  reverse(nums, n - actualRotation, n - 1)
  reverse(nums, 0, n - 1)
}
