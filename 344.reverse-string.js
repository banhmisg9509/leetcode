/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const len = s.length
  const mid = len >> 1
  let temp
  for (let i = 0; i < mid; i++) {
    temp = s[i]
    s[i] = s[len - i - 1]
    s[len - i - 1] = temp
  }
  return s
}
// @lc code=end
module.exports = reverseString
