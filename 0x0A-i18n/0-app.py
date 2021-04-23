#!/usr/bin/env python3
from flask import Flask
from flask import render_template
app = Flask(__name__)
"""This module contains task 0"""

@app.route('/')
def hello_world():
    return render_template('0-index.html')
