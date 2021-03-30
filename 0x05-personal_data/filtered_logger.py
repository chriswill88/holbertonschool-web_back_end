#!/usr/bin/env python3
"""this module contains the function for task 0"""
from typing import List
import re
import logging


PII_FIELDS = ("name", "email", "phone", "ssn", "user_agent")


def get_logger() -> logging.Logger:
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
