/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(!root) return true;
  return isMirror(root.left, root.right);
};

function isMirror(l, r) {
  if(!l && !r) return true;
  if(!l || !r) return false;
  return (l.val === r.val && isMirror(l.left, r.right) && isMirror(l.right, r.left));
}
// @lc code=end

