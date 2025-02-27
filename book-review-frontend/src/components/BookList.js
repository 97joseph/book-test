import React from 'react';

const BookList = ({ books, onSelectBook }) => {
  return (
    <div className="mt-4">
      <h2 className="mb-3">Books</h2>
      <ul className="list-group">
        {books.map((book) => (
          <li
            key={book.id}
            className="list-group-item list-group-item-action"
            onClick={() => onSelectBook(book.id)}
            style={{ cursor: 'pointer' }}
          >
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;