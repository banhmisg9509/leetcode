/*
 * @lc app=leetcode id=476 lang=javascript
 *
 * [476] Number Complement
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  // number of bits fit to present the num
  let i = Math.floor(Math.log(num) / Math.log(2)) + 1
  let mask = 1
  while (i > 0) {
    num ^= mask // toggle bit at position mask
    mask <<= 1
    i--
  }
  return num
}
// @lc code=end
module.exports = findComplement
