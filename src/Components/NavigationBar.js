import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import logo from "../img/logo.svg";

const NavigationBar = () => {
  return (
    <div>
      <Navbar
        bg="none"
        expand="lg"
        style={{ paddingRight: "30px", paddingLeft: "30px" }}
      >
        <Navbar.Brand href="#home">
          <img src={logo} alt="manage logo" style={{ marginTop: "10px" }}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#Pricing">Pricing</Nav.Link>
            <Nav.Link href="#Products">Products</Nav.Link>
            <Nav.Link href="#About Us">About Us</Nav.Link>
            <Nav.Link href="#Careers">Careers</Nav.Link>
            <Nav.Link href="#Community">Community</Nav.Link>
          </Nav>
          <Button
              style={{
                borderRadius: "15px",
                backgroundColor: "#f25f3a",
                borderColor: "#f25f3a"
              }}
            >
              Get Started
            </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
