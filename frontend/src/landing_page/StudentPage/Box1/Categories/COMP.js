import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const COMP = () => {
  // Sample dataset of Computer Science books
  const books = [
    { id: 1, title: "Introduction to Algorithms", author: "Thomas H. Cormen", isn: "9780262033848" },
    { id: 2, title: "Artificial Intelligence: A Modern Approach", author: "Stuart Russell", isn: "9780136042594" },
    { id: 3, title: "Clean Code", author: "Robert C. Martin", isn: "9780132350884" },
    { id: 4, title: "Database System Concepts", author: "Abraham Silberschatz", isn: "9780073523323" },
    { id: 5, title: "Operating System Concepts", author: "Abraham Silberschatz", isn: "9781118063330" },
    { id: 6, title: "Computer Networks", author: "Andrew S. Tanenbaum", isn: "9780132126953" },
    { id: 7, title: "The Art of Computer Programming", author: "Donald E. Knuth", isn: "9780201896831" },
    { id: 8, title: "Structure and Interpretation of Computer Programs", author: "Harold Abelson", isn: "9780262510875" },
    { id: 9, title: "Compilers: Principles, Techniques, and Tools", author: "Alfred V. Aho", isn: "9780321486813" },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Computer Science</h1>
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

export default COMP;

