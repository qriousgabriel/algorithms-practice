import { reverseString } from '../344-reverse-string/reverseString'

export const reverseWords = (s: string): string => {
  const reversedWords: string[] = []
  let word: string[] = []
  let i = 0
  while (i < s.length) {
    if (s[i] !== ' ') {
      word.push(s[i])
    } else {
      reverseString(word)
      reversedWords.push(word.join(''))
      word = []
    }
    i++
  }
  if (word.length !== 0) {
    reverseString(word)
    reversedWords.push(word.join(''))
  }
  return reversedWords.join(' ')
}
