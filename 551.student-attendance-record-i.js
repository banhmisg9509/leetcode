/*
 * @lc app=leetcode id=551 lang=javascript
 *
 * [551] Student Attendance Record I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  if (s.length === 2) return s !== 'AA'
  let A = 0
  let doubbleLate
  for (let i = 2; i < s.length; i++) {
    A += s[i - 2] === 'A'
    doubbleLate = s[i] + s[i - 1] + s[i - 2]
    if (A > 1 || doubbleLate === 'LLL') return false
  }
  return true
}
// @lc code=end
module.exports = checkRecord
