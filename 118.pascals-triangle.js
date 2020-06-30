/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let p = Array(numRows).fill(0).map((_, i) => Array(i + 1).fill(1));
  if (numRows <= 2) return p;
  for (let i = 2; i < numRows; i++) {
    for(let j = 1; j < p[i].length - 1; j++) {
      p[i][j] = p[i-1][j-1] + p[i-1][j];
    }
  }
  return p;
};
// @lc code=end