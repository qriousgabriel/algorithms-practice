export const frequencyQueries = (queries: number[][]): (0 | 1)[] => {
  const INSERT = 1
  const DELETE = 2
  const CHECK_FREQUENCY = 3
  const dataFrequency = {}
  const frequencyFrequency = {}
  const result = []

  const updateFrequencyFrequency = (
    dataFrequency,
    frequencyFrequency,
    operation,
    data
  ) => {
    const dataCurrentFrequency = dataFrequency[data]

    if (frequencyFrequency[dataCurrentFrequency]) {
      frequencyFrequency[dataCurrentFrequency]++
    } else {
      frequencyFrequency[dataCurrentFrequency] = 1
    }
    const dataPreviousFrequency =
      operation === INSERT
        ? dataCurrentFrequency > 0
          ? dataCurrentFrequency - 1
          : dataCurrentFrequency
        : dataCurrentFrequency >= 0
        ? dataCurrentFrequency + 1
        : dataCurrentFrequency
    if (frequencyFrequency[dataPreviousFrequency]) {
      frequencyFrequency[dataPreviousFrequency]--
    } else {
      frequencyFrequency[dataPreviousFrequency] = 0
    }
  }

  for (const q of queries) {
    const operation = q[0]
    const data = q[1]
    switch (operation) {
      case INSERT:
        if (dataFrequency[data] && dataFrequency[data] >= 0) {
          dataFrequency[data]++
        } else {
          dataFrequency[data] = 1
        }
        updateFrequencyFrequency(
          dataFrequency,
          frequencyFrequency,
          operation,
          data
        )
        break
      case DELETE:
        if (dataFrequency[data] && dataFrequency[data] > 0) {
          dataFrequency[data]--
        }
        updateFrequencyFrequency(
          dataFrequency,
          frequencyFrequency,
          operation,
          data
        )
        break
      case CHECK_FREQUENCY:
        result.push(
          frequencyFrequency[data] && frequencyFrequency[data] !== -1 ? 1 : 0
        )
        break
      default:
        break
    }
  }

  return result
}
