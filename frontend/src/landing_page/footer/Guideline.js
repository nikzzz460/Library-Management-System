import React from 'react';

const Guideline = () => {
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
    fontSize: '2rem',
    fontWeight: 'bold',
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
    fontSize: '1rem',
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
      <h2 style={headingStyle}>Library Guidelines</h2>
      <ul className="list-group list-group-flush" style={listStyle}>
        <li
          className="list-group-item"
          style={listItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = listItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          • Maintain silence in the library premises.
        </li>
        <li
          className="list-group-item"
          style={listItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = listItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          • Carry a valid library card at all times.
        </li>
        <li
          className="list-group-item"
          style={listItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = listItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          • Return borrowed books within the due date to avoid penalties.
        </li>
        
        <li
          className="list-group-item"
          style={listItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = listItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          • Food and drinks are not allowed inside the library.
        </li>
        <li
          className="list-group-item"
          style={listItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = listItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          • Keep mobile phones on silent mode or switched off.
        </li>
        <li
          className="list-group-item"
          style={listItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = listItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          • Personal belongings such as bags should be placed in designated areas.
        </li>
        
        <li
          className="list-group-item"
          style={listItemStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = listItemHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          • Use library computers for academic purposes only.
        </li>
        
      </ul>
    </div>
  );
};

export default Guideline;
