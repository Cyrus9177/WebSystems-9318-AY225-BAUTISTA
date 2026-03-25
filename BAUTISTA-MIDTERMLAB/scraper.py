import json
import re
import time
import argparse
from datetime import datetime
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://www.metacritic.com"
NOT_AVAILABLE = "Not Available"


class MetacriticScraper:
    def __init__(self):
        self.session = requests.Session()
        self.user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
        self.session.headers.update({"User-Agent": self.user_agent})
        self.min_games = 10
        self.max_pages = 8
        self.request_delay = 0.35
        self.timeout = 20

    def fetch_page(self, url):
        """Fetch a page from the web with polite delays"""
        time.sleep(self.request_delay)
        try:
            response = self.session.get(url, timeout=self.timeout)
            response.raise_for_status()
            return response.text
        except requests.RequestException:
            return None

    def get_json_data(self, soup):
        """Extract JSON structured data from page"""
        try:
            ld_tag = soup.find("script", attrs={"type": "application/ld+json"})
            if ld_tag and ld_tag.string:
                return json.loads(ld_tag.string)
        except:
            pass
        return {}

    def find_field(self, soup, field_name):
        """Find a field value in the HTML"""
        # Look for the field label on the page
        results = []
        
        for text in soup.find_all(string=True):
            if field_name.lower() in text.lower():
                parent = text.parent
                section = parent.find_parent("div", class_=re.compile(r"c-product-details__section"))
                
                if section:
                    # Try to get list items
                    items = section.find_all(class_="c-product-details__section__list-item")
                    if items:
                        for item in items:
                            results.append(item.get_text(strip=True))
                    
                    # Try to get from expandable text
                    if not results:
                        read_more = section.find(class_="c-productDetails_readMore")
                        if read_more:
                            results.append(read_more.get_text(strip=True))
        
        return results

    def clean_values(self, values):
        """Remove empty values and join them"""
        cleaned = [v.strip() for v in values if v and v.strip()]
        if not cleaned:
            return NOT_AVAILABLE
        
        # Remove duplicates while preserving order
        unique = []
        seen = set()
        for v in cleaned:
            if v.lower() not in seen:
                seen.add(v.lower())
                unique.append(v)
        
        return ", ".join(unique)

    def get_game_urls(self, count):
        """Find game URLs from Metacritic browse pages"""
        urls = []
        seen = set()
        
        current_year = datetime.now().year
        
        # Loop through several pages to find games
        for page_num in range(1, self.max_pages + 1):
            browse_url = f"{BASE_URL}/browse/game/?releaseYearMin=1958&releaseYearMax={current_year}&page={page_num}"
            html = self.fetch_page(browse_url)
            
            if not html:
                continue
            
            soup = BeautifulSoup(html, "html.parser")
            
            # Find all game links
            for link in soup.find_all("a", href=True):
                href = link.get("href", "")
                
                # Check if it's a game page
                if re.match(r"^/game/[^/]+/$", href):
                    full_url = urljoin(BASE_URL, href)
                    
                    if full_url not in seen:
                        seen.add(full_url)
                        urls.append(full_url)
                    
                    # Stop when we have enough
                    if len(urls) >= count * 2:
                        return urls
        
        return urls

    def scrape_game(self, game_url):
        """Scrape data from a single game page"""
        html = self.fetch_page(game_url)
        
        # Return empty if page couldn't be fetched
        if not html:
            return {
                "Game Title": NOT_AVAILABLE,
                "Release Date": NOT_AVAILABLE,
                "Key Features": NOT_AVAILABLE,
                "Platform Availability": NOT_AVAILABLE,
                "Developer Information": NOT_AVAILABLE,
                "Publisher Information": NOT_AVAILABLE,
                "Source URL": game_url,
            }
        
        soup = BeautifulSoup(html, "html.parser")
        json_data = self.get_json_data(soup)
        
        # Get title
        title = NOT_AVAILABLE
        h1 = soup.find("h1")
        if h1:
            title = h1.get_text(strip=True)
        
        # Get other fields
        release = self.clean_values(self.find_field(soup, "Initial Release Date"))
        if isinstance(json_data.get("datePublished"), str):
            release = json_data["datePublished"]
        
        platforms = self.clean_values(self.find_field(soup, "Platforms"))
        developer = self.clean_values(self.find_field(soup, "Developer"))
        publisher = self.clean_values(self.find_field(soup, "Publisher"))
        
        # Get genres and description
        genres = self.clean_values(self.find_field(soup, "Genres"))
        description = json_data.get("description", "")
        
        if description:
            features = genres + ", " + description if genres != NOT_AVAILABLE else description
        else:
            features = genres
        
        return {
            "Game Title": title,
            "Release Date": release,
            "Key Features": features,
            "Platform Availability": platforms,
            "Developer Information": developer,
            "Publisher Information": publisher,
            "Source URL": game_url,
        }

    def scrape_games(self, count):
        """Scrape multiple games"""
        # Get game URLs
        game_urls = self.get_game_urls(count)
        
        results = []
        for url in game_urls:
            if len(results) >= count:
                break
            
            game_data = self.scrape_game(url)
            results.append(game_data)
        
        return results


def scrape_metacritic_games(min_games=10):
    """Main function to scrape games"""
    scraper = MetacriticScraper()
    return scraper.scrape_games(min_games)


def main():
    """Command-line interface"""
    parser = argparse.ArgumentParser(description="Scrape games from Metacritic")
    parser.add_argument("--count", type=int, default=10, help="Number of games to scrape")
    parser.add_argument("--output", type=str, default="", help="Save to JSON file")
    
    args = parser.parse_args()
    game_count = max(10, args.count)
    
    # Scrape games
    games = scrape_metacritic_games(game_count)
    
    # Save to file or print
    if args.output:
        with open(args.output, "w", encoding="utf-8") as f:
            json.dump(games, f, ensure_ascii=False, indent=2)
        print(f"Saved {len(games)} games to {args.output}")
    else:
        print(json.dumps(games, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
