import "../App.css";
import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

const Banner = () => {
  return (
    <div
      className="image"
      style={{
        backgroundColor: "#f25f3a",
        marginTop: "50px",
        height: "200px ",
      }}
    >
      <div className="box sm">
        <Container>
          <Row style={{ padding: "40px" }}>
            <Col>
              <h1 style={{ color: "white" }}>
                <strong>Simplify how your team works today</strong>
              </h1>
            </Col>
            <Col style={{ textAlign: "right", paddingRight: "80px" }}>
              <Button
                style={{
                  marginTop: "20px",
                  borderRadius: "15px",
                  backgroundColor: "white",
                  borderColor: "white",
                  color: "#f25f3a",
                }}
              >
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Visible on sm */}
      <div className="ban smshow">
        <Container
          style={{ paddingTop: "40px", paddingBotton: "20px", textAlign: "center" }}>
          <h1 style={{ color: "white" }}>
            <strong>Simplify how your team works today</strong>
          </h1>
          <Button
            style={{
              marginTop: "20px",
              borderRadius: "15px",
              backgroundColor: "white",
              borderColor: "white",
              color: "#f25f3a",
            }}
          >
            Get Started
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
