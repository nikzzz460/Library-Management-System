import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BSH = () => {
  // Sample dataset of BSH books
  const books = [
    { id: 1, title: "Fundamentals of Electrical Engineering", author: "Leonard S. Bobrow", isn: "9780135821190" },
    { id: 2, title: "Database System Concepts", author: "Abraham Silberschatz", isn: "9780073523323" },
    { id: 3, title: "Operating System Concepts", author: "Abraham Silberschatz", isn: "9781118063330" },
    { id: 4, title: "Computer Networks", author: "Andrew S. Tanenbaum", isn: "9780132126953" },
    { id: 5, title: "The Art of Computer Programming", author: "Donald E. Knuth", isn: "9780201896831" },
    { id: 6, title: "Structure and Interpretation of Computer Programs", author: "Harold Abelson", isn: "9780262510875" },
    { id: 7, title: "Environmental Engineering", author: "Joseph A. Salvato", isn: "9780471185575" },
    { id: 8, title: "Basic Electronics", author: "B.L. Theraja", isn: "9788121927185" },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Basic Science and Humanity </h1>
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

export default BSH;
