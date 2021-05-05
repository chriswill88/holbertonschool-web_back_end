#!/usr/bin/env python3
"""This module contains the function for task 8"""


def list_all(mongo_collection):
    """a Python function that lists all documents in a collection"""
    return mongo_collection.find()
