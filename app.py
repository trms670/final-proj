# import os
from flask import Flask, flash, redirect, render_template, request, session
# from flask_session.__init__ import Session
# from tempfile import mkdtemp

app = Flask(__name__)

# Configure session to use filesystem (instead of signed cookies)
# app.config["SESSION_PERMANENT"] = False
# app.config["SESSION_TYPE"] = "filesystem"
# Session(app)

# @app.after_request
# def after_request(response):
#     """Ensure responses aren't cached"""
#     response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
#     response.headers["Expires"] = 0
#     response.headers["Pragma"] = "no-cache"
#     return response


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        return render_template("bass.html")
    else:
        return render_template("index.html")
