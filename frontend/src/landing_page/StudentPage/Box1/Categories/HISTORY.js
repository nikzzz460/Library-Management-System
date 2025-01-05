import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HISTORY = () => {
  // Sample dataset of History books
  const books = [
    { id: 1, title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", isn: "9780062316097" },
    { id: 2, title: "The History of the Ancient World", author: "Susan Wise Bauer", isn: "9780393059748" },
    { id: 3, title: "A People's History of the United States", author: "Howard Zinn", isn: "9780062397347" },
    { id: 4, title: "The Silk Roads: A New History of the World", author: "Peter Frankopan", isn: "9781101912379" },
    { id: 5, title: "The Origins of Political Order", author: "Francis Fukuyama", isn: "9780374227345" },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">History Books</h1>
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

export default HISTORY;
