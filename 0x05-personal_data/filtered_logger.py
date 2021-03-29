#!/usr/bin/env python3
"""this module contains the function for task 0"""
from typing import List
import re


def filter_datum(fields: List[str], redaction: str, message: str, separator: str) -> str:
    """classifies message"""
    for i in fields:
        message = re.sub(r'(?<={}=)(.*?(?={}))'.format(i, separator), redaction, message)
    return message
