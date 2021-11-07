import { checkInclusion } from './checkIncludesPermutation'

describe('permutation in string', () => {
  it('test case 0', () => {
    expect(checkInclusion('ab', 'eidbaooo')).toBe(true)
  })
  it('test case 1', () => {
    expect(checkInclusion('ab', 'eidboaoo')).toBe(false)
  })
  fit('test case 2', () => {
    expect(checkInclusion('adc', 'dcda')).toBe(true)
  })
})
