export const arrayManipulation = (n: number, queries: number[][]): number => {
  const arr: number[] = Array(n).fill(0)
  for (const query of queries) {
    const a = query[0]
    const b = query[1]
    const k = query[2]
    arr[a - 1] += k
    arr[b] -= k
  }
  let max = 0,
    tmp = 0
  for (const num of arr) {
    tmp += num
    max = tmp > max ? tmp : max
  }
  return max
}
