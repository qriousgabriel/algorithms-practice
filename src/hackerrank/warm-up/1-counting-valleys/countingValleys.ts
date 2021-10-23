export const countValleys = (steps: number, path: string): number => {
  let count = 0
  let level = 0
  let isValley = false
  for (let char of path) {
    if (char === 'U') {
      if (level === 0) {
        isValley = false
      }
      level++
    } else {
      if (level === 0) {
        isValley = true
      }
      level--
    }
    if (isValley && level === 0) {
      count++
    }
  }
  return count
}
