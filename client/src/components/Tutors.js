import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./stylesheets/Tutors.css";

function Tutors() {
  return (
    <Container className="tutors">
      <Row>
        <Col>
          <div className="page__header">
            <h2>Tutors</h2>
            <h3>
              We have some amazing group of tutors who would like to help you.
            </h3>
            <p>
              You can enroll in one of our packages
            </p>
          </div>
          <hr />
          <div className="package__container">
            <div className="package-gold">
              <Card>
                <Card.Header>
                  <h2>Gold Package</h2>
                </Card.Header>
                <Card.Body>
                  <div className="price__container">
                    <h1>$45</h1>
                  </div>
                  <div className="package__description">
                    <h4>What's Included</h4>
                    <hr />
                    <ul>
                      <li>100% Remote/Onsite</li>
                      <li>Explaining lessons preciously</li>
                      <li>Provide homework daily basis</li>
                      <li>Take quizes/exams weekly</li>
                      <li>Hands on experience</li>
                    </ul>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-warning" size="lg" block>
                    Enroll Now
                  </Button>
                </Card.Footer>
              </Card>
            </div>
            <div className="package-bronze">
              <Card>
                <Card.Header>
                  <h2>Bronze Package</h2>
                </Card.Header>
                <Card.Body>
                  <div className="price__container">
                    <h1>$25</h1>
                  </div>
                  <div className="package__description">
                    <h4>What's included</h4>
                    <hr />
                    <ul>
                      <li>100% Remote/Onsite</li>
                      <li>Explaining lessons preciously</li>
                      <li>Provide homework daily basis</li>
                    </ul>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-warning" size="lg" block>
                    Enroll Now
                  </Button>
                </Card.Footer>
              </Card>
            </div>
            <div className="package-silver">
              <Card>
                <Card.Header>
                  <h2>Silver Package</h2>
                </Card.Header>
                <Card.Body>
                  <div className="price__container">
                    <h1>$30</h1>
                  </div>
                  <div className="package__description">
                    <h4>What's included</h4>
                    <hr />
                    <ul>
                      <li>100% Remote/Onsite</li>
                      <li>Explaining lessons preciously</li>
                      <li>Provide homework daily basis</li>
                      <li>Take quizes/exams weekly</li>
                      
                    </ul>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-secondary" size="lg" block>
                    Enroll Now
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Tutors;
