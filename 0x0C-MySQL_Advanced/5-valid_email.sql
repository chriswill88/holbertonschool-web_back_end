-- TASK 5
delimiter //
CREATE TRIGGER email_validator BEFORE UPDATE ON users
    FOR EACH ROW
    BEGIN
        IF OLD.email != NEW.email THEN
            SET NEW.valid_email = 0;
        END IF;
    END;
//
delimiter ;
