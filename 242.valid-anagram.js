/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const count = {}
  for (const c of s) {
    count[c] = -~count[c]
  }
  for (const c of t) {
    count[c] = ~-count[c]
  }
  return Object.values(count).every(v => v === 0)
}
// @lc code=end
module.exports = isAnagram
