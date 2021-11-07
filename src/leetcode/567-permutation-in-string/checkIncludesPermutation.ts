/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 *
 * In other words, return true if one of s1's permutations is the substring of s2.
 *
 * Permutation: In mathematics, a permutation of a set is, loosely speaking, an arrangement of its members into a sequence or linear order, or if the set is already ordered, a rearrangement of its elements. The word "permutation" also refers to the act or process of changing the linear order of an ordered set.
 */

type FrequencyMap = {
  [key: string]: number
}

export const checkInclusion = (s1: string, s2: string): boolean => {
  if (s1.length > s2.length) {
    return false
  }
  const s1Map: FrequencyMap = {}
  const n = s1.length
  for (let char of s1) {
    s1Map[char] = s1Map[char] ? s1Map[char] + 1 : 1
  }
  const subStrMap: FrequencyMap = {}
  for (let i = 0; i < n; i++) {
    subStrMap[s2[i]] = subStrMap[s2[i]] ? subStrMap[s2[i]] + 1 : 1
  }
  for (let i = 1, j = i + n - 1; i < s2.length && j < s2.length; i++, j++) {
    if (match(s1Map, subStrMap)) {
      return true
    }
    subStrMap[s2[i - 1]]--
    subStrMap[s2[j]] = subStrMap[s2[j]] ? subStrMap[s2[j]] + 1 : 1
  }
  if (match(s1Map, subStrMap)) {
    return true
  }
  return false
}

const match = (m1: FrequencyMap, m2: FrequencyMap): boolean => {
  for (let key in m1) {
    if (m1[key] !== m2[key]) {
      return false
    }
  }
  return true
}
