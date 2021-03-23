#!/usr/bin/env python3
""" this is the module for task 0 """
BaseCaching = __import__('base_caching').BaseCaching


class FIFOCache(BaseCaching):
    """ FIFOCache: limited cache first in first out """
    def __init__(self):
        super().__init__()

    def put(self, key, item):
        """ add module to cache """
        if key is not None and item is not None:
            self.cache_data[key] = item

        keys = list(self.cache_data.keys())

        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            print("DISCARD:", keys[0])
            del self.cache_data[keys[0]]

    def get(self, key):
        """ return module from cache """
        cach = self.cache_data
        return None if key is None or key not in cach.keys() else cach[key]
