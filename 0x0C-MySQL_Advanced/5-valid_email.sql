-- TASK 5
delimiter //
CREATE TRIGGER email_validator AFTER UPDATE ON users
    FOR EACH ROW
    BEGIN
        IF OLD.email <> NEW.email THEN
            UPDATE users SET valid_email = 0 WHERE NEW.id = id;
        END IF;
    END;
//
delimiter ;
