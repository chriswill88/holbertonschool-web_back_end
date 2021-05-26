#!/usr/bin/env python3
"""This is the module for exercize.py"""
import redis
import uuid
from typing import Union, Callable
from functools import wraps


def call_history(method: Callable) -> Callable:
    """wrapper"""
    @wraps(method)
    def wrapper(self, *args):
        """This function creates a history of input and output for Cache.store"""
        key = method.__qualname__
        self._redis.rpush(key + ':inputs', str(args))
        self._redis.rpush(key + ':outputs', str(method(self, args)))
        return method(self, args)


def count_calls(method: Callable) -> Callable:
    """wrapper"""
    @wraps(method)
    def wrapper(self, *args):
        """this function counts the number of times Cache.store is called"""
        key = method.__qualname__
        print(key)
        self._redis.incr(key, 1)
        return method(self, *args)
    return wrapper

class Cache:
    """Cache Class for redis"""
    def __init__(self):
        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: Union[str, bytes, int, float]) -> str:
        """this function stores a variable in redis"""
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

    @count_calls
    @call_history
    def get(self, key: str, fn=None):
        """this function converts the """
        value = self._redis.get(key)
        if fn == None:
            return value
        return fn(value)

    def get_str(self, key):
        """returns string"""
        return self.get(key, str)

    def get_int(self, key):
        """returns int"""
        return self.get(key, int)
