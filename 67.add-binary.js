/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (a.length >= b.length) {
    b = '0'.repeat(a.length - b.length) + b;
  } else {
    a = '0'.repeat(b.length - a.length) + a;
  }
  let sum = 0, carry = 0, result = '';
  for (let i = a.length - 1; i >= 0; i--) {
    sum = +a[i] + +b[i] + carry;
    carry = sum / 2 >> 0;
    result = (sum % 2) + result;
  }

  return carry ? '1' + result : result;
};
// @lc code=end

