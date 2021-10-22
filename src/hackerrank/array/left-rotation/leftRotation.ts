export const leftRotation = (a: number[], d: number): number[] => {
  const n = a.length
  let actualRotation = d % n
  const result = []
  for (let i = actualRotation; i < n; i++) {
    result.push(a[i])
  }
  for (let i = 0; i < actualRotation; i++) {
    result.push(a[i])
  }
  return result
}
