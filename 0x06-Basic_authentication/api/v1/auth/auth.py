#!/usr/bin/env python3
"""auth module
"""
from typing import List, TypeVar
from flask import request


class Auth():
    """Auth class"""
    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """Function - required_auth"""
        if path is None:
            return True
        if excluded_paths is None or excluded_paths == []:
            return True
        if path[-1] != '/':
            path += '/'
        if path not in excluded_paths:
            return True
        return False

    def authorization_header(self, request=None) -> str:
        """Function - authorization_header"""
        if request is None:
            return None
        if request.headers.get('Authorization') is None:
            return None
        else:
            return request.headers['Authorization']
        return None

    def current_user(self, request=None) -> TypeVar('User'):
        """Function - current_user"""
        return None
