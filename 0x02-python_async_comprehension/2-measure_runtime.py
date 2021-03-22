#!/usr/bin/env python3
""" this module contains the function for task 2"""
import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """ measure execution time"""
    start_time = time.time()
    await asyncio.gather(
        *(async_comprehension() for _ in range(4))
    )
    return (time.time() - start_time)
