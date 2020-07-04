/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 0; let i = digits.length - 1
  do {
    carry = (digits[i] + 1) / 10 >> 0
    digits[i] = (digits[i] + 1) % 10
    i--
  } while (i >= 0 && carry !== 0)
  return carry ? [1].concat(digits) : digits
}
// @lc code=end
module.exports = plusOne
