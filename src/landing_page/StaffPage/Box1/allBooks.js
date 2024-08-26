// AllBooks.js
import React, { useState } from 'react';
import { Table, Pagination, FormControl, InputGroup, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AllBooks = () => {
  <Link to="/staff/view-books">View All Books</Link>
    // Sample data for demonstration
    const books = [
        { id: '1001', title: 'Acme Corporation', copies: 10, amount: 'Rs. 2500.00' },
        { id: '1002', title: 'Bravo Solutions', copies: 12, amount: 'Rs. 1200.00' },
        { id: '1003', title: "Charlie's Workshop", copies: 2, amount: 'Rs. 500.00' },
        { id: '1004', title: 'Delta Retail', copies: 8, amount: 'Rs. 750.00' },
        { id: '1005', title: 'Echo Enterprises', copies: 3, amount: 'Rs. 3000.00' },
        { id: '1006', title: 'Foxtrot Media', copies: 4, amount: 'Rs. 1150.00' },
        { id: '1007', title: 'Golf Goods Inc.', copies: 88, amount: 'Rs. 2300.00' },
        { id: '1008', title: 'Hotel Harmony', copies: 63, amount: 'Rs. 900.00' },
        { id: '1009', title: 'India IT Solutions', copies: 13, amount: 'Rs. 600.00' },
        { id: '1010', title: 'Juliett Services', copies: 7, amount: 'Rs. 1850.00' },
        // Add more books as needed
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

    // Search filter logic
    const filteredBooks = currentBooks.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container fluid>
            <Row className="justify-content-center mt-3">
                <Col md={8}>
                    <h1 className="text-center">Books</h1>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search for title, author, etc."
                            aria-label="Search for title, author, etc."
                            aria-describedby="basic-addon2"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </InputGroup>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Sr. No</th>
                                <th>Book ID</th>
                                <th>Book Title</th>
                                <th>Available Copies</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBooks.map((book, index) => (
                                <tr key={book.id}>
                                    <td>{indexOfFirstItem + index + 1}</td>
                                    <td>{book.id}</td>
                                    <td>{book.title}</td>
                                    <td>{book.copies}</td>
                                    <td>{book.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Pagination className="justify-content-center">
                        <Pagination.First onClick={() => paginate(1)} />
                        <Pagination.Prev onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)} />
                        {[...Array(Math.ceil(books.length / itemsPerPage)).keys()].map(number => (
                            <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
                                {number + 1}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next onClick={() => paginate(currentPage < Math.ceil(books.length / itemsPerPage) ? currentPage + 1 : currentPage)} />
                        <Pagination.Last onClick={() => paginate(Math.ceil(books.length / itemsPerPage))} />
                    </Pagination>
                </Col>
            </Row>
        </Container>
    );
};

export default AllBooks;
