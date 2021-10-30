export const searchInsert = (nums: number[], target: number): number => {
  if (nums[0] > target) return 0
  if (nums[nums.length - 1] < target) return nums.length

  let left = 0,
    right = nums.length

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return left
}
