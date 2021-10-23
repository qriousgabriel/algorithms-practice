export const newYearChaos = (q: number[]) => {
  const swap = (arr: number[], i: number, j: number) => {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }

  let bribeCount = 0
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] !== i + 1) {
      if (i - 1 >= 0 && q[i - 1] === i + 1) {
        bribeCount += 1
        swap(q, i, i - 1)
      } else if (i - 2 >= 0 && q[i - 2] === i + 1) {
        bribeCount += 2
        q[i - 2] = q[i - 1]
        q[i - 1] = q[i]
        q[i] = i + 1
      } else {
        return 'Too chaotic'
      }
    }
  }
  return bribeCount
}
