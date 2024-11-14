import React from 'react';

const BookTable = () => {
  const books = [
    { name: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", quantity: 1, rate: 99.99 },
    { name: "The Hobbit", author: "J.R.R. Tolkien", quantity: 1, rate: 150.00 },
    { name: "Signals and Systems", author: "Jack Johnson", quantity: 1, rate: 115.00 },
    { name: "The Lord of the Rings: The Fellowship of the Ring", author: "J.R.R. Tolkien", quantity: 1, rate: 230.00 },
    { name: "Guido Jack Guillizzoni", author: "HYM", quantity: 1, rate: 600.00 },
  ];

  return (
    <div className="container mt-3">
      <input type="text" className="form-control mb-3" placeholder="search" />
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name of the book</th>
            <th>Author of the book</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index} className={index === 0 ? 'table-warning' : ''}>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.quantity}</td>
              <td>{book.rate.toFixed(2)}</td>
              <td>
                <button className="btn btn-sm btn-outline-secondary me-2">
                  <i className="bi bi-pencil"></i>
                </button>
                <button className="btn btn-sm btn-outline-danger">
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav>
        <ul className="pagination justify-content-center">
          <li className="page-item"><a className="page-link" href="#">«</a></li>
          <li className="page-item"><a className="page-link" href="#">‹</a></li>
          {[...Array(10)].map((_, i) => (
            <li key={i} className="page-item"><a className="page-link" href="#">{i + 1}</a></li>
          ))}
          <li className="page-item"><a className="page-link" href="#">›</a></li>
          <li className="page-item"><a className="page-link" href="#">»</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default BookTable;
