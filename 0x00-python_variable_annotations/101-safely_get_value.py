#!/usr/bin/env python3
""" This module contains the function for task 100 """
from typing import List, Any, Sequence, Union, Mapping, TypeVar
T = TypeVar('T')


def safely_get_value(
    dct: Mapping, key: Any, default: Union[
        T, None] = None) -> Union[Any, T]:
    """check_first_element: checks dictionary
    * Uses TypeVar"""
    if key in dct:
        return dct[key]
    else:
        return default
