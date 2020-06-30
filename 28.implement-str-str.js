/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  let LEN = haystack.length;
  let len = needle.length;
  for (let i = 0; i < LEN - len + 1; i++) {
    if (haystack[i] === needle[0] && haystack[i + len - 1] === needle[len - 1]) {
      if (needle === haystack.substr(i, len)) {
        return i;
      }
    }
  }
  return -1;
};
// @lc code=end

