/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
let s = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var convertToTitle = function (n) {
    if (n >= 1 && n <= 26) {
        return s[n];
    }
    return convertToTitle((n - n % 26) / 26) + s[n > 26 ? n % 26 : n];
};
// @lc code=end
console.log(convertToTitle(701));

// sum += Math.pow(26, s.length - i - 1) * (c.charCodeAt(0) - 64)