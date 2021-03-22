#!/usr/bin/env python3
""" this module contains the function for task 2"""
import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime():
    """ measure execution time"""
    start_time = time.time()
    time = [async_comprehension() for i in range(4)]
    asyncio.gather(await time)
    return (time.time() - start_time)
