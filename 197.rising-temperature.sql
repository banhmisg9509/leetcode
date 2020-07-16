--
-- @lc app=leetcode id=197 lang=mysql
--
-- [197] Rising Temperature
--
-- @lc code=start
# Write your MySQL query statement below
select 
  a.Id
from Weather a, Weather b
where datediff(a.RecordDate, b.RecordDate) = 1 and a.Temperature > b.Temperature
  -- @lc code=end
