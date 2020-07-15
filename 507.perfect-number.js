/*
 * @lc app=leetcode id=507 lang=javascript
 *
 * [507] Perfect Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  let sum = 0
  let i = 1
  const upperBound = Math.floor(num / 2) + 1
  while (i < upperBound) {
    sum += num % i === 0 ? i : 0
    i++
  }
  return num > 0 && sum === num
}
// @lc code=end
module.exports = checkPerfectNumber
