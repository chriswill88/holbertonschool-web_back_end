#!/usr/bin/env python3
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """this function calls wait_radom in a loop"""
    ret = []
    for i in range(n):
        x = wait_random(max_delay)
        ret.append(await x)
    return ret
