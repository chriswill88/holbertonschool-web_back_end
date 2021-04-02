#!/usr/bin/env python3
"""auth module
"""
from typing import List, TypeVar
from flask import request


class Auth():
    """Auth class"""
    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """Function - required_auth"""
        return False

    def authorization_header(self, request=None) -> str:
        """Function - authorization_header"""
        return None

    def current_user(self, request=None) -> TypeVar('User'):
        """Function - current_user"""
        return None
