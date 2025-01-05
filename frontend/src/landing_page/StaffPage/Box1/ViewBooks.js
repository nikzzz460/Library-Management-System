// ViewBooks.js
// import React from 'react';


// const ViewBooks = () => {
//     return (
//         <div>
//             <h1>View Book</h1>
//             {/* Add content to view a specific book */}
//         </div>
//     );
// }

// export default ViewBooks;

import React from 'react';
import { FaHome, FaFileAlt, FaQuestionCircle, FaCog, FaUser } from 'react-icons/fa';


const ViewBooks = () => {
    return (
        <div className="container my-4"> {/* Add 'container' to center and add spacing */}
            {/* Main Content */}
            <div className="p-4 border rounded"> {/* Optional: Add border and padding */}
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3>All Books</h3>
                    <button className="btn btn-dark">+ New</button>
                </div>

                {/* Table */}
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Book ID</th>
                            <th>Book Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Sample data, replace with dynamic content */}
                        {Array.from({ length: 6 }, (_, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>100{index + 1}</td>
                                <td>Sample Book {index + 1}</td>
                                <td>
                                    <a href="#" className="mx-2">View</a>
                                    <a href="#" className="mx-2">Edit</a>
                                    <a href="#" className="mx-2 text-danger">Delete</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <nav>
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#">
                                &laquo;
                            </a>
                        </li>
                        {Array.from({ length: 10 }, (_, index) => (
                            <li className="page-item" key={index}>
                                <a className="page-link" href="#">
                                    {index + 1}
                                </a>
                            </li>
                        ))}
                        <li className="page-item">
                            <a className="page-link" href="#">
                                &raquo;
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default ViewBooks;

