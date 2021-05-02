-- SQL FOR TASK 2
SELECT origin, SUM(fans) AS nb_fans FROM holberton.metal_bands GROUP BY origin order by nb_fans DESC;
