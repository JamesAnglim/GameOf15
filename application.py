import os
import datetime
import math

from cs50 import SQL
from flask import Flask, flash, jsonify, redirect, render_template, request, session
from flask_session.__init__ import Session
from tempfile import mkdtemp
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError
from werkzeug.security import check_password_hash, generate_password_hash
from time import sleep

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Ensure responses aren't cached
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///finance.db")

# Make sure API key is set
if not os.environ.get("API_KEY"): 
    raise RuntimeError("API_KEY not set")


@app.route("/")
def index():
    leaderboard = db.execute("SELECT * FROM leaderboards ORDER BY time ASC")
    transformedLeaderboard = transformLeaderboard(leaderboard)
    return render_template("game-screen.html", leaderboard = transformedLeaderboard)

@app.route("/leaderboard", methods=["POST"])
def leaderboard():

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        nickname = request.form.get("nickname")

        if not nickname:
            return None

        moves = request.form.get("moves")
        totalSeconds = request.form.get("totalSeconds")
        currentTime = datetime.datetime.now()
        db.execute("INSERT INTO leaderboards(nickname, moves, time, finished_at) VALUES(?,?,?,?)", nickname, moves, totalSeconds, currentTime)

        return render_template("game-screen.html", leaderboard = [])
    
def transformLeaderboard(leaderboard):

    leaderboardTransformed = []

    j = len(leaderboard)
    for i in range(j):

        leaderboardEntry = leaderboard[i]
        leaderboardTime = leaderboardEntry["time"]

        leaderboardMinutes = leaderboardTime / 60
        leaderboardMinutesFloored = math.floor(leaderboardMinutes)

        leaderboardSeconds = leaderboardMinutesFloored * 60
        leaderboardSeconds = leaderboardTime - leaderboardSeconds

        leaderboardMinutesFlooredStr = transformeTimeDigit(leaderboardMinutesFloored)
        leaderboardSecondsStr = transformeTimeDigit(leaderboardSeconds)

        time = leaderboardMinutesFlooredStr + ":" + leaderboardSecondsStr;

        leaderboardEntryTransformed = {
            "nickname": leaderboardEntry["nickname"].title(),
            "time": time,
            "numMoves": leaderboardEntry["moves"]
        }

        leaderboardTransformed.append(leaderboardEntryTransformed)

        i += 1
    return leaderboardTransformed

def transformeTimeDigit(digit):
    if digit < 10:
        return "0" + str(digit)
    return str(digit)

def errorhandler(e):
    """Handle error"""
    if not isinstance(e, HTTPException):
        e = InternalServerError()
    return render_template("game-screen.html")


# Listen for errors
for code in default_exceptions:
    app.errorhandler(code)(errorhandler)