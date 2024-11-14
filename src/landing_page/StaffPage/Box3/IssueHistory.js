import React from 'react';
import { FaHome, FaUser, FaCog, FaQuestionCircle, FaFileAlt } from 'react-icons/fa';

const IssueHistory = () => {
    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div className="bg-light" style={{ width: "60px", height: "100vh" }}>
                <div className="d-flex flex-column align-items-center py-3">
                    <div className="my-3">
                        <FaHome size={24} />
                    </div>
                    <div className="my-3">
                        <FaUser size={24} />
                    </div>
                    <div className="my-3">
                        <FaFileAlt size={24} />
                    </div>
                    <div className="my-3">
                        <FaQuestionCircle size={24} />
                    </div>
                    <div className="my-3">
                        <FaCog size={24} />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow-1 p-4">
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3>Issued History</h3>
                </div>

                {/* Table */}
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Book ID</th>
                            <th>Stud Dept</th>
                            <th>Stud Name</th>
                            <th>Student Cnum</th>
                            <th>Status</th>
                            <th>Return Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Sample data, replace with dynamic content */}
                        {Array.from({ length: 7 }, (_, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>100{index + 1}</td>
                                <td>EnTC</td>
                                <td>Prachi</td>
                                <td>UEC2021244</td>
                                <td>Issued</td>
                                <td>12/08/2024</td>
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
}

export default IssueHistory;


