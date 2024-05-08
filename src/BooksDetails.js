import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetails.css'

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://booksdata.onrender.com/books/${id}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

   if (!book) return <div><h1 className='details-loading'>Getting Details...</h1></div>;

  return (
      <div className="book-details-container">
        <div className="image-container">
          <img src={book.image} alt={book.title} />
        </div>
      <div className="details-container">
        <h1>Title: {book.title}</h1>
        <p><strong>ISBN: </strong>{book.isbn}</p>
        <h3>Author: {book.author}</h3>
        <p><strong>Description:</strong> {book.description}</p>
        <p><strong>Synopsis:</strong> {book.detailedDescription}</p>
        <p><strong>Pages:</strong > {book.pageCount}</p>
      </div>
    </div>
  );
};

export default BookDetails;
