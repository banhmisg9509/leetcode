/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = [1, 1]; let temp
  while (n-- > 1) {
    temp = dp[1]
    dp[1] = dp[0] + dp[1]
    dp[0] = temp
  }
  return dp[1]
}
// @lc code=end
module.exports = climbStairs
