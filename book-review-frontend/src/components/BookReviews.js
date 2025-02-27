import React, { useState } from 'react';

const BookReviews = ({ reviews, onAddReview }) => {
  const [reviewer, setReviewer] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReview(reviewer, rating, comment);
    setReviewer('');
    setRating(0);
    setComment('');
  };

  return (
    <div className="mt-4">
      <h2>Reviews</h2>
      <ul className="list-group mb-4">
        {reviews.map((review) => (
          <li key={review.id} className="list-group-item">
            <strong>{review.reviewer}</strong> ({review.rating}/5): {review.comment}
          </li>
        ))}
      </ul>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Add a Review</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                value={reviewer}
                onChange={(e) => setReviewer(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Rating (1-5)"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                min="1"
                max="5"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Your Review"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookReviews;