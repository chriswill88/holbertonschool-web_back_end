#!/usr/bin/env python3
"""this module contains the function for task 0"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple:
    """this returns the start and ending indexs"""
    start = (page - 1) * page_size
    return (start, start + page_size)
