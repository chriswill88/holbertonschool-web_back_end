#!/usr/bin/env python3
""" A module for task 0 """
import random
import asyncio
from typing import Generator



async def async_generator() -> Generator:
    """async_generator: waits 1 sec then yeilds a random number"""
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
