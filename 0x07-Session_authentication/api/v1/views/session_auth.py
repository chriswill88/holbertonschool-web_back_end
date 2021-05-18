#!/usr/bin/env python3
""" Module of auth session views
"""
from os import getenv
from api.v1.views import app_views
from flask import abort, jsonify, request, session
from models.user import User


@app_views.route('/auth_session/login', methods=['POST'], strict_slashes=False)
def get_email_and_pass():
    """new Flask view that handles all routes for the Session authentication"""
    email = request.form.get('email')
    password = request.form.get('password')

    if email is None or password == '':
        return jsonify({"error": "email missing"}), 400
    if password is None or password == '':
        return jsonify({"error": "password missing"}), 400

    user = User.search({'email': email})
    if len(user) < 1:
        return jsonify({"error": "no user found for this email"}), 404
    user = user[0]
    if user.is_valid_password(password) is False:
        return jsonify({"error": "wrong password"}), 401
    from api.v1.app import auth
    cookie = getenv('SESSION_NAME')
    session_id = auth.create_session(user.id)
    out = jsonify(user.to_json())
    out.set_cookie(cookie, session_id)
    return out, 200


@app_views.route(
    '/api/v1/auth_session/logout', methods=['DELETE'], strict_slashes=False)
def delete():
    """deletes the user session / logout"""
    from api.v1.app import auth
    if auth.destroy_session(request) is False:
        abort(404)
    return jsonify(), 200
