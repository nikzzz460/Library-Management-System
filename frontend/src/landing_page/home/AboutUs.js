import React from 'react';

const HomePageDetail = () => {
  return (
    <div style={{ marginTop: '20px', padding: '0 15px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* Video Section */}
        <div style={{ flex: '0 0 55%', maxWidth: '55%', paddingLeft: '25px' }}> {/* Added paddingLeft */}
          <div
            style={{
              position: 'relative',
              paddingBottom: '40.25%',
              height: 0,
              overflow: 'hidden',
              maxWidth: '90%', // Adjusted to make the video container a bit wider
              background: '#000',
            }}
          >
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0.9, // Keep the iframe at the left edge of its container
                width: '100%',
                height: '100%',
              }}
              src="..\images\LibraryVideo.mp4"
              title="About Us Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* About Us Section */}
        <div style={{ flex: '0 0 30%', maxWidth: '50%', paddingLeft: '35px' }}> {/* Reduced padding */}
         
          <h2
          
            style={{
              marginBottom: '20px',
              fontSize: '30px',
              fontWeight: 'bold',
              fontStyle: 'inherit',
              color: 'DarkBlue',
              fontFamily: 'Cambria, serif',
            }}
          >
            ABOUT US
          </h2>
          <p style={{ fontFamily: 'Cambria, serif' }}>
            Welcome to the Library! We’re dedicated to supporting your learning and exploration with a diverse collection of books, e-books, and digital resources. Our library offers a welcoming space for all ages, featuring innovative technology, community programs, and personalized assistance from our friendly staff. Founded in 1998, we strive to inspire curiosity and promote lifelong learning. Whether you’re here for research, relaxation, or recreation, we’re committed to enhancing your experience and fostering a love for reading. Join us in discovering and enjoying the wealth of knowledge we offer!
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default HomePageDetail;
