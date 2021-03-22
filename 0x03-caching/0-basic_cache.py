#!/usr/bin/env python3
""" this is the module for task 0 """
BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """ BasicCache: no limit cache """
    def __init__(self):
        super().__init__()

    def put(self, key, item):
        """ add module to cache """
        self.cache_data[key] = item

    def get(self, key):
        """ return module from cache """
        cach = self.cache_data
        return None if key is None or key not in cach.keys() else cach[key]
