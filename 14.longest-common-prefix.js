/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length < 1) return ''
  const min = strs.reduce((m, c) => m.length < c.length ? m : c)
  let currentChar
  let prefix = ''
  for (let i = 0; i < min.length; i++) {
    currentChar = min[i]
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== currentChar) {
        return prefix
      }
    }
    prefix += currentChar
  }
  return min
}
// @lc code=end
module.exports = longestCommonPrefix
