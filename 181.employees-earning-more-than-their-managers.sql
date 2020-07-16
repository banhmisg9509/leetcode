--
-- @lc app=leetcode id=181 lang=mysql
--
-- [181] Employees Earning More Than Their Managers
--

-- @lc code=start
# Write your MySQL query statement below
select employee.Name as Employee
from Employee employee join Employee manager 
on employee.ManagerId = manager.Id 
where employee.Salary > manager.Salary 

-- @lc code=end

