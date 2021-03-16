#!/usr/bin/env python3
""" This module contains the function for task 102 """
from typing import List, Any, Sequence, Tuple, Mapping, TypeVar


def zoom_array(lst: Tuple, factor: int = 2) -> List:
    zoomed_in: List = [
        item for item in lst
        for i in range(factor)
    ]
    return zoomed_in


array = (12, 72, 91)

zoom_2x = zoom_array(array)

zoom_3x = zoom_array(array, 3)