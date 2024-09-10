import React, { useState, useEffect } from 'react';

function StudentPageIssuedBooks() {

    const [issuedBooks, setIssuedBooks] = useState([
        { title: "AAA book", issueDate: "03/08/2024", dueDate: "13/08/2024" },
        { title: "BBB book", issueDate: "03/08/2024", dueDate: "13/08/2024" },
        { title: "ABC book", issueDate: "03/08/2024", dueDate: "13/08/2024" },
    ]);

    return (
        <div className="container my-5">
            <h2 className="text-center">Issued Books</h2>

            <table className="table table-bordered border-primary mt-4 text-center">
                <thead className="thead-dark">
                    <tr>
                        <th>Title</th>
                        <th>Issue Date</th>
                        <th>Due Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody id="issuedBooksTable">
                    {issuedBooks.map((book, index) => (
                        <tr key={index}>
                            <td>{book.title}</td>
                            <td>{book.issueDate}</td>
                            <td>{book.dueDate}</td>
                            <td>
                                <button
                                    className="btn btn-primary btn-sm"
                                >
                                    Re-Issue
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        </div>
    );
}

export default StudentPageIssuedBooks;
