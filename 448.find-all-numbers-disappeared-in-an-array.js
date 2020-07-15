/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (const num of nums) {
    nums[Math.abs(num) - 1] = Math.abs(nums[Math.abs(num) - 1]) * -1
  }
  return nums.reduce((res, num, i) => {
    if (num > 0) {
      res.push(i + 1)
    }
    return res
  }, [])
}
// @lc code=end
module.exports = findDisappearedNumbers
