#!/usr/bin/env python3
"""this module contains the function for task 1"""

import asyncio
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List:
    """async_comprehension - list comp but for coroutines"""
    return [i async for i in async_generator()]
