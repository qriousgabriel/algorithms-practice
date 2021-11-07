export const lengthOfLongestSubstring = (s: string): number => {
  let maxLength = 0,
    i = 0
  const map = {}
  for (let [j, charAtJ] of [...s].entries()) {
    if (map[charAtJ] !== undefined) {
      i = Math.max(map[charAtJ] + 1, i)
    }
    maxLength = Math.max(j - i + 1, maxLength)
    map[charAtJ] = j
  }
  return maxLength
}
