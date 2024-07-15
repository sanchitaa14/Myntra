const axios = require('axios');
const cheerio = require('cheerio');

const baseURL = 'https://www.nykaafashion.com';
const url = `${baseURL}/style-files/`;

const fetchFashionTrends = async () => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const trends = [];

    $('.blog-card').each((index, element) => {
      const title = $(element).find('.blog-title').text().trim();
      const image = $(element).find('img').attr('data-src');
      const link = $(element).find('a').attr('href');
      const fullLink = `${baseURL}${link}`;

      trends.push({ title, image, link: fullLink });
    });

    for (let trend of trends) {
      const { data: blogData } = await axios.get(trend.link);
      const $$ = cheerio.load(blogData);
      const description = $$('.blog-content').text().trim();
      trend.description = description;
    }

    return trends;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

module.exports = fetchFashionTrends;
