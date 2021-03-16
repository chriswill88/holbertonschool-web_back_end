#!/usr/bin/env python3
""" This module contains the function for task 8 """
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """A type-annotated function make_multiplier that takes
    a float multiplier as argument and returns a function
    that multiplies a float by multiplier."""

    def multiply(x: float) -> float:
        """Multiplies two numbers"""
        return multiplier * x

    return multiply
