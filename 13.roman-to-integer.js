/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let res = 0
  let c
  let p
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }
  for (let i = 1; i <= s.length;) {
    c = s[i]
    p = s[i - 1]
    if (map[p + c]) {
      res += map[p + c]
      i += 2
    } else {
      res += map[p]
      i += 1
    }
  }
  return res
}
// @lc code=end
module.exports = romanToInt
