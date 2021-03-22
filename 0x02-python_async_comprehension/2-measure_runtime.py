#!/usr/bin/env python3
""" this module contains the function for task 2"""
async_comprehension = __import__('1-async_comprehension').async_comprehension

import time
import asyncio


async def measure_runtime():
    """ measure execution time"""
    start_time = time.time()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    return (time.time() - start_time)
