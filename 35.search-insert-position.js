/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let begin = 0; let end = nums.length - 1
  let mid
  while (begin < end) {
    mid = (begin + end) >> 1
    if (nums[mid] < target) {
      begin = mid + 1
    } else if (nums[mid] > target) {
      end = mid - 1
    } else {
      return mid
    }
  }
  return nums[begin] < target ? begin + 1 : begin
}
// @lc code=end
module.exports = searchInsert
