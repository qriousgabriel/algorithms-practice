export const countTriplets = (arr: number[], r: number): number => {
  let count = 0
  const missingTwo: { [key: number]: number } = {}
  const missingOne: { [key: number]: number } = {}
  for (let num of arr) {
    const next = num * r
    if (missingOne[num]) {
      count += missingOne[num]
    }
    if (missingTwo[num]) {
      if (missingOne[next]) {
        missingOne[next] += missingTwo[num]
      } else {
        missingOne[next] = missingTwo[num]
      }
    }
    if (missingTwo[next]) {
      missingTwo[next]++
    } else {
      missingTwo[next] = 1
    }
  }
  return count
}
