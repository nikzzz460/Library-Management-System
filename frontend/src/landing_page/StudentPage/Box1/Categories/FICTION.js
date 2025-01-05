import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FICTION = () => {
  // Sample dataset of Fiction books
  const books = [
    { id: 1, title: "The Catcher in the Rye", author: "J.D. Salinger", isn: "9780316769488" },
    { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isn: "9780743273565" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", isn: "9780061120084" },
    { id: 4, title: "1984", author: "George Orwell", isn: "9780451524935" },
    { id: 5, title: "Brave New World", author: "Aldous Huxley", isn: "9780060850524" },
    { id: 6, title: "The Road", author: "Cormac McCarthy", isn: "9780307387899" },
    { id: 7, title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", isn: "9780060883287" },
    { id: 8, title: "The Handmaid's Tale", author: "Margaret Atwood", isn: "9780385490818" },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Fiction Books</h1>
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

export default FICTION;
