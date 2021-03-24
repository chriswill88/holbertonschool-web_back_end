#!/usr/bin/env python3
"""this module contains the function for task 0"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple:
    """this returns the start and ending indexs"""
    return (page - 1, page + page_size - 1)
