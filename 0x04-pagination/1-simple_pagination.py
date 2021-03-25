#!/usr/bin/env python3
"""this module contains the function for task 0"""
import csv
import math
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple:
    """this returns the start and ending indexs"""
    start = (page - 1) * page_size
    return (start, start + page_size)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """get_page: gets the page"""
        assert type(page) == int
        assert type(page_size) == int
        assert page > 0
        assert page_size > 0

        self.dataset()
        start, end = index_range(page, page_size)
        result = self.__dataset[start: end]
        return result
