import { reverseString } from './reverseString'

describe('reverse string', () => {
  it('test case 0', () => {
    const s = ['h', 'e', 'l', 'l', 'o']
    reverseString(s)
    expect(s).toEqual(['o', 'l', 'l', 'e', 'h'])
  })
  it('test case 1', () => {
    const s = ['H', 'a', 'n', 'n', 'a', 'h']
    reverseString(s)
    expect(s).toEqual(['h', 'a', 'n', 'n', 'a', 'H'])
  })
})
