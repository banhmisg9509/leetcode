/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const f = [0, 1]
  if (n < 2) return f[n]

  let t
  while (n-- > 1) {
    t = f[1]
    f[1] = f[0] + f[1]
    f[0] = t
  }
  return f[1]
}
// @lc code=end
module.exports = fib
