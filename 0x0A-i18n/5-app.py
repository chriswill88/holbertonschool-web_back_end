#!/usr/bin/env python3
"""This module contains task 3"""
from flask import Flask, render_template, request, g
from flask_babel import Babel


app = Flask(__name__)
babel = Babel(app)

users = {
    1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
    2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
    3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
    4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}


class Config():
    """Configuration class for templates"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app.config.from_object(Config)

def get_user():
    user_id = request.args.get('login_as')
    if user_id is None:
        return None
    return users.get(int(user_id))

@app.before_request
def before_request():
    user = get_user()
    print("user", user)
    g.user = user


@babel.localeselector
def get_locale():
    """lang selector based on location"""
    lang = request.args.get('locale')
    if lang is not None:
        ele = 0 if lang == 'en' else 1
        return Config.LANGUAGES[ele]
    return request.accept_languages.best_match(Config.LANGUAGES)


@app.route('/')
def hello_world():
    """This function renders a template"""
    print("g ->", type(g.user))
    username = g.user
    return render_template('5-index.html', username=g.user)
