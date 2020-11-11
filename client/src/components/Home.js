import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./stylesheets/Home.css";
import Typist from "react-typist";

function Home() {
  return (
    <div className="home">
      <Container fluid>
        {/* Welcome animation */}
        <Row>
          <Col xs={12}>
            <Typist cursor={{ show: false }}>
              <div className="title">
                <p>
                  Welcome to <strong>Development Wise</strong>
                </p>
                <p className="subtitle">A new way to drive your career</p>
              </div>
            </Typist>
          </Col>
        </Row>

        {/* Project Description goes here */}
        <Row>
          <Col xs={12}>
            <div>
              <p></p>
            </div>
          </Col>
        </Row>

        {/* Cards of homepage */}
        <Row className="card__container">
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title>Survey</Card.Title>
              <Card.Text>
              You can take a quick survey and it will help you to guide you on
              proper direction. In order to take the survery please sign up.
              </Card.Text>
              <Button href="/survey" variant="info">
                Learn More
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title>Community</Card.Title>
              <Card.Text>
                Learn how our community could benefit you.
              </Card.Text>
              <Button href="/community" variant="info">
                Learn More
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title>Tutor</Card.Title>
              <Card.Text>
                Are you looking to learn a specific type of code?
                Do you need help with homework or a project?
                Get one of our tutors to help!
                We offer multiple tutor packages!
              </Card.Text>
              <Button href="/tutors" variant="info">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
