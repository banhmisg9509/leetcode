--
-- @lc app=leetcode id=196 lang=mysql
--
-- [196] Delete Duplicate Emails
--

-- @lc code=start
# Write your MySQL query statement below
delete b from Person a inner join Person b
where a.id < b.Id and a.Email = b.Email
-- @lc code=end

