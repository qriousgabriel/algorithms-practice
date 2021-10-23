export const sockMerchant = (n: number, arr: number[]): number => {
  const socks: { [color: number]: number } = {}
  for (const item of arr) {
    if (socks[item]) {
      socks[item]++
    } else {
      socks[item] = 1
    }
  }
  let sum = 0
  for (const color in socks) {
    sum += Math.floor(socks[color] / 2)
  }
  return sum
}
