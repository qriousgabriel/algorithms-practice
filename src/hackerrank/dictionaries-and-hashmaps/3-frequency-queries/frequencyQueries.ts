export const frequencyQueries = (queries: number[][]): (0 | 1)[] => {
  const INSERT = 1
  const DELETE = 2
  const CHECK_FREQUENCY = 3
  const count = {}
  const frequency = {}
  const result = []

  const updateFrequency = (frequency, previousCount, currentCount) => {
    frequency[currentCount] = (frequency[currentCount] || 0) + 1
    frequency[previousCount] =
      frequency[previousCount] > 0
        ? frequency[previousCount] - 1
        : frequency[previousCount]
  }

  for (const q of queries) {
    const operation = q[0]
    const data = q[1]
    const previousCount = count[data] || 0
    switch (operation) {
      case INSERT: {
        const currentCount = previousCount + 1
        count[data] = currentCount
        updateFrequency(frequency, previousCount, currentCount)
        break
      }
      case DELETE: {
        if (previousCount > 0) {
          const currentCount = previousCount - 1
          count[data] = currentCount
          updateFrequency(frequency, previousCount, currentCount)
        }
        break
      }
      case CHECK_FREQUENCY: {
        result.push(frequency[data] && frequency[data] >= 0 ? 1 : 0)
        break
      }
      default:
        break
    }
  }

  return result
}
