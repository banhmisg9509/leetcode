/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    let f = 1, n = 0;
    for(let i = s.length - 1; i >= 0; i--) {
        n += (s[i].charCodeAt(0) - 64) * f;
        f *= 26;
    }
    return n;
};
// @lc code=end
console.log(titleToNumber('ZZZZZ'));
let a = 26, b = 2, c = 3, d = 1;
let result = 26**3*a //+ 26**2*b //+ 26**1*c //+ 26**0*d;

