import { lengthOfLongestSubstring } from './lengthOfLongestSubstring'

describe('longest substring without repeating characters', () => {
  fit('test case 0', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  })
  it('test case 1', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
  })
  it('test case 2', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
  })
  it('test case 3', () => {
    expect(lengthOfLongestSubstring('')).toBe(0)
  })
})
