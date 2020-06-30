/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let maxSoFar = maxSum;
  for (let i = 1; i < nums.length; i++) {
    maxSum = Math.max(maxSum, maxSoFar);
    maxSoFar = Math.max(maxSoFar, maxSoFar + nums[i]);
  }
  return maxSum;
};
//@lc code = end
/* var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let maxSoFar = maxSum;
  let begin = 0, len = -1;
  for (let i = 1; i < nums.length; i++) {
    maxSum = Math.max(maxSum, maxSoFar);
    if (nums[i] > maxSoFar + nums[i]) {
      maxSoFar = nums[i];
      begin = i;
      len = -1;
    } else {
      maxSoFar += nums[i];
      len++;
    }
  }
  return nums.slice(begin, begin + len);
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
 */