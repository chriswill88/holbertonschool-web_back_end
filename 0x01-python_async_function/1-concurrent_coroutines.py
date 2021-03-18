#!/usr/bin/env python3
""" This module contains the function for task 1 """
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """this function calls wait_radom in a loop"""
    ret = [wait_random(max_delay) for i in range(n)]
    return [await x for x in asyncio.as_completed(ret)]
