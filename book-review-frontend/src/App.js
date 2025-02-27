import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import BookReviews from './components/BookReviews';
import './App.css'; // Import custom CSS

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    if (selectedBookId) {
      fetchReviews(selectedBookId);
    }
  }, [selectedBookId]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:5000/books');
    setBooks(response.data);
  };

  const fetchReviews = async (bookId) => {
    const response = await axios.get(`http://localhost:5000/books/${bookId}/reviews`);
    setReviews(response.data);
  };

  const handleAddBook = async (title, author) => {
    await axios.post('http://localhost:5000/books', { title, author });
    fetchBooks();
  };

  const handleAddReview = async (reviewer, rating, comment) => {
    await axios.post(`http://localhost:5000/books/${selectedBookId}/reviews`, {
      reviewer,
      rating,
      comment,
    });
    fetchReviews(selectedBookId);
  };

  return (
    <div className="container">
      <h1>Parousia Book Review</h1>
      <AddBookForm onAddBook={handleAddBook} />
      <BookList books={books} onSelectBook={setSelectedBookId} />
      {selectedBookId && (
        <BookReviews
          reviews={reviews}
          onAddReview={handleAddReview}
        />
      )}
    </div>
  );
};

export default App;