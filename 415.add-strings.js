/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const len = Math.max(num1.length, num2.length)
  num1 = num1.padStart(len, 0)
  num2 = num2.padStart(len, 0)
  let result = ''
  let carry = 0
  for (let i = len - 1; i >= 0; i--) {
    carry = parseInt(num1[i]) + parseInt(num2[i]) + carry
    result = carry % 10 + result
    carry = Math.floor(carry / 10)
  }
  if (carry) {
    result = carry + result
  }
  return result
}
// @lc code=end
module.exports = addStrings
