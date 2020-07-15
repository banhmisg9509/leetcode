/*
 * @lc app=leetcode id=434 lang=javascript
 *
 * [434] Number of Segments in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  if (!s || /^\s+$/g.test(s)) return 0
  return s.trim().split(/\s+/g).length
}
// @lc code=end
module.exports = countSegments
