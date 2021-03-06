/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let current, prev
  current = head
  prev = head
  if (!head) return head
  while (current.next !== null) {
    if (current.val !== current.next.val) {
      prev.next = current.next
      prev = current.next
    }
    current = current.next
  }
  prev.next = current.next
  prev = current
  return head
}
// @lc code=end
module.exports = deleteDuplicates
