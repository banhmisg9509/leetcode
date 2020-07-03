/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if(n === 1 || n === 2) return true;
    if (!n || n & 1) return false;
    return isPowerOfTwo(n >> 1);
};
// @lc code=end

