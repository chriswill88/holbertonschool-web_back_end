#!/usr/bin/env python3
"""
This module contains the basic_auth class
"""
from api.v1.auth.auth import Auth
import base64


class BasicAuth(Auth):
    """Basic Authentication"""
    def extract_base64_authorization_header(
            self, authorization_header: str) -> str:
        """Extracts from authorization_header"""
        if authorization_header is None:
            return None

        if not isinstance(authorization_header, str):
            return None

        if authorization_header[0:6] != "Basic ":
            return None

        return authorization_header[6:]

    def decode_base64_authorization_header(self, base64_authorization_header: str) -> str:
        """decoder"""
        if base64_authorization_header is None:
            return None

        if not isinstance(base64_authorization_header, str):
            return None

        try:
            return base64.b64decode(base64_authorization_header).decode('utf-8')
        except Exception:
            return None
