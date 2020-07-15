/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 */

// @lc code=start
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head === null) return head
  while (head && head.val === val) {
    head = head.next
  }
  let current = head
  if (current) {
    while (current.next) {
      if (current.next && current.next.val === val) {
        current.next = current.next.next
      } else {
        current = current.next
      }
    }
  }
  return head
}
// @lc code=end
module.exports = removeElements
