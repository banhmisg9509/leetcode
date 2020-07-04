/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start
/**
 * initialize your data structure here.
 */

var StackNode = function (value, next = null) {
  this.value = value
  this.next = next
}

var MinStack = function () {
  this.head = null
  this.min = null
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  let newNode
  if (!this.head) {
    newNode = new StackNode(x, this.head)
    this.head = newNode
    this.min = this.head.value
    return this
  }
  if (x >= this.min) {
    newNode = new StackNode(x, this.head)
    this.head = newNode
  } else {
    newNode = new StackNode(2 * x - this.min, this.head)
    this.head = newNode
    this.min = x
  }
  return this
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (!this.head) return
  if (this.head.value >= this.min) {
    this.head = this.head.next
  } else {
    this.min = 2 * this.min - this.head.value
    this.head = this.head.next
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.head.value < this.min ? this.min : this.head.value
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
module.exports = MinStack
