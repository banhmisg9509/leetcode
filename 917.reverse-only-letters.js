/*
 * @lc app=leetcode id=917 lang=javascript
 *
 * [917] Reverse Only Letters
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
  const isNotLetter = /[^a-z]/i
  let t
  S = S.split('')
  for (let i = 0, j = S.length - 1; i <= j;) {
    if (isNotLetter.test(S[i])) {
      i++
      continue
    }
    if (isNotLetter.test(S[j])) {
      j--
      continue
    }
    t = S[i]
    S[i] = S[j]
    S[j] = t
    i++
    j--
  }
  return S.join('')
}
// @lc code=end
module.exports = reverseOnlyLetters
