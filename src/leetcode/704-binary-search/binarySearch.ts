export const search = (nums: number[], target: number): number => {
  let left = 0,
    right = nums.length - 1
  let pivot: number
  while (left <= right) {
    pivot = left + Math.floor((right - left) / 2)
    if (nums[pivot] === target) {
      return pivot
    }
    if (target < nums[pivot]) {
      right = pivot - 1
    } else {
      left = pivot + 1
    }
  }
  return -1
}
