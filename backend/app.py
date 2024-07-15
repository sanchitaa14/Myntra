from flask import Flask, jsonify
from flask_cors import CORS
from trends import scrape_blog

app = Flask(__name__)
CORS(app)

@app.route('/api/blog_posts', methods=['GET'])
def get_blog_posts():
    blog_posts = scrape_blog()
    return jsonify(blog_posts)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
