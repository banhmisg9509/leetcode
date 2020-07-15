/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const row1 = 'qwertyuiop'
  const row2 = 'asdfghjkl'
  const row3 = 'zxcvbnm'
  let temp
  return words.filter(word => {
    temp = word.toLowerCase().split('')
    const inRow1 = temp.every(c => row1.includes(c))
    const inRow2 = temp.every(c => row2.includes(c))
    const inRow3 = temp.every(c => row3.includes(c))
    return inRow1 || inRow2 || inRow3
  })
}
// @lc code=end
module.exports = findWords
