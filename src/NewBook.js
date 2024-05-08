import React, { useState } from 'react';
import './NewForm.css'


function NewBook({ books, setBooks }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [detailedDescription, setDetailedDescription] = useState('');
  const [id, setId] = useState('');
  const [isbn, setIsbn] = useState('');
  const [pageCount, setPageCount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://booksdata.onrender.com/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id, title, author, image, description, detailedDescription, isbn, pageCount }),
      });
      if (response.ok) {
        alert('Book added successfully');
        setTitle('');
        setAuthor('');
        setImage('');
        setDescription('');
        setDetailedDescription('');
        setId('');
        setIsbn('');
        setPageCount('');
        setBooks([...books, {id, title, author, image, description, detailedDescription, isbn, pageCount}]);
      }
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="id">ID:</label>
      <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} placeholder="ID" required />

      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />

      <label htmlFor="title">ISBN:</label>
      <input type="text" id="isbn" value={isbn} onChange={(e) => setIsbn(e.target.value)} placeholder="ISBN" required />

      <label htmlFor="title">Page Count:</label>
      <input type="text" id="pageCount" value={pageCount} onChange={(e) => setPageCount(e.target.value)} placeholder="Page Count" required />

      <label htmlFor="author">Author:</label>
      <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />

      <label htmlFor="image">Image URL:</label>
      <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" required />

      <label htmlFor="description">Description:</label>
      <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required></textarea>

      <label htmlFor="detailedDescription">Detailed Description:</label>
      <textarea id="detailedDescription" value={detailedDescription} onChange={(e) => setDetailedDescription(e.target.value)} placeholder="Detailed Description" required></textarea>

      <button type="submit">Add Book</button>
    </form>
  );
};

export default NewBook;
