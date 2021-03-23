#!/usr/bin/env python3
""" this is the module for task 0 """
BaseCaching = __import__('base_caching').BaseCaching


class MRUCache(BaseCaching):
    """ MRUCache: limited cache first in first out """
    def __init__(self):
        super().__init__()

    def put(self, key, item):
        """ add module to cache """
        if key is not None and item is not None:
            self.cache_data[key] = item

        keys = list(self.cache_data.keys())

        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            print("DISCARD:", keys[BaseCaching.MAX_ITEMS - 1])

            self.cache_data[key] = item
            del self.cache_data[keys[BaseCaching.MAX_ITEMS - 1]]

    def get(self, key):
        """ return module from cache """
        cach = self.cache_data
        return None if key is None or key not in cach.keys() else cach[key]
