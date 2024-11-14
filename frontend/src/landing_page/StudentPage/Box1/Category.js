import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const CategoryCards = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Row>
                <Col md={6}>
                  <div className="mb-3">
                    <div className="image-placeholder"></div>
                    <div className="image-placeholder"></div>
                    <div className="image-placeholder"></div>
                    <div className="image-placeholder"></div>
                  </div>
                </Col>
                <Col md={6}>
                  <Card.Title>TECH</Card.Title>
                  <Button variant="outline-secondary" size="sm" className="m-1">COMP</Button>
                  <Button variant="outline-secondary" size="sm" className="m-1">ENTC</Button>
                  <Button variant="outline-secondary" size="sm" className="m-1">IT</Button>
                  <Button variant="outline-secondary" size="sm" className="m-1">MECH</Button>
                  <Button variant="outline-secondary" size="sm" className="m-1">INSTRU</Button>
                  <Button variant="outline-secondary" size="sm" className="m-1">BSH</Button>
                  <Card.Text>100+ books</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Row>
                <Col md={6}>
                  <div className="mb-3">
                    <div className="image-placeholder"></div>
                    <div className="image-placeholder"></div>
                    <div className="image-placeholder"></div>
                    <div className="image-placeholder"></div>
                  </div>
                </Col>
                <Col md={6}>
                  <Card.Title>NON-TECH</Card.Title>
                  <Button variant="outline-secondary" size="sm" className="m-1">FICTION</Button>
                  <Button variant="outline-secondary" size="sm" className="m-1">NOVEL</Button>
                  <Button variant="outline-secondary" size="sm" className="m-1">SELF-HELP</Button>
                  <Button variant="outline-secondary" size="sm" className="m-1">MYSTERY</Button>
                  <Button variant="outline-secondary" size="sm" className="m-1">NARRATIVE</Button>
                  <Card.Text>120+ books</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Row>
                <Col md={6}>
                  <div className="mb-3">
                    <div className="image-placeholder"></div>
                    <div className="image-placeholder"></div>
                    <div className="image-placeholder"></div>
                    <div className="image-placeholder"></div>
                  </div>
                </Col>
                <Col md={6}>
                  <Card.Title>NEWSPAPER</Card.Title>
                  <Button variant="outline-secondary" size="sm" className="m-1">THE HINDU</Button>
                  <Button variant="outline-secondary" size="sm" className="m-1">HINDUSTAN TIMES</Button>
                  <Button variant="outline-secondary" size="sm" className="m-1">TIMES OF INDIA</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryCards;
