import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import logo from "../img/logo-white.svg";
import SocialLogos from "./SocialLogos";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#1D1E25", paddingTop: "50px", color: "white", paddingBottom:"40px" }}
    >
      {/* Visible on lg and above */}
      <div className="box md">
        <Container>
          <Row>
            <Col xs={3}>
              <img
                src={logo}
                alt="manage logo"
                style={{ marginTop: "10px" }}
              ></img>
              <SocialLogos />
            </Col>
            <Col xs={2}>
              <p>Home</p>
              <p>Pricing</p>
              <p>Products</p>
              <p>About</p>
            </Col>
            <Col xs={2}>
              <p>Careers</p>
              <p>Community</p>
              <p>Privacy Policy</p>
            </Col>
            <Col xs={5}>
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        placeholder="Updated in your inbox"
                        style={{ borderRadius: "20px" }}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Button
                      style={{
                        borderRadius: "15px",
                        backgroundColor: "#f25f3a",
                        borderColor: "#f25f3a",
                        width: "60px",
                      }}
                    >
                      Go
                    </Button>
                  </Col>
                </Row>
              </Form>
              <p> Copyright &copy; 2022, All Right Reserved</p>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Visible on md and below */}
      <div className="ban mdshow">
        <Container style={{ textAlign: "center" }}>
          <Form>
            <Row>
              <Col xs={9}>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                  style={{ paddingLeft: "20px" }}
                >
                  <Form.Control
                    type="email"
                    placeholder="Updated in your inbox"
                    style={{ borderRadius: "20px" }}
                  />
                </Form.Group>
              </Col>
              <Col style={{ textAlign: "left" }}>
                <Button
                  style={{
                    borderRadius: "15px",
                    backgroundColor: "#f25f3a",
                    borderColor: "#f25f3a",
                    width: "60px",
                  }}
                >
                  Go
                </Button>
              </Col>
            </Row>
          </Form>
          <Row>
            <Col style={{ textAlign: "left", paddingLeft: "30px" }}>
              <p>Home</p>
              <p>Pricing</p>
              <p>Products</p>
              <p>About</p>
            </Col>
            <Col style={{ textAlign: "right", paddingRight: "30px" }}>
              <p>Careers</p>
              <p>Community</p>
              <p>Privacy Policy</p>
            </Col>
          </Row>
          <SocialLogos />
          <img
            src={logo}
            alt="manage logo"
            style={{ marginTop: "40px", height: "40px" }}
          ></img>
          <p style={{marginTop:"20px"}}> Copyright &copy; 2022, All Right Reserved</p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
