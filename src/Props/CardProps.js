import React from "react";
import { Card } from "react-bootstrap";

const CardProps = (props) => {
  return (
    <div style={{ textAlign: "center"}}>
      <Card style={{ backgroundColor: "#FAFAFA", border: "none" }}>
        <Card.Body>
          <h4>{props.name}</h4>
          <p style={{ color: "#C3AEB1" }}>{props.description}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProps;
