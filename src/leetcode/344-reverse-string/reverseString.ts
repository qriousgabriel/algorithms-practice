export const reverseString = (s: string[]): void => {
  let i = 0,
    j = s.length - 1
  while (i < j) {
    let tmp = s[i]
    s[i] = s[j]
    s[j] = tmp
    i++
    j--
  }
}
