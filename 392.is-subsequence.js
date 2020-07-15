/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const re = new RegExp(s.split('').join('.*'), 'g')
  return re.test(t)
}
// @lc code=end

module.exports = isSubsequence
