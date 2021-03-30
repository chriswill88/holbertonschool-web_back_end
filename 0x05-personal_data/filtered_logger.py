#!/usr/bin/env python3
"""this module contains the function for task 0"""
from typing import List
import re
import logging
import os
import mysql.connector


PII_FIELDS = ("name", "email", "phone", "ssn", "password")


def get_db() -> mysql.connector.connection.MySQLConnection:
    """db maker"""
    return mysql.connector.connect(
        host=os.getenv('PERSONAL_DATA_DB_HOST'),
        database=os.getenv('PERSONAL_DATA_DB_NAME'),
        user=os.getenv('PERSONAL_DATA_DB_USERNAME'),
        password=os.getenv('PERSONAL_DATA_DB_PASSWORD')
    )


def get_logger() -> logging.Logger:
    """creates a logging object"""
    obj = logging.getLogger("user_data")
    obj.propagate = False
    obj.setLevel(logging.INFO)
    ch = logging.StreamHandler()
    ch.setFormatter(RedactingFormatter)
    obj.addHandler(ch)
    return obj


class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class
        """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    def __init__(self, fields: List[str]):
        super(RedactingFormatter, self).__init__(self.FORMAT)
        self.fields = fields

    def format(self, record: logging.LogRecord) -> str:
        """Returns redacted string"""
        return filter_datum(
            self.fields, self.REDACTION, super(
            ).format(record), self.SEPARATOR)


def filter_datum(
    fields: List[str], redaction: str,
        message: str, separator: str) -> str:
    """classifies message"""
    for i in fields:
        message = re.sub(
            r'(?<={}=)(.*?(?={}))'.format(i, separator),
            redaction, message)
    return message


def main():
    """main function"""
    db = get_db()
    message = db.cursor()
    message.execute("SELECT COUNT(*) FROM users;")
    log_record = logging.LogRecord(
        "my_logger", logging.INFO,
        None, None, message, None, None)

    formatter = RedactingFormatter(PII_FIELDS)
    print(formatter.format(log_record))
