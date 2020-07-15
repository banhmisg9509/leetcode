/*
 * @lc app=leetcode id=709 lang=javascript
 *
 * [709] To Lower Case
 */

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  let lower = ''
  let code
  for (const char of str) {
    code = char.charCodeAt(0)
    if (code > 64 && code < 91) {
      lower += String.fromCharCode(code + 32)
      continue
    }
    lower += char
  }
  return lower
}
// @lc code=end

module.exports = toLowerCase
