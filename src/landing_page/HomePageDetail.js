import React from 'react';

const HomePageDetail = () => {
  return (
    <div style={{ marginTop: '40px', padding: '0 15px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: '0 0 66.67%', maxWidth: '66.67%' }}>
          
          <div style={{ position: 'relative', paddingBottom: '40.25%', height: 0, overflow: 'hidden', maxWidth: '80%', background: '#000' }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="About Us Video" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
        <div style={{ flex: '0 0 33.33%', maxWidth: '33.33%', paddingLeft: '15px' }}>
        
          <h2 style={{ marginBottom: '40px', fontSize: '30px', fontWeight: 'bold', fontStyle:'inherit', color:' Dark Blue'}}>ABOUT US</h2>
          <p>
          Welcome to the Library! We’re dedicated to supporting your learning and exploration with a diverse collection of books, e-books, and digital resources. Our library offers a welcoming space for all ages, featuring innovative technology, community programs, and personalized assistance from our friendly staff. Founded in 1998, we strive to inspire curiosity and promote lifelong learning. Whether you’re here for research, relaxation, or recreation, we’re committed to enhancing your experience and fostering a love for reading. Join us in discovering and enjoying the wealth of knowledge we offer!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePageDetail;