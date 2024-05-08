import React, { useEffect, useState } from 'react';
import Card from './Card';
import NewBook from './NewBook';
import Search from './Search';
import './Collection.css';


function CollectionOfCards() {
  const [books, setBooks] = useState([]);
  const [showNewBookForm, setShowNewBookForm] = useState(true);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetch('https://booksdata.onrender.com/books')
  .then(res => res.json())
  .then(setBooks)
  .finally(() => setLoading(false));
  }, []);

  const deleteBook = (id) => {
    fetch(`https://booksdata.onrender.com/books/${id}`, {
      method: 'DELETE',
    })
  .then(() => {
        setBooks(books.filter(book => book.id!== id));
        alert('Book deleted successfully');
      })
  .catch(error => console.error('Error deleting book:', error));
  };

  const toggleNewBookForm = () => {
    setShowNewBookForm(!showNewBookForm);
  };


  if (loading) return <div><h1 className='collection-loading'>Getting Your Books...</h1></div>
 
 
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(filter.toLowerCase())
 );

 
    return (
      <div className="container">
        <Search filter={filter} setFilter={setFilter} /> 
        <button className="random-btn" onClick={toggleNewBookForm}>{showNewBookForm? 'Add Book' : 'Collapse Form'}</button>
        {!showNewBookForm && <NewBook books={books} setBooks={setBooks} />}
        <div className='row'>

        {filteredBooks.map(book => (
          <Card key={book.id} book={book} deleteBook={deleteBook} id={book.id} />
        ))}
        </div>
      </div>
    );
};

export default CollectionOfCards;
