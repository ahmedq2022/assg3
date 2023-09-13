import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/favorite-personalities">Favorite Personalities</Link>
        </li>
        <li className="navbar-item">
          <Link to="/favorite-cities">Favorite Cities</Link>
        </li>
        <li className="navbar-item">
          <Link to="/favorite-tourist-spots">Favorite Tourist Spots</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
