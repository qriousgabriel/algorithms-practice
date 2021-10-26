export function longestConsecutive(nums: number[]): number {
  const set = new Set()
  let result = 0
  for (let num of nums) {
    set.add(num)
  }
  for (let num of nums) {
    if (!set.has(num - 1)) {
      let count = 0
      let tmp = num
      while (set.has(tmp + 1)) {
        count++
        tmp++
      }
      result = Math.max(result, count)
    }
  }
  return result
}
