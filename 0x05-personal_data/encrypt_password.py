#!/usr/bin/env python3
"""this module contains the function for task 0"""
import bcrypt


def hash_password(password: str) -> bytes:
    """hashes a password"""
    return bcrypt.hashpw(password.encode('utf8'), bcrypt.gensalt())
