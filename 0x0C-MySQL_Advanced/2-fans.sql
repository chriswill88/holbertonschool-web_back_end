-- SQL FOR TASK 
SELECT DISTINCT origin, SUM(fans) OVER (PARTITION BY origin) AS nb_fans FROM holberton.metal_bands order by nb_fans DESC;