-- SQL FOR TASK 2
SELECT DISTINCT origin, SUM(fans) OVER (PARTITION BY origin) AS nb_fans FROM metal_bands order by nb_fans DESC;
