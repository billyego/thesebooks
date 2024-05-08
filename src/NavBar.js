import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
    return (
      <nav className="navbar">
        <h1>DeezBUUKS</h1>
        <ul>
          <li>
            <NavLink to="/" exact activeclassname="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/books" activeclassname="active">Books</NavLink>
          </li>
          <li>
            <NavLink to="/newbook" activeclassname="active">Add New Book</NavLink>
          </li>
        </ul>
      </nav>
    );
  };
export default NavBar;
