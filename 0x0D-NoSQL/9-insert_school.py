#!/usr/bin/env python3
"""This module contains the function for task 9"""


def insert_school(mongo_collection, **kwargs):
    """a Python function that inserts a new document
    in a collection based on kwargs"""
    return mongo_collection.insert_one(kwargs)
