#!/usr/bin/env python3
"""This module contains task 3"""
from flask import Flask, render_template, request
from flask_babel import Babel, gettext


class Config():
    """Configuration class for templates"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app = Flask(__name__)
app.config.from_object(Config)
babel = Babel(app)


@babel.localeselector
def get_locale():
    """lang selector based on location"""
    return request.accept_languages.best_match(Config.LANGUAGES)


@app.route('/')
def hello_world():
    """This function renders a template"""
    return render_template(
        '3-index.html', home_title=gettext(u'home_title'),
        home_header=gettext(u'home_header'))
