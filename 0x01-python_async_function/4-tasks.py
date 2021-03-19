#!/usr/bin/env python3
""" This module contains the function for task 4 """
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """this function calls wait_radom in a loop"""
    ret = [task_wait_random(max_delay) for i in range(n)]
    return [await x for x in asyncio.as_completed(ret)]
