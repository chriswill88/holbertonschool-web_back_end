#!/usr/bin/env python3
""" This module contains the function for task 9 """
from typing import List, Iterable, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """element_length: return the length
    of the elements withen the list"""
    return [(i, len(i)) for i in lst]
