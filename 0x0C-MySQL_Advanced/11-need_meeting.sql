-- Task 11
CREATE VIEW need_meeting AS SELECT name FROM students WHERE score < 80 and (last_meeting IS NULL or last_meeting < date_sub(now(), interval 1 month));
