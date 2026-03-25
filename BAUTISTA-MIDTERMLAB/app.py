from __future__ import annotations

import csv
import io

from flask import Flask, jsonify, make_response, render_template, request

from scraper import scrape_metacritic_games

app = Flask(__name__)


@app.get("/")
def index():
    raw_count = request.args.get("count", "10")
    try:
        requested_count = int(raw_count)
    except ValueError:
        requested_count = 10

    requested_count = max(10, min(requested_count, 25))
    rows = scrape_metacritic_games(min_games=requested_count)
    return render_template("index.html", rows=rows, requested_count=requested_count)


@app.get("/api/games")
def api_games():
    raw_count = request.args.get("count", "10")
    try:
        requested_count = int(raw_count)
    except ValueError:
        requested_count = 10

    requested_count = max(10, min(requested_count, 25))
    rows = scrape_metacritic_games(min_games=requested_count)
    return jsonify(rows)


@app.get("/export/csv")
def export_csv():
    raw_count = request.args.get("count", "10")
    try:
        requested_count = int(raw_count)
    except ValueError:
        requested_count = 10

    requested_count = max(10, min(requested_count, 25))
    rows = scrape_metacritic_games(min_games=requested_count)

    output = io.StringIO()
    if rows:
        fieldnames = [
            "Game Title",
            "Release Date",
            "Key Features",
            "Platform Availability",
            "Developer Information",
            "Publisher Information",
            "Source URL",
        ]
        writer = csv.DictWriter(output, fieldnames=fieldnames)
        writer.writeheader()
        for row in rows:
            writer.writerow(row)

    response = make_response(output.getvalue())
    response.headers["Content-Disposition"] = "attachment; filename=metacritic_games.csv"
    response.headers["Content-Type"] = "text/csv; charset=utf-8"
    return response


if __name__ == "__main__":
    app.run(debug=True)
