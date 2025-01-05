import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Logout = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light"
      style={{ textAlign: 'center', marginTop: '-50px' }} // Moves the content slightly upward
    >
      <FaCheckCircle size={100} className="text-success mb-4" />
      <h2 className="text-success">You are logged out!</h2>
      <p className="text-muted">
        Thank you for using the Library Management System. We hope to see you again soon!
      </p>
      <a href="/" className="btn btn-primary mt-3">
        Click here to login again
      </a>
    </div>
  );
};

export default Logout;
