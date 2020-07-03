--
-- @lc app=leetcode id=176 lang=mysql
--
-- [176] Second Highest Salary
--
-- @lc code=start
# Write your MySQL query statement below
SELECT Salary as SecondHighestSalary
FROM Employee
ORDER BY Salary DESC
LIMIT 2 OFFSET 1;
-- @lc code=end