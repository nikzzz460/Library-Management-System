// ManageDue.js
import React from 'react';

const ManageDue = () => {
  const books = [
    { srNo: '01', bookId: '1001', studDept: 'EnTC', studName: 'Prachi', cnum: 'UEC2021244', status: 'Returned' },
    { srNo: '02', bookId: '1002', studDept: 'EnTC', studName: 'Prachi', cnum: 'UEC2021244', status: 'Due' },
    { srNo: '03', bookId: '1003', studDept: 'EnTC', studName: 'Prachi', cnum: 'UEC2021244', status: 'Returned' },
    { srNo: '04', bookId: '1004', studDept: 'EnTC', studName: 'Prachi', cnum: 'UEC2021244', status: 'Due' },
    { srNo: '05', bookId: '1005', studDept: 'EnTC', studName: 'Prachi', cnum: 'UEC2021244', status: 'Returned' },
    { srNo: '06', bookId: '1006', studDept: 'EnTC', studName: 'Prachi', cnum: 'UEC2021244', status: 'Returned' },
    { srNo: '07', bookId: '1007', studDept: 'EnTC', studName: 'Prachi', cnum: 'UEC2021244', status: 'Returned' },
  ];

  return (
    <div className="container mt-4" style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Manage Due</h2>

      <table className="table table-bordered" style={{ width: '80%', margin: '0 auto', fontSize: '16px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Sr. No</th>
            <th>Book ID</th>
            <th>Stud Dept</th>
            <th>Stud Name</th>
            <th>Student Cnum</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.srNo}</td>
              <td>{book.bookId}</td>
              <td>{book.studDept}</td>
              <td>{book.studName}</td>
              <td>{book.cnum}</td>
              <td>{book.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <nav aria-label="Page navigation example" style={{ textAlign: 'center', marginTop: '20px' }}>
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">4</a></li>
          <li className="page-item"><a className="page-link" href="#">5</a></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ManageDue;
