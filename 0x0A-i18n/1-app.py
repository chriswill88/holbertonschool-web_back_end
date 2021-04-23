#!/usr/bin/env python3
"""This module contains task 1"""
from flask import Flask, render_template
from flask_babel import Babel
app = Flask(__name__)


class Config():
    """Config"""
    LANGUAGES = ["en", "fr"]
    TIMEZONE = "utc"


babel = Babel(app, Config.LANGUAGES[0], Config.TIMEZONE)


@app.route('/')
def hello_world():
    """renders a template"""
    return render_template('1-index.html')
