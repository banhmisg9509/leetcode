/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === val) {
      let t = j;
      while (t < nums.length) {
        nums[t] = nums[t + 1];
        t++;
      }
      j--;
      i--;
    } else {
      i++;
    }
  }
  return i;
};
// @lc code=end