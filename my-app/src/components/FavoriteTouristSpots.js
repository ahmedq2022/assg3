// src/components/FavoriteTouristSpots.js
import React from 'react';
import './style.css'; // Import the CSS file for styling

function FavoriteTouristSpots() {
  // Define an array of your favorite tourist spots with their details
  const favoriteTouristSpots = [
    {
      name: 'Gwadar ',
      image: './img/gwadar.jfif', // Add the image file to your project's public directory
      intro: 'A brief introduction about Tourist Spot 1...',
      youtubeVideoUrl: 'https://www.youtube.com/embed/your-video-id', // Optional YouTube video URL
    },
    {
      name: 'Hunza',
      image: './img/hunza',
      intro: 'A brief introduction about Tourist Spot 2...',
      youtubeVideoUrl: '', // No video for this spot (leave it empty)
    },
    // Add more favorite tourist spots as needed
  ];

  return (
    <div className="favorite-tourist-spots">
      <h1>Favorite Tourist Spots</h1>
      <div className="spots-list">
        {favoriteTouristSpots.map((spot, index) => (
          <div key={index} className="spot">
            <img src={spot.image} alt={spot.name} />
            <h2>{spot.name}</h2>
            <p>{spot.intro}</p>
            {spot.youtubeVideoUrl && (
              <div className="video">
                <iframe
                  title={`YouTube Video - ${spot.name}`}
                  width="560"
                  height="315"
                  src={spot.youtubeVideoUrl}
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

export default FavoriteTouristSpots;
