/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  if (num <= 0) return false
  let p = 2
  while (num > 1) {
    while (num % p === 0) {
      num /= p
    }
    p++
    if (p >= 7) return false
  }
  return true
}
// @lc code=end
module.exports = isUgly
