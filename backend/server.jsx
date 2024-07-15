const express = require('express');
const fetchFashionTrends = require('./scraper');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/trends', async (req, res) => {
  const trends = await fetchFashionTrends();
  res.json(trends);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
