# Metacritic Game Scraper (Web-Based)

This project scrapes live data from Metacritic and displays structured results in a responsive web interface with table layout, search/filter functionality, and multiple export options.

## ✅ Requirements Met

### 1️⃣ Scraping Module
- ✅ Accepts base URL input (hardcoded)
- ✅ Extracts all required data fields
- ✅ Handles missing values gracefully ("Not Available" fallback)
- ✅ Avoids scraping login-protected areas (public game pages only)

### 2️⃣ Data Storage
- ✅ **JSON file** – Native Python dict serialization
- ✅ **CSV file** – Full CSV export via `/export/csv` endpoint

### 3️⃣ Web Interface
- ✅ **Table layout** – Clean, scrollable game table
- ✅ **Search/filter functionality** – Real-time filtering by title, developer, platform
- ✅ **Responsive design** – Mobile-friendly CSS
- ✅ **Proper UI structure** – Header, content section, footer
- ✅ **Shows 10+ games** – 10–25 games configurable

### 🛠 Technology Stack (Python)
- ✅ **Requests** – HTTP client
- ✅ **BeautifulSoup** – HTML parsing
- ✅ **Flask** – Web backend

## Extracted Fields

For each game, the system extracts:

- Game Title
- Release Date
- Key Features (genres + description)
- Platform Availability
- Developer Information
- Publisher Information

If a field is missing, the value is automatically set to `Not Available`.

## Ethical Scraping

This scraper uses practical safeguards:

- Standard browser `User-Agent` header
- Request timeouts (20 seconds)
- Polite request delay (0.35 seconds between requests)
- No hardcoded game records
- Respects robots.txt when accessible

## Setup

From the workspace root:

```bash
pip install -r metacritic/requirements.txt
```

## Run the Web App

From the workspace root:

```bash
python metacritic/app.py
```

Open: **http://127.0.0.1:5000/**

## Features

### Web Interface
- **Scrape Button** – Fetch 10–25 games from Metacritic
- **Search Box** – Filter games by title, developer, platform, or publisher (real-time)
- **JSON API Button** – View raw data as JSON
- **CSV Download Button** – Export all games as CSV file
- **Live Row Counter** – Shows filtered vs. total games

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Web interface (HTML table) |
| `/api/games?count=10` | GET | JSON API response |
| `/export/csv?count=10` | GET | CSV file download |

`count` parameter is clamped to 10–25.

## Command-Line Usage

Run the scraper directly:

```bash
python metacritic/scraper.py --count 10 --output games.json
python metacritic/scraper.py --help
```

## Example Output

```json
[
  {
    "Game Title": "Crimson Desert",
    "Release Date": "Mar 19, 2026",
    "Key Features": "Open-World Action, ...",
    "Platform Availability": "PC, PlayStation 5, Xbox Series X",
    "Developer Information": "Pearl Abyss",
    "Publisher Information": "Pearl Abyss",
    "Source URL": "https://www.metacritic.com/game/crimson-desert/"
  }
]
```
