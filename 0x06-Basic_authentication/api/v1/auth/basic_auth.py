#!/usr/bin/env python3
"""
This module contains the basic_auth class
"""
from api.v1.auth.auth import Auth
from typing import TypeVar
from models.user import User
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

    def decode_base64_authorization_header(
            self, base64_authorization_header: str) -> str:
        """decoder"""
        if base64_authorization_header is None:
            return None

        if not isinstance(base64_authorization_header, str):
            return None

        try:
            return base64.b64decode(
                base64_authorization_header).decode('utf-8')
        except Exception:
            return None

    def extract_user_credentials(
            self, decoded_base64_authorization_header: str) -> (
            str, str):
        """
        This function  returns the user email
        and password from the Base64 decoded value
        """
        if decoded_base64_authorization_header is None:
            return None, None
        if not isinstance(decoded_base64_authorization_header, str):
            return None, None
        if ':' not in decoded_base64_authorization_header:
            return None, None

        return decoded_base64_authorization_header.split(':')

    def user_object_from_credentials(
            self, user_email: str, user_pwd: str) -> TypeVar('User'):
        """This function returns the User instance based
        on his email and password."""
        if user_email is None or not isinstance(user_email, str):
            return None
        if user_pwd is None or not isinstance(user_pwd, str):
            return None

        users = User().search({'email': user_email})

        if len(users) == 0 or not users[0].is_valid_password(user_pwd):
            return None
        return users[0]

    def current_user(self, request=None) -> TypeVar('User'):
        """complete Basic authentication"""
        if request:
            auth_header = self.authorization_header(request)
            ext = self.extract_base64_authorization_header(auth_header)
            dec = self.decode_base64_authorization_header(ext)
            email, passw = self.extract_user_credentials(dec)
            return self.user_object_from_credentials(email, passw)
