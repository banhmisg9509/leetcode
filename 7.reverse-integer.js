/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let sign = x < 0 ? -1 : 1;
  x = +Math.abs(x).toString().split('').reverse().join('');
  return x > 2147483646 ? 0 : x * sign;
};
// @lc code=end