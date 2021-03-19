#!/usr/bin/env python3

import asyncio
from typing import Generator

async_generator = __import__('0-async_generator').async_generator

async def print_yielded_values() -> Generator:
    result = []
    async for i in async_generator():
        result.append(i)
    print(result)

asyncio.run(print_yielded_values())
