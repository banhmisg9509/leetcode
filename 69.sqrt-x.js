/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let a = x
  let b = 1
  const e = 1e-6
  while (a - b > e) {
    a = (a + b) / 2
    b = x / a
  }
  return a >> 0
}
// @lc code=end
module.exports = mySqrt
