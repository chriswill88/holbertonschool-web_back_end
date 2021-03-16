#!/usr/bin/env python3
""" This module contains the function for task 100 """
from typing import List, Any, Sequence, Union


# The types of the elements of the input are not know
def safe_first_element(lst: Sequence[Any]) -> Union[Any, None]:
    """check_first_element: checks list"""
    if lst:
        return lst[0]
    else:
        return None
