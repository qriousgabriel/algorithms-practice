const isMatch = (s: string, p: string): boolean => {
  const n = s.length
  const m = p.length
  const dp = []
  for (let i = 0; i < n + 1; i++) {
    dp.push(new Array(m + 1))
  }

  dp[0][0] = true
  for (let i = 1; i <= n; i++) {
    dp[i][0] = false
  }
  for (let j = 1; j <= m; j++) {
    dp[0][j] = p[j - 1] === '*' ? dp[0][j - 2] : false
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        dp[i][j] =
          dp[i][j - 1] ||
          dp[i][j - 2] ||
          ((p[j - 2] === '.' || p[j - 2] === s[i - 1]) && dp[i - 1][j])
      } else {
        dp[i][j] = false
      }
    }
  }
  return dp[n][m]
}
