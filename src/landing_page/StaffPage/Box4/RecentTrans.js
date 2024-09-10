// RecentTrans.js
import React from 'react';
import { FaSearch, FaPlusCircle } from 'react-icons/fa';


const RecentTrans = () => {
  const books = [
    {
      name: 'Shruti',
      cnum: 'UEC2021129',
      barcode: 'xysushd',
      bookId: '16364636',
      issueDate: '03/08/2024',
      dueDate: '13/08/2024',
      status: 'Paid',
      time: '11.10',
      amt: '40/-'
    },
    {
        name: 'Priya Desai',
        cnum: 'UEC2021183',
        barcode: 'pqr1617',
        bookId: '56789012',
        issueDate: '20/08/2024',
        dueDate: '30/08/2024',
        status: 'Paid',
        time: '12.51',
        amt: '70/-'
      },
     {
        name: 'Manish Mehta',
        cnum: 'UEC2021190',
        barcode: 'stu1819',
        bookId: '67890123',
        issueDate: '22/08/2024',
        dueDate: '01/09/2024',
        status: 'Paid',
        time: '9.10',
        amt: '10/-'
      },
      {
        name: 'Rahul Sharma',
        cnum: 'UEC2021135',
        barcode: 'abc1234',
        bookId: '12345678',
        issueDate: '05/08/2024',
        dueDate: '15/08/2024',
        status: 'Overdue',
        time: '11.45',
        amt: '50/-'
      },
      {
        name: 'Ankita Singh',
        cnum: 'UEC2021140',
        barcode: 'def5678',
        bookId: '87654321',
        issueDate: '10/08/2024',
        dueDate: '20/08/2024',
        status: 'Pending',
        time: '14.15',
        amt: '30/-'
      },
      {
        name: 'Vikas Patel',
        cnum: 'UEC2021155',
        barcode: 'ghi91011',
        bookId: '23456789',
        issueDate: '12/08/2024',
        dueDate: '22/08/2024',
        status: 'Returned',
        time: '16.00',
        amt: '0/-'
      },
      {
        name: 'Neha Gupta',
        cnum: 'UEC2021162',
        barcode: 'jkl1213',
        bookId: '34567890',
        issueDate: '15/08/2024',
        dueDate: '25/08/2024',
        status: 'Pending',
        time: '9.45',
        amt: '20/-'
      },
      {
        name: 'Amit Kumar',
        cnum: 'UEC2021178',
        barcode: 'mno1415',
        bookId: '45678901',
        issueDate: '18/08/2024',
        dueDate: '28/08/2024',
        status: 'Pending',
        time: '8.30',
        amt: '60/-'
      },
      {
        name: 'Priya Desai',
        cnum: 'UEC2021183',
        barcode: 'pqr1617',
        bookId: '56789012',
        issueDate: '20/08/2024',
        dueDate: '30/08/2024',
        status: 'Paid',
        time: '12.51',
        amt: '70/-'
      },
      {
        name: 'Manish Mehta',
        cnum: 'UEC2021190',
        barcode: 'stu1819',
        bookId: '67890123',
        issueDate: '22/08/2024',
        dueDate: '01/09/2024',
        status: 'Paid',
        time: '9.10',
        amt: '10/-'
      },
      {
        name: 'Rohit Verma',
        cnum: 'UEC2021201',
        barcode: 'vwx2021',
        bookId: '78901234',
        issueDate: '24/08/2024',
        dueDate: '03/09/2024',
        status: 'Pending',
        time: '13.25',
        amt: '30/-'
      },
      
        
    // Additional entries can be added here
  ];

  return (
    <div className="container mt-4">
      {/* Search Bar */}
      <div className="input-group mb-3">
        <span className="input-group-text">
          <FaSearch />
        </span>
        <input type="text" className="form-control" placeholder="Search Books or Member" />
        <button className="btn btn-outline-secondary" type="button">
          <FaPlusCircle /> Generate
        </button>
      </div>

      {/* Action Buttons */}
      <div className="mb-3">
        <button className="btn btn-dark me-2">+ New</button>
        <button className="btn btn-dark me-2">+ Edit</button>
        <button className="btn btn-outline-dark me-2">Filter</button>
        <button className="btn btn-outline-dark">View All</button>
      </div>

      {/* Table */}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>CNUM</th>
            <th>BARCODE</th>
            <th>BOOKID</th>
            <th>ISSUE DATE</th>
            <th>DUE DATE</th>
            <th>STATUS</th>
            <th>TIME</th>
            <th>AMT</th>
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
              <td>{book.time}</td>
              <td>{book.amt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTrans;
