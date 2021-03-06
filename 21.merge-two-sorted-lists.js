/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
class ListNode {
  constructor (val, next = null) {
    this.val = val
    this.next = next
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let tail = new ListNode()
  const head = tail
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      tail.next = l1
      l1 = l1.next
    } else {
      tail.next = l2
      l2 = l2.next
    }
    tail = tail.next
  }
  if (l1 !== null) {
    tail.next = l1
  } else {
    tail.next = l2
  }
  return head.next
}
// @lc code=end
module.exports = mergeTwoLists
