/*
 * @lc app=leetcode id=504 lang=javascript
 *
 * [504] Base 7
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (n) {
    let d2h = x => x === 0 ? '' : d2h(Math.floor(x / 7)) + x % 7;
    n = n < 0 ? '-' + d2h(Math.abs(n)) : d2h(n);
    return !n ? '0' : n;
};
// @lc code=end


