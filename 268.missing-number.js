/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = nums.length * (nums.length + 1) >> 1;
    return sum - nums.reduce((a, b) => a + b);
};
// @lc code=end
