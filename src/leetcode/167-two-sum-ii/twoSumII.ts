export const twoSum = (numbers: number[], target: number): number[] => {
  const dict = {}
  for (let i = 0; i < numbers.length; i++) {
    const rest = target - numbers[i]
    if (dict[rest] !== undefined) {
      return [dict[rest] + 1, i + 1]
    } else {
      if (!dict[numbers[i]]) {
        dict[numbers[i]] = i
      }
    }
  }
}
