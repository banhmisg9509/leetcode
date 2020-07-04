/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const reverse = str => str.split('').reverse().join('')
  return s.split(' ').map(reverse).join(' ')
}
// @lc code=end
module.exports = reverseWords
