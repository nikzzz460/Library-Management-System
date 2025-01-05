import React from "react";

function Profile() {
  const issuedBooks = [
    {
      title: "Database Management Systems",
      issueDate: "2025-01-01",
      returnDate: "2025-01-16",
    },
  ];

  const issueHistory = [
    { title: "Computer Networks", issueDate: "2024-12-10", returnDate: "2024-12-24" },
    { title: "Operating Systems", issueDate: "2024-11-20", returnDate: "2024-12-04" },
    { title: "Digital Logic Design", issueDate: "2024-10-01", returnDate: "2024-10-15" },
  ];

  return (
    <div className="container mt-5" style={{ marginBottom: "80px" }}>
      {/* Profile Header */}
      <div className="row mb-4">
        {/* Profile Picture */}
        <div className="col-md-3 text-center">
          <img
            src="..\images\Prachi.jpeg" // Replace this with the actual path to your image
            alt="Profile"
            className="rounded-circle img-fluid"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        {/* Student Details */}
        <div className="col-md-9">
          <h2 className="mb-3">Prachi Parihar</h2>
          <p><strong>Roll No:</strong> UEC2021244</p>
          <p><strong>Branch:</strong> Electronics and Telecommunication</p>
          <p><strong>Academic Year:</strong> Final Year</p>
          <p><strong>College:</strong> MKSSS's Cummins College of Engineering for Women, Karvenagar, Pune</p>
        </div>
      </div>

      {/* Currently Issued Book */}
      <div className="card mb-4">
        <div className="card-header bg-warning text-dark">
          <strong>Currently Issued Book</strong>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Book Title</th>
                <th>Issue Date</th>
                <th>Return Date</th>
              </tr>
            </thead>
            <tbody>
              {issuedBooks.map((book, index) => (
                <tr key={index}>
                  <td>{book.title}</td>
                  <td>{book.issueDate}</td>
                  <td>{book.returnDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Issue History */}
      <div className="card mb-5" style={{ borderBottom: "2px solid #007bff" }}>
        <div className="card-header bg-info text-white">
          <strong>Issue History</strong>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Book Title</th>
                <th>Issue Date</th>
                <th>Return Date</th>
              </tr>
            </thead>
            <tbody>
              {issueHistory.map((history, index) => (
                <tr key={index}>
                  <td>{history.title}</td>
                  <td>{history.issueDate}</td>
                  <td>{history.returnDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
