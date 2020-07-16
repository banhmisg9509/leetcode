/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const d = n => n.toString()
    .split('')
    .reduce((t, c) => t + (+c * +c), 0)

  const cycle = {}
  while (n !== 1) {
    if (cycle[n]) return false
    cycle[n] = d(n)
    n = cycle[n]
  }
  return true
}
// @lc code=end

console.log(isHappy(1))

module.exports = isHappy
