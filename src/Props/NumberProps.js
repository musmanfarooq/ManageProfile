import React from "react";
import { Col, Row } from "react-bootstrap";

const NumberProps = (props) => {
  return (
    <div>
      <Row>
        <Col xs={2}>
          <h4
            style={{
              backgroundColor: "#f25f3a",
              width: "45px",
              height: "28px",
              borderRadius: "10px",
              color: "white  ",
              textAlign: "center",
              marginTop: "4px"
            }}
          >
            {props.number}
          </h4>
        </Col>
        <Col xs={10}>
          <h4 style={{ marginLeft: "10px" }}>{props.title}</h4>
          <p style={{ marginLeft: "10px", marginTop:"20px", marginBotton:"20px", color:"#C3AEB1" }}>{props.description}</p>
        </Col>
      </Row>
    </div>
  );
};

export default NumberProps;
