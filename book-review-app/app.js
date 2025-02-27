const express = require('express');
const { Book, Review } = require('./models');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// 1. Get all books
app.get('/books', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Add a new book
app.post('/books', async (req, res) => {
  try {
    const { title, author } = req.body;
    const book = await Book.create({ title, author });
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Add a review for a book
app.post('/books/:id/reviews', async (req, res) => {
  try {
    const { reviewer, rating, comment } = req.body;
    const bookId = req.params.id;
    const review = await Review.create({ reviewer, rating, comment, bookId });
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Get all reviews for a book
app.get('/books/:id/reviews', async (req, res) => {
  try {
    const bookId = req.params.id;
    const reviews = await Review.findAll({ where: { bookId } });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});