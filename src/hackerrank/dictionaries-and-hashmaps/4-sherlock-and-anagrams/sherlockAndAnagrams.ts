export const sherlockAndAnagrams = (s: string): number => {
  let count = 0
  const subStringCount: { [key: string]: number } = {}
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      const subString = s.substring(i, j)
      let characters = subString.split('').sort().join('')
      if (subStringCount[characters]) {
        count += subStringCount[characters]
      }
      subStringCount[characters] = (subStringCount[characters] || 0) + 1
    }
  }
  return count
}
