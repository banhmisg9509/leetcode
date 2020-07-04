/*
 * @lc app=leetcode id=405 lang=javascript
 *
 * [405] Convert a Number to Hexadecimal
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  const digits = '0123456789abcdef'
  let result = ''
  num = num < 0 ? 2 ** 32 + num : num
  while (num > 0) {
    result = digits[num % 16] + result
    num = num / 16 >> 0
  }
  return !result ? '0' : result
}
// @lc code=end
module.exports = toHex
