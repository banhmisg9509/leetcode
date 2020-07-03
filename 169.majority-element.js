/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = {}, t = nums.length >> 1;
    for(let num of nums) {
        count[num] = -~count[num];
        if(count[num] > t) {
            return num;
        }
    }
};
// @lc code=end