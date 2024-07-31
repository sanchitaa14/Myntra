const express = require('express');
const app = express();
const port = 3000;

// Mock data for trends
const trends = [
  {
    id: 1,
    name: 'Boho Chic',
    description: 'Embrace the free-spirited vibe with boho chic fashion, featuring flowy dresses and earthy tones.',
    image: 'https://example.com/images/boho-chic.jpg',
    products: [
      { id: 101, name: 'Boho Dress', price: 49.99 },
      { id: 102, name: 'Fringe Jacket', price: 79.99 }
    ]
  },
  // More trends
];

app.get('/api/trends', (req, res) => {
  res.json(trends);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
