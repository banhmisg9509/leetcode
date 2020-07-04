/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const valid = /\(\)|\[\]|\{\}/
  const bucket = []
  for (const p of s) {
    if (p === '(' || p === '[' || p === '{') {
      bucket.push(p)
      continue
    }
    if (valid.test(bucket[bucket.length - 1] + p)) {
      bucket.pop()
      continue
    }
    return false
  }
  return bucket.length === 0
}
// @lc code=end
module.exports = isValid
