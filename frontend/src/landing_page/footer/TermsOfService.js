import React from 'react';

const TermsOfService = () => {
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
      <h2 style={headingStyle}>Terms of Service</h2>
      <p style={paragraphStyle}>
        By using the library's management system, you agree to the following terms:
      </p>
      <ol className="list-group list-group-numbered" style={listStyle}>
        <li
          className="list-group-item"
          style={listItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = listItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          All users must register and log in to access library resources.
        </li>
        <li
          className="list-group-item"
          style={listItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = listItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Unauthorized use of another user's account is prohibited.
        </li>
        <li
          className="list-group-item"
          style={listItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = listItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          The library reserves the right to update terms without prior notice.
        </li>
        <li
          className="list-group-item"
          style={listItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = listItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Violating these terms may result in suspension of library privileges.
        </li>
        <li
          className="list-group-item"
          style={listItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = listItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Misuse of library resources may lead to permanent account deactivation.
        </li>
        <li
          className="list-group-item"
          style={listItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = listItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Ensure all borrowed books are returned in the same condition.
        </li>
      </ol>
    </div>
  );
};

export default TermsOfService;
