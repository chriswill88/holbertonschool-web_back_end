#!/usr/bin/env python3
"""This module contains task 0"""
from flask import Flask
from flask import render_template
app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('0-index.html')
