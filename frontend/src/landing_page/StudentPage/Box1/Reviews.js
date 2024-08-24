import React from 'react';
import { Card, ListGroup, Container, Row, Col } from 'react-bootstrap';

const BookList = () => {
  const books = [
    { name: 'Book Name: ABC', suggestions: 'Suggestions if any' },
    { name: 'Book Name: XYZ', suggestions: 'Suggestions if any' },
  ];

  return (
    <Container>
      {books.map((book, index) => (
        <Card key={index} className="mb-3">
          <Row noGutters>
            <Col md={2} className="d-flex align-items-center justify-content-center">
              <div style={{ width: '80px', height: '100px', backgroundColor: '#ccc' }}></div>
            </Col>
            <Col md={10}>
              <Card.Body>
                <Card.Title>{book.name}</Card.Title>
                <Card.Text>{book.suggestions}</Card.Text>
                <ListGroup horizontal>
                  <ListGroup.Item>★</ListGroup.Item>
                  <ListGroup.Item>☆</ListGroup.Item>
                  <ListGroup.Item>☆</ListGroup.Item>
                  <ListGroup.Item>☆</ListGroup.Item>
                  <ListGroup.Item>☆</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </Container>
  );
};

export default BookList;
