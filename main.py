import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Define output directories
OUTPUT_DIR = "extracted_source"
ASSETS_DIR = os.path.join(OUTPUT_DIR, "assets")
IMAGE_DIR = os.path.join(ASSETS_DIR, "images")
FONT_DIR = os.path.join(ASSETS_DIR, "fonts")
MEDIA_DIR = os.path.join(ASSETS_DIR, "media")
CSS_DIR = os.path.join(ASSETS_DIR, "css")
JS_DIR = os.path.join(ASSETS_DIR, "js")

# Create necessary directories
os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)
os.makedirs(IMAGE_DIR, exist_ok=True)
os.makedirs(FONT_DIR, exist_ok=True)
os.makedirs(MEDIA_DIR, exist_ok=True)
os.makedirs(CSS_DIR, exist_ok=True)
os.makedirs(JS_DIR, exist_ok=True)

def download_file(url, folder):
    """Downloads a file and saves it in the specified folder."""
    try:
        file_name = os.path.basename(urlparse(url).path)
        if not file_name:
            return None  # Ignore empty filenames

        file_path = os.path.join(folder, file_name)
        response = requests.get(url, stream=True, timeout=10)
        response.raise_for_status()

        with open(file_path, "wb") as file:
            for chunk in response.iter_content(1024):
                file.write(chunk)

        return os.path.relpath(file_path, OUTPUT_DIR)  # Return relative path for linking in HTML
    except requests.exceptions.RequestException:
        print(f"[-] Could not download: {url}")
        return None

def fetch_source_code(url):
    """Uses Selenium to load JavaScript-heavy websites like YouTube."""
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    options.add_argument("--disable-gpu")
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=options)

    driver.get(url)
    page_source = driver.page_source
    driver.quit()
    return page_source

def extract_and_replace_assets(html, base_url):
    """Finds and downloads images, fonts, media, CSS, and JS files, updating links in HTML."""
    soup = BeautifulSoup(html, "html.parser")

    # Process images
    for img in soup.find_all("img"):
        if "src" in img.attrs:
            img_url = urljoin(base_url, img["src"])
            local_path = download_file(img_url, IMAGE_DIR)
            if local_path:
                img["src"] = local_path  # Update src in HTML

    # Process video and audio
    for media_tag in soup.find_all(["video", "audio"]):
        for source in media_tag.find_all("source"):
            if "src" in source.attrs:
                media_url = urljoin(base_url, source["src"])
                local_path = download_file(media_url, MEDIA_DIR)
                if local_path:
                    source["src"] = local_path  # Update src in HTML

    # Process CSS files
    for link in soup.find_all("link", {"rel": "stylesheet"}):
        css_url = urljoin(base_url, link["href"])
        css_path = download_file(css_url, CSS_DIR)
        
        if css_path and os.path.exists(css_path):  # Ensure CSS file exists
            link["href"] = css_path  # Update link in HTML
            process_fonts_in_css(css_path, base_url)

    # Process JavaScript files
    for script in soup.find_all("script", src=True):
        js_url = urljoin(base_url, script["src"])
        js_path = download_file(js_url, JS_DIR)
        if js_path:
            script["src"] = js_path  # Update script src in HTML

    return str(soup)

def process_fonts_in_css(css_path, base_url):
    """Finds and downloads font files inside a CSS file, updating their links."""
    if not os.path.exists(css_path):
        print(f"[-] Skipping missing CSS file: {css_path}")
        return

    with open(css_path, "r", encoding="utf-8") as css_file:
        css_content = css_file.read()

    font_urls = [urljoin(base_url, url.strip(")")) for url in css_content.split("url(") if ")" in url]

    for font_url in font_urls:
        if font_url.endswith((".woff", ".woff2", ".ttf", ".otf")):
            local_path = download_file(font_url, FONT_DIR)
            if local_path:
                css_content = css_content.replace(font_url, local_path)

    # Save modified CSS file
    with open(css_path, "w", encoding="utf-8") as css_file:
        css_file.write(css_content)

def main():
    url = input("Enter the website URL: ").strip()

    print(f"[+] Fetching source code from: {url}")
    html = fetch_source_code(url)

    if html:
        print("[✔] Extracting and linking assets (CSS, JS, Images, Fonts, Media)...")
        updated_html = extract_and_replace_assets(html, url)

        # Save final modified HTML
        with open(os.path.join(OUTPUT_DIR, "index.html"), "w", encoding="utf-8") as file:
            file.write(updated_html)

        print("\n[✔] Extraction complete! Check 'extracted_source/' for output.")

if __name__ == "__main__":
    main()
