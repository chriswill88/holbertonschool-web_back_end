#!/usr/bin/env python3
"""This is the module for exercize.py"""
import redis
import uuid
from typing import Union, Callable
from functools import wraps


def replay(method):
    """display the history of calls of a particular function"""
    key = method.__qualname__
    self = method.__self__
    num = self._redis.get(key)

    history_in = self._redis.lrange(key + ':inputs', 0, -1)
    history_out = self._redis.lrange(key + ':outputs', 0, -1)

    print(str(history_in[0]))
    print('{} was called {} times:'.format(key, num.decode('ascii')))
    for i in list(zip(history_in, history_out)):
        print('{}(*{}) -> {}'.format(
            key, i[0].decode('ascii'), i[1].decode('ascii')))


def call_history(method: Callable) -> Callable:
    """wrapper"""
    @wraps(method)
    def wrapper(self, *args):
        """This function creates a history
        of input and output for Cache.store"""
        key = method.__qualname__
        output = method(self, *args)
        self._redis.rpush('{}:inputs'.format(key), str(args))
        self._redis.rpush('{}:outputs'.format(key), output)
        return output
    return wrapper


def count_calls(method: Callable) -> Callable:
    """wrapper"""
    @wraps(method)
    def wrapper(self, *args):
        """this function counts the number of times Cache.store is called"""
        key = method.__qualname__
        self._redis.incr(key, 1)
        return method(self, *args)
    return wrapper


class Cache:
    """Cache Class for redis"""
    def __init__(self):
        self._redis = redis.Redis()
        self._redis.flushdb()

    @call_history
    @count_calls
    def store(self, data: Union[str, bytes, int, float]) -> str:
        """this function stores a variable in redis"""
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

    def get(self, key: str, fn=None):
        """this function converts the """
        value = self._redis.get(key)
        if fn is None:
            return value
        return fn(value)

    def get_str(self, key):
        """returns string"""
        return self.get(key, str)

    def get_int(self, key):
        """returns int"""
        return self.get(key, int)
