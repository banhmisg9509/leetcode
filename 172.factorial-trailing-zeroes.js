/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let numberOfFives = 0;
    
    while (n >= 5) {
        numberOfFives += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }
    
    return numberOfFives;
};
// @lc code=end
