/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }
  let result = 0
  while (x > result) {
    result = result * 10 + x % 10
    x = x / 10 >> 0
  }
  return x === result || x === Math.floor(result / 10)
}
// @lc code=end
module.exports = isPalindrome
