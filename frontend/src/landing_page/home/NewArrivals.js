import React from 'react';

const HomePageAbout = () => {
  return (
    <div className="container mt-5 text-center">
      <img
        src="/images/arrivals.jpg" // Corrected relative path
        alt="New Books Just Arrived"
        style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
      />
    </div>
  );
};

export default HomePageAbout;
