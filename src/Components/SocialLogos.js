import React from "react";
import facebook from "../img/icon-facebook.svg";
import youtube from "../img/icon-youtube.svg";
import twitter from "../img/icon-twitter.svg";
import pinterest from "../img/icon-pinterest.svg";
import instagram from "../img/icon-instagram.svg";
import { Col, Row } from "react-bootstrap";

const SocialLogos = () => {
  return (
    <div>
      <div className="box md">
        <Row style={{ marginTop: "50px" }}>
          <Col>
            <img
              src={facebook}
              alt="facebook"
              style={{ height: "30px", width: "30px" }}
              herf="#"
            ></img>
          </Col>
          <Col>
            <img
              src={youtube}
              alt="youtube"
              style={{ height: "30px", width: "30px" }}
            ></img>
          </Col>
          <Col>
            <img
              src={twitter}
              alt="twitter"
              style={{ height: "30px", width: "30px" }}
            ></img>
          </Col>
          <Col>
            <img
              src={pinterest}
              alt="pinterest"
              style={{ height: "30px", width: "30px" }}
            ></img>
          </Col>
          <Col>
            <img
              src={instagram}
              alt="instagram"
              style={{ height: "30px", width: "30px" }}
            ></img>
          </Col>
        </Row>
      </div>
      {/* Visible on md and below */}
      <div className="ban mdshow">
        <Row style={{ marginTop: "20px", paddingLeft:'20px', paddingRight:'20px' }}>
          <Col>
            <img
              src={facebook}
              alt="facebook"
              style={{ height: "40px", width: "40px" }}
              herf="#"
            ></img>
          </Col>
          <Col>
            <img
              src={youtube}
              alt="youtube"
              style={{ height: "40px", width: "40px" }}
            ></img>
          </Col>
          <Col>
            <img
              src={twitter}
              alt="twitter"
              style={{ height: "40px", width: "40px" }}
            ></img>
          </Col>
          <Col>
            <img
              src={pinterest}
              alt="pinterest"
              style={{ height: "40px", width: "40px" }}
            ></img>
          </Col>
          <Col>
            <img
              src={instagram}
              alt="instagram"
              style={{ height: "40px", width: "40px" }}
            ></img>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SocialLogos;
