import React from 'react';

const LibraryContact = () => {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '3rem',
    padding: '2rem',
    backgroundColor: '#f7f9fc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    color: '#2c3e50',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '1.5rem',
  };

  const listStyle = {
    display: 'inline-block',
    textAlign: 'left',
    margin: '0 auto',
    padding: '1.5rem',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontSize: '1.2rem',
    fontWeight: '500',
    color: '#333',
    lineHeight: '1.8',
  };

  const listItemStyle = {
    marginBottom: '1rem',
  };

  const contactIconStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#2980b9',
    marginRight: '10px',
  };

  return (
    <div className="container" style={containerStyle}>
      <h2 style={headingStyle}>Contact Us</h2>
      <p style={paragraphStyle}>
        If you have any queries or need assistance, feel free to reach out:
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <span style={contactIconStyle}>📧</span>Email: <a href="mailto:support@librarysystem.com">support@librarysystem.com</a>
        </li>
        <li style={listItemStyle}>
          <span style={contactIconStyle}>📞</span>Phone: <a href="tel:+1234567890">+123-456-7890</a>
        </li>
        <li style={listItemStyle}>
          <span style={contactIconStyle}>📍</span>Address: 123 Library Lane, College Campus, City, Country
        </li>
      </ul>
    </div>
  );
};

export default LibraryContact;
