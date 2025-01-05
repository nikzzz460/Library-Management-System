import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NOVEL = () => {
  // Sample dataset of Novel books
  const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", isn: "9780061120084" },
    { id: 2, title: "1984", author: "George Orwell", isn: "9780451524935" },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen", isn: "9781503290563" },
    { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isn: "9780743273565" },
    { id: 5, title: "Moby Dick", author: "Herman Melville", isn: "9781853260087" },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Novel Books</h1>
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

export default NOVEL;
