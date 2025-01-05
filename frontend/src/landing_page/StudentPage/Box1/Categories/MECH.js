import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MECH= () => {
  // Sample dataset of MECH books
  const books = [
    { id: 1, title: "Mechanical Engineering Design", author: "J.E. Shigley", isn: "9780073398204" },
    { id: 2, title: "Fluid Mechanics", author: "Frank M. White", isn: "9780073398273" },
    { id: 3, title: "Engineering Mechanics: Dynamics", author: "J.L. Meriam", isn: "9781118289792" },
    { id: 4, title: "Database System Concepts", author: "Abraham Silberschatz", isn: "9780073523323" },
    { id: 5, title: "Operating System Concepts", author: "Abraham Silberschatz", isn: "9781118063330" },
    { id: 6, title: "Computer Networks", author: "Andrew S. Tanenbaum", isn: "9780132126953" },
    { id: 7, title: "The Art of Computer Programming", author: "Donald E. Knuth", isn: "9780201896831" },
    { id: 8, title: "Structure and Interpretation of Computer Programs", author: "Harold Abelson", isn: "9780262510875" },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Mecanical </h1>
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

export default MECH;
