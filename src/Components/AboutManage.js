import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardProps from "../Props/CardProps";
import AnishaLi from "../img/avatar-anisha.png";
import Ali from "../img/avatar-ali.png";
import Richard from "../img/avatar-richard.png";

const AboutManage = () => {
  return (
    <div style={{ textAlign: "center"}}>
      <Container>
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>
          <strong>What's Difference About Mange?</strong>
        </h1>
        <Row  style={{ marginTop:"40px"}}>
          <Col>
            <img src={AnishaLi} alt="Anisha Li" style={{marginTop:"30px"}} />
            <CardProps
              name="Anisha Li"
              description="Manage has supercharged our teams workflow
                The ability to maintain visibility on larger milestones at all times keeps everyone
                motivated."
            />
          </Col>
          <Col>
            <img src={Ali} alt="Anisha Li" style={{marginTop:"30px"}} />
            <CardProps
              name="Ali Bravo"
              description="We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is
                much more focused."
            />
          </Col>
          <Col>
            <img src={Richard} alt="Anisha Li" style={{marginTop:"30px"}} />
            <CardProps
              name="Richard Watts"
              description="Manage has supercharged our team's workflow.
                The ability to maintain visibility on larger milestones at all times keeps everyone
                motivated."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutManage;
