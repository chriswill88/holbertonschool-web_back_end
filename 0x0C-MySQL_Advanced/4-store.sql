-- TASK 4
delimiter //
CREATE TRIGGER updater AFTER INSERT ON orders
FOR EACH ROW
BEGIN 
UPDATE items SET quantity = quantity - NEW.number WHERE name = NEW.item_name;
END//
delimiter ;