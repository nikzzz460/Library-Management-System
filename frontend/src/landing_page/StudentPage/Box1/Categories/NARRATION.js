import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NARRATION = () => {
  // Sample dataset of Narrative books
  const books = [
    { id: 1, title: "The Art of Memoir", author: "Mary Karr", isn: "9780062223066" },
    { id: 2, title: "Becoming", author: "Michelle Obama", isn: "9781524763138" },
    { id: 3, title: "When Breath Becomes Air", author: "Paul Kalanithi", isn: "9780812988406" },
    { id: 4, title: "The Glass Castle", author: "Jeannette Walls", isn: "9780743247542" },
    { id: 5, title: "Educated", author: "Tara Westover", isn: "9780399590504" },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Narrative Books</h1>
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

export default NARRATION;
