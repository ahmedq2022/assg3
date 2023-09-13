// src/components/FavoriteCities.js
import React from 'react';
import './style.css'; // Import the CSS file for styling

function FavoriteCities() {
  // Define an array of your favorite cities with their details
  const favoriteCities = [
    {
      name: 'Lahore',
      image: './img/1.jfif', // Add the image file to your project's public directory
      intro: 'A brief introduction about City 1...',
      youtubeVideoUrl: 'https://www.youtube.com/embed/your-video-id', // Optional YouTube video URL
    },
    {
      name: 'Islamabad',
      image: './img/3.jfif',
      intro: 'A brief introduction about City 2...',
      youtubeVideoUrl: '', // No video for this city (leave it empty)
    },
    // Add more favorite cities as needed
  ];

  return (
    <div className="favorite-cities">
      <h1>Favorite Cities</h1>
      <div className="cities-list">
        {favoriteCities.map((city, index) => (
          <div key={index} className="city">
            <img src={city.image} alt={city.name} />
            <h2>{city.name}</h2>
            <p>{city.intro}</p>
            {city.youtubeVideoUrl && (
              <div className="video">
                <iframe
                  title={`YouTube Video - ${city.name}`}
                  width="560"
                  height="315"
                  src={city.youtubeVideoUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteCities;
