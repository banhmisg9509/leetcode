/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
  const p = Array(n).fill(1)
  for (let i = 2; i * i < n; i++) {
    if (!p[i]) continue
    for (let j = i * i; j < n; j += i) {
      p[j] = 0
    }
  }
  return p.filter(x => x === 1).length - 2
}
// @lc code=end
module.exports = countPrimes
