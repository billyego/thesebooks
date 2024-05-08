import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';


const Card = ({ book, deleteBook, id }) => {
  return (
    <div className="card">
        <h2>{book.title}</h2>
        <img src={book.image} alt={book.title}></img>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      <Link to={`/book/${id}`}><button>Learn More</button></Link>
      <button onClick={() => deleteBook(id)}>Delete Book</button>
    </div>
  );
};

export default Card;
