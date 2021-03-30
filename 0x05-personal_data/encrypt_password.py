#!/usr/bin/env python3
"""this module contains the function for task 0"""
import bcrypt


def hash_password(password: str) -> bytes:
    """hashes a password"""
    return bcrypt.hashpw(password.encode('utf8'), bcrypt.gensalt())


def is_valid(hashed_password: bytes, password: str) -> bool:
    """checks a password against a hashed value"""
    return bcrypt.checkpw(password.encode('utf8'), hashed_password)
