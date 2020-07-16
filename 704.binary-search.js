/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0
  let high = nums.length
  let mid = (low + high) >> 1
  while (low < high) {
    if (nums[mid] === target) {
      return mid
    }
    if (nums[mid] < target) {
      low = mid + 1
    } else {
      high = mid
    }
    mid = (low + high) >> 1
  }
  return -1
}
// @lc code=end
module.exports = search
