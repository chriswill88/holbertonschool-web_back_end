#!/usr/bin/env python3
"""This module contains task 1"""
from flask import Flask, render_template, request
from flask_babel import Babel, gettext


class Config():
    """Config"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app = Flask(__name__)
app.config.from_object(Config)
babel = Babel(app)


@babel.localeselector
def get_locale():
    """lang selector"""
    return request.accept_languages.best_match(Config.LANGUAGES)


@app.route('/')
def hello_world():
    """renders a template"""
    return render_template(
        '3-index.html', home_title=gettext(u'home_title'),
        home_header=gettext(u'home_header'))
