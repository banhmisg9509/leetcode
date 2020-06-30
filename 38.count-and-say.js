/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n <= 1) return '1';
  let res = countAndSay(n - 1);
  return res.match(/(\d)\1*/g).map(g => g.length + g[0]).join('');
};
// @lc code=end
