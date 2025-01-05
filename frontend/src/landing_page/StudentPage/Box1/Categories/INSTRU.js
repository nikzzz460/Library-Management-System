import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const INSTRU = () => {
  // Sample dataset of INSTRU books
  const books = [
    { id: 1, title: "Principles of Measurement Systems", author: "John P. Bentley", isn: "9780131741045" },
    { id: 2, title: "Instrumentation for Engineering Measurements", author: "Richard S. Figliola", isn: "9781118972879" },
    { id: 3, title: "Electronic Instrumentation", author: "H. S. Kalsi", isn: "9780070691301" },
    { id: 4, title: "Database System Concepts", author: "Abraham Silberschatz", isn: "9780073523323" },
    { id: 5, title: "Operating System Concepts", author: "Abraham Silberschatz", isn: "9781118063330" },
    { id: 6, title: "Computer Networks", author: "Andrew S. Tanenbaum", isn: "9780132126953" },
    { id: 7, title: "The Art of Computer Programming", author: "Donald E. Knuth", isn: "9780201896831" },
    { id: 8, title: "Structure and Interpretation of Computer Programs", author: "Harold Abelson", isn: "9780262510875" },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Instrumentation </h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Author</th>
            <th>ISN</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default INSTRU;
