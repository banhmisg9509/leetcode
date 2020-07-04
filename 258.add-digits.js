/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let sum = 0
  while (num >= 10) {
    while (num > 0) {
      sum += num % 10
      num = num / 10 >> 0
    }
    num = sum
    sum = 0
  }
  return num
}
// @lc code=end
module.exports = addDigits
