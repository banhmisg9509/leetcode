/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  return Array(rowIndex + 1).fill(0).map((_, i) => comb(rowIndex, i));
};

function comb(n, r) {
  r = Math.min(r, n - r);
  let numer = 1, denom = 1;
  for (let i = n; i > n - r; i--) {
    numer *= i;
  }
  for (let i = r; i > 0; i--) {
    denom *= i;
  }
  return Math.round(numer / denom);
}
// @lc code=end
