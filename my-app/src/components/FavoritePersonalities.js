import React from 'react';

const personalitiesData = [
  {
    name: 'Personality 1',
    intro: 'A short intro about Personality 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageSrc: 'personality1.jpg',
  },
  {
    name: 'Personality 2',
    intro: 'A short intro about Personality 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: 'personality2.jpg',
  },
  {
    name: 'Personality 3',
    intro: 'A short intro about Personality 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    imageSrc: 'personality3.jpg',
  },
];

function FavoritePersonalities() {
  return (
    <div className="favorite-personalities">
      <h1>Favorite Personalities</h1>
      <div className="personality-list">
        {personalitiesData.map((personality, index) => (
          <div key={index} className="personality-item">
            <img src={personality.imageSrc} alt={personality.name} />
            <h2>{personality.name}</h2>
            <p>{personality.intro}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritePersonalities;
