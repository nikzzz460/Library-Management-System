import React from 'react';

const ReturnBooks = () => {
  const books = [
    {
      srNo: '01',
      bookId: '8656',
      studDept: 'EnTC',
      studName: 'Shruti',
      cnum: 'UEC2021129',
      bookStatus: 'Returned',
      fineStatus: 'None',
      time: '10.25'
    },
    {
      srNo: '02',
      bookId: '8674',
      studDept: 'CSE',
      studName: 'Aarav',
      cnum: 'UEC2021130',
      bookStatus: 'Returned',
      fineStatus: 'Late Fee',
      time: '10.30'
    },
    {
      srNo: '03',
      bookId: '8642',
      studDept: 'IT',
      studName: 'Mira',
      cnum: 'UEC2021131',
      bookStatus: 'Returned',
      fineStatus: 'None',
      time: '11.00'
    },
    {
      srNo: '04',
      bookId: '8621',
      studDept: 'Mech',
      studName: 'Rohan',
      cnum: 'UEC2021132',
      bookStatus: 'Returned',
      fineStatus: 'None',
      time: '11.15'
    },
    {
      srNo: '05',
      bookId: '8690',
      studDept: 'EnTC',
      studName: 'Sara',
      cnum: 'UEC2021133',
      bookStatus: 'Returned',
      fineStatus: 'Late Fee',
      time: '11.20'
    }
  ];

  return (
    <div className="container mt-4">
      <h2>Return Books</h2>

      {books.length === 0 ? (
        <p>No books to display</p>
      ) : (
        <table className="table table-bordered mt-4">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Book ID</th>
              <th>Stud Dept</th>
              <th>Stud Name</th>
              <th>Cnum</th>
              <th>Book Status</th>
              <th>Fine Status</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.bookId}>
                <td>{book.srNo}</td>
                <td>{book.bookId}</td>
                <td>{book.studDept}</td>
                <td>{book.studName}</td>
                <td>{book.cnum}</td>
                <td>{book.bookStatus}</td>
                <td>{book.fineStatus}</td>
                <td>{book.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <button className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          <li className="page-item active">
            <button className="page-link">1</button>
          </li>
          <li className="page-item">
            <button className="page-link">2</button>
          </li>
          <li className="page-item">
            <button className="page-link">3</button>
          </li>
          <li className="page-item">
            <button className="page-link">4</button>
          </li>
          <li className="page-item">
            <button className="page-link">5</button>
          </li>
          <li className="page-item">
            <button className="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ReturnBooks;

