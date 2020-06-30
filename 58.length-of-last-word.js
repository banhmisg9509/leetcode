/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (!s) return 0;
  s = s.trim();
  return s.length - s.lastIndexOf(' ') - 1;
};
// @lc code=end