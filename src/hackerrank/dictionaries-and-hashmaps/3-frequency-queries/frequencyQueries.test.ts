import { readFileSync } from 'fs'
import { frequencyQueries } from './frequencyQueries'

const getInputOutput = (inputPath: string, outputPath: string) => {
  const inputFile = readFileSync(inputPath, 'utf-8')
  const input = inputFile.split('\n')
  const queries = []
  for (let i = 1; i < input.length; i++) {
    const [operation, data] = input[i].split(' ')
    queries.push([parseInt(operation), parseInt(data)])
  }
  const outputFile = readFileSync(outputPath, 'utf-8')
  const output = outputFile.split('\n').map((item) => parseInt(item))
  return [queries, output]
}

describe('Frequency Queries', () => {
  it('test case 0', () => {
    expect(
      frequencyQueries([
        [1, 5],
        [1, 6],
        [3, 2],
        [1, 10],
        [1, 10],
        [1, 6],
        [2, 5],
        [3, 2],
      ])
    ).toEqual([0, 1])
  })
  it('test case 1', () => {
    expect(
      frequencyQueries([
        [3, 4],
        [2, 1003],
        [1, 16],
        [3, 1],
      ])
    ).toEqual([0, 1])
  })
  it('test case 2', () => {
    expect(
      frequencyQueries([
        [1, 3],
        [2, 3],
        [3, 2],
        [1, 4],
        [1, 5],
        [1, 5],
        [1, 4],
        [3, 2],
        [2, 4],
        [3, 2],
      ])
    ).toEqual([0, 1, 1])
  })
  it('test case 3', () => {
    const [queries, output] = getInputOutput(
      'src/hackerrank/dictionaries-and-hashmaps/3-frequency-queries/input06.txt',
      'src/hackerrank/dictionaries-and-hashmaps/3-frequency-queries/output06.txt'
    )
    expect(frequencyQueries(queries)).toEqual(output)
  })
  it('test case 4', () => {
    const [queries, output] = getInputOutput(
      'src/hackerrank/dictionaries-and-hashmaps/3-frequency-queries/input08.txt',
      'src/hackerrank/dictionaries-and-hashmaps/3-frequency-queries/output08.txt'
    )
    expect(frequencyQueries(queries)).toEqual(output)
  })
  it('test case 5', () => {
    const [queries, output] = getInputOutput(
      'src/hackerrank/dictionaries-and-hashmaps/3-frequency-queries/input10.txt',
      'src/hackerrank/dictionaries-and-hashmaps/3-frequency-queries/output10.txt'
    )
    expect(frequencyQueries(queries)).toEqual(output)
  })
})
