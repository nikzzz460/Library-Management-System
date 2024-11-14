import React from 'react';
import { FaSearch, FaPlusCircle } from 'react-icons/fa';


const DueFines = () => {
  const books = [
    {
      name: 'Shruti',
      cnum: 'UEC2021129',
      barcode: 'xysushd',
      bookId: '16364636',
      issueDate: '03/08/2024',
      dueDate: '13/08/2024',
      status: 'Pending',
      fine: '40/-'
    },
     {
      name: 'Rahul Sharma',
      cnum: 'UEC2021135',
      barcode: 'abc1234',
      bookId: '12345678',
      issueDate: '05/08/2024',
      dueDate: '15/08/2024',
      status: 'Overdue',
      fine: '50/-'
    },
    {
      name: 'Ankita Singh',
      cnum: 'UEC2021140',
      barcode: 'def5678',
      bookId: '87654321',
      issueDate: '10/08/2024',
      dueDate: '20/08/2024',
      status: 'Pending',
      fine: '30/-'
    },
    {
      name: 'Vikas Patel',
      cnum: 'UEC2021155',
      barcode: 'ghi91011',
      bookId: '23456789',
      issueDate: '12/08/2024',
      dueDate: '22/08/2024',
      status: 'Returned',
      fine: '0/-'
    },
    {
      name: 'Neha Gupta',
      cnum: 'UEC2021162',
      barcode: 'jkl1213',
      bookId: '34567890',
      issueDate: '15/08/2024',
      dueDate: '25/08/2024',
      status: 'Pending',
      fine: '20/-'
    },
    {
      name: 'Amit Kumar',
      cnum: 'UEC2021178',
      barcode: 'mno1415',
      bookId: '45678901',
      issueDate: '18/08/2024',
      dueDate: '28/08/2024',
      status: 'Pending',
      fine: '60/-'
    },
    {
      name: 'Priya Desai',
      cnum: 'UEC2021183',
      barcode: 'pqr1617',
      bookId: '56789012',
      issueDate: '20/08/2024',
      dueDate: '30/08/2024',
      status: 'Overdue',
      fine: '70/-'
    },
    {
      name: 'Manish Mehta',
      cnum: 'UEC2021190',
      barcode: 'stu1819',
      bookId: '67890123',
      issueDate: '22/08/2024',
      dueDate: '01/09/2024',
      status: 'Pending',
      fine: '10/-'
    },
  ];

  return (
    <div className="container mt-4">
      <div className="input-group mb-3">
        <span className="input-group-text">
          <FaSearch />
        </span>
        <input type="text" className="form-control" placeholder="Search Due Books" />
        <button className="btn btn-outline-secondary" type="button">
          <FaPlusCircle /> Generate
        </button>
      </div>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>NAME</th>
            <th>CNUM</th>
            <th>BARCODE</th>
            <th>BOOKID</th>
            <th>ISSUE DATE</th>
            <th>DUE DATE</th>
            <th>STATUS</th>
            <th>FINE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.name}</td>
              <td>{book.cnum}</td>
              <td>{book.barcode}</td>
              <td>{book.bookId}</td>
              <td>{book.issueDate}</td>
              <td>{book.dueDate}</td>
              <td>{book.status}</td>
              <td>{book.fine}</td>
              <td>
                <button className="btn btn-outline-primary btn-sm">
                  Mark Submit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DueFines;

