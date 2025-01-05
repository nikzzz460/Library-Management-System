import React from 'react';

const PrivacyPolicy = () => {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '3rem',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    color: '#00695c',
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
  };

  const listItemStyle = {
    fontSize: '1.2rem',
    fontWeight: '500',
    color: '#333',
    padding: '0.75rem',
    borderBottom: '1px solid #e0e0e0',
    transition: 'all 0.3s ease',
  };

  const listItemHoverStyle = {
    backgroundColor: '#f1f1f1',
  };

  return (
    <div className="container" style={containerStyle}>
      <h2 style={headingStyle}>Privacy Policy</h2>
      <p style={paragraphStyle}>
        We are committed to protecting your privacy. Here's how we handle your data:
      </p>
      <ul className="list-group list-group-flush" style={listStyle}>
        <li
          className="list-group-item"
          style={listItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = listItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          • Your personal details are used only for library operations.
        </li>
        <li
          className="list-group-item"
          style={listItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = listItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          • We use facial recognition data solely for authentication purposes.
        </li>
        <li
          className="list-group-item"
          style={listItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = listItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          • We do not share your data with third parties without consent.
        </li>
        <li
          className="list-group-item"
          style={listItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = listItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          • Data is securely stored and encrypted to prevent unauthorized access.
        </li>
        <li
          className="list-group-item"
          style={listItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = listItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          • You have the right to access, modify, or delete your personal data.
        </li>
        <li
          className="list-group-item"
          style={listItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = listItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          • Regular audits are conducted to ensure data security compliance.
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
