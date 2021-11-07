import { reverseWords } from './reverseWords'

describe('reverse Words in a string', () => {
  it('test case 0', () => {
    expect(reverseWords("Let's take LeetCode contest")).toEqual(
      "s'teL ekat edoCteeL tsetnoc"
    )
  })
  it('test case 1', () => {
    expect(reverseWords('God Ding')).toEqual('doG gniD')
  })
})
