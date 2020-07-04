/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  if (!b) return a
  return getSum(a ^ b, (a & b) << 1)
}
// @lc code=end
module.exports = getSum
