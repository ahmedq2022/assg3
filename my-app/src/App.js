// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component
import Home from './components/Home';
import FavoriteCities from './components/FavoriteCities';
import FavoritePersonalities from './components/FavoritePersonalities';
import FavoriteTouristSpots from './components/FavoriteTouristSpots';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer'; // Import the Footer component
import './components/style.css';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite-cities" element={<FavoriteCities />} />
        <Route path="/favorite-personalities" element={<FavoritePersonalities />} />
        <Route path="/favorite-tourist-spots" element={<FavoriteTouristSpots />} />
        <Route path="/contact-page" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
