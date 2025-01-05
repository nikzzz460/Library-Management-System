import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MYSTERY = () => {
  // Sample dataset of Mystery books
  const books = [
    { id: 1, title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", isn: "9780307454546" },
    { id: 2, title: "Gone Girl", author: "Gillian Flynn", isn: "9780307588371" },
    { id: 3, title: "Big Little Lies", author: "Liane Moriarty", isn: "9780399165066" },
    { id: 4, title: "The Silent Patient", author: "Alex Michaelides", isn: "9781250301697" },
    { id: 5, title: "The Woman in the Window", author: "A. J. Finn", isn: "9780062678416" },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Mystery Books</h1>
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

export default MYSTERY;
