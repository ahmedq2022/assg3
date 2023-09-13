// src/components/Home.js
import React from 'react';
import './style.css'; // Import the CSS file for styling

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <h1>Welcome to My Personal Website</h1>
        <p>Explore my hobbies, skills, ambitions, and more!</p>
      </div>

      <div className="content-section">
        <h2>About Me</h2>
        <p>
          I am a passionate developer with expertise in web development. My ambition is to
          create amazing digital experiences that solve real-world problems.
        </p>
      </div>

      {/* Add more sections with your personal content here */}
    </div>
  );
}

export default Home;
