/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
  const a = 'Fizz'
  const b = 'Buzz'
  let r, t
  return Array(n).fill(1).map((v, i) => {
    t = v + i
    r = ''
    if (t % 3 === 0) {
      r += a
    }
    if (t % 5 === 0) {
      r += b
    }
    return !r ? t + '' : r
  })
}
// @lc code=end
module.exports = fizzBuzz
