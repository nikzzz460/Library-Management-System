import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Form, InputGroup } from 'react-bootstrap';

const BookTable = () => {
  const books = [
    { name: 'AAA', status: 'Reserved', quantity: 1 },
    { name: 'ABB', status: 'Reserved', quantity: 1 },
    { name: 'BBB', status: 'Reserved', quantity: 1 },
    { name: 'ABA', status: 'Reserved', quantity: 1 },
  ];

  return (
    <div className="container mt-3">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name of the book</th>
            <th>Status</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.name}</td>
              <td>{book.status}</td>
              <td>{book.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BookTable;
