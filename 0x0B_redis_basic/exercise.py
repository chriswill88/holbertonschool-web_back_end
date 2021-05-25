#!/usr/bin/env python3
"""This is the module for exercize.py"""
import redis
import uuid


class Cache:
    """Cache Class for redis"""
    def __init__(self):
        self._redis = redis.Redis()
        self._redis.flushdb()
    
    def store(self, data ):
        """this function stores a variable in redis"""
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key
