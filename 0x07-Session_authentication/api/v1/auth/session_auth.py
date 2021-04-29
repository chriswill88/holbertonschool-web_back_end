#!/usr/bin/env python3
"""this module contains SessionAuth class"""
from api.v1.auth.auth import Auth
import uuid


class SessionAuth(Auth):
    """SessionAuth class"""
    user_id_by_session_id = {}
    def create_session(self, user_id: str = None) -> str:
        """this creates a session"""
        if user_id is None or not isinstance(user_id, str):
            return None
        user_id[user_id] = uuid.uuid4()
        return user_id[ user_id]
