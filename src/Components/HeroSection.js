import "../App.css";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import heropicture from "../img/illustration-intro.svg";

const HeroSection = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      {/* Visble on lg and Above */}
      <div className="box md">
        <Container>
          <Row>
            <Col xs={6}>
              <h1 style={{ fontSize: "50px" }}>
                <strong>
                  Bring Everyone together to build better products
                </strong>
              </h1>
              <p style={{ marginTop: "50px", color: "#C3AEB1" }}>
                Manage makes it simple for software team to plan <br />{" "}
                day-to-day tasks while keeping the larger team goal in view.
              </p>
              <Button
                style={{
                  borderRadius: "15px",
                  marginTop: "40px",
                  backgroundColor: "#f25f3a",
                  borderColor: "#f25f3a",
                }}
              >
                Get Started
              </Button>
            </Col>
            <Col xs={6}>
              <img src={heropicture} alt="hero"></img>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Visble on md and Below */}
      <div className="ban mdshow">
        <Container>
          <Row>
            <img
              src={heropicture}
              alt="hero"
              style={{ height: "50%", Width: "50%" }}
            ></img>
          </Row>
          <Row>
            <h4 style={{ fontSize: "40px" }}>
              <strong>Bring Everyone together to build better products</strong>
            </h4>
            <p style={{ marginTop: "50px", color: "#C3AEB1" }}>
              Manage makes it simple for software team to plan <br /> day-to-day
              tasks while keeping the larger team goal in view.
            </p>
            <div
              style={{
                textAlign: "center",
              }}
            >
              <Button
                style={{
                  borderRadius: "15px",
                  marginTop: "40px",
                  backgroundColor: "#f25f3a",
                  borderColor: "#f25f3a",
                  width: "120px",
                  height: "40px",
                }}
              >
                Get Started
              </Button>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;
