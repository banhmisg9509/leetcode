/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let low = 0; let high = numbers.length - 1; let sum
  while (true) {
    sum = numbers[low] + numbers[high]
    if (sum === target) {
      return [low + 1, high + 1]
    }
    if (sum < target) {
      low++
    } else {
      high--
    }
  }
}
// @lc code=end
module.exports = twoSum
