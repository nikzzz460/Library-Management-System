import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SELFHELP = () => {
  // Sample dataset of Self-Help books
  const books = [
    { id: 1, title: "The Power of Now", author: "Eckhart Tolle", isn: "9781577314806" },
    { id: 2, title: "Atomic Habits", author: "James Clear", isn: "9780735211292" },
    { id: 3, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", isn: "9780062457714" },
    { id: 4, title: "Think and Grow Rich", author: "Napoleon Hill", isn: "9780449931534" },
    { id: 5, title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", isn: "9780743269513" },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Self-Help Books</h1>
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

export default SELFHELP;
