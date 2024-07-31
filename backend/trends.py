import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

def scrape_blog():
    url = "https://www.itscasualblog.com/"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")
    
    articles = soup.find_all("article")
    blog_posts = []

    for article in articles:
        # Extracting title
        title_tag = article.find("h2")
        title = title_tag.get_text(strip=True) if title_tag else "No Title Found"
        
        # Extracting image URL
        image_tag = article.find("img")
        image_url = urljoin(url, image_tag["src"]) if image_tag and "src" in image_tag.attrs else None
        
        # Extracting link (href)
        link_tag = article.find("a", href=True)
        link = urljoin(url, link_tag["href"]) if link_tag and "href" in link_tag.attrs else None

        # Extracting id (if exists as an attribute)
        idd = article.get("id", "No ID Found")
        
        blog_posts.append({
            "title": title,
            "image_url": image_url,
            "link": link,
            "id": idd
        })

    return blog_posts

# Example usage:
blog_posts = scrape_blog()
for post in blog_posts:
    print(post)
