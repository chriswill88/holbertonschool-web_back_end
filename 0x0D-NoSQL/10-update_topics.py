#!/usr/bin/env python3
"""This module contains the function for task 10"""


def update_topics(mongo_collection, name, topics):
    """a Python function that changes all topics of
    a school document based on the name"""
    print(topics)
    mongo_collection.update_one(
        {'name' : name},
        {'$set': {'topics': topics}}
    )
