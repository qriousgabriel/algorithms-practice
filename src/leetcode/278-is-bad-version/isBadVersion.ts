const solution = (isBadVersion: (version: number) => boolean) => {
  return (n: number): number => {
    let left = 1,
      right = n
    let result = 1
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2)
      if (isBadVersion(mid)) {
        result = mid
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return result
  }
}
