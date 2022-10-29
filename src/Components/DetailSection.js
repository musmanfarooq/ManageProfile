import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NumberProps from "../Props/NumberProps";
import NumberPropSm from "../Props/NumberPropSm";

const DetailSection = () => {
  return (
    <div>
      {/* Visible on md and Above */}
      <div className="box sm">
        <Container style={{ marginTop: "50px" }}>
          <Row>
            <Col xs={6}>
              <h1>
                <strong>What's difference about Mange?</strong>
              </h1>
              <p
                style={{
                  marginTop: "40px",
                  paddingRight: "160px",
                  color: "#C3AEB1",
                }}
              >
                Manage provides all the functionality your team needs, without
                the complexity. Out Software is tailor-made for modern digital
                product teams.
              </p>
            </Col>
            <Col xs={6}>
              <NumberProps
                number="01"
                title="Track company-wide progress"
                description="See how day-to-day tasks fit into the wider vision. Go
                      From tracking progress at the milestone level all the way
                      down to the smallest of details. Never lose sight of the
                      bigger picture again."
              />
              <NumberProps
                number="02"
                title="Advanced built-in reports"
                description="Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build
                out the reports you need to keep key stakeholders
                informed."
              />
              <NumberProps
                number="03"
                title="Everything you need in one place"
                description="Stop jumping from one service to another to communicate,
                store files, track tasks and share documents. Manage
                offers an all-in-one team productivity solution."
              />
            </Col>
          </Row>
        </Container>
      </div>
      {/* Visible on sm */}
      <div className="ban smshow" style={{ textAlign: "center" }}>
        <Container style={{ marginTop: "50px" }}>
          <Row>
            <h1>
              <strong>What's difference about Mange?</strong>
            </h1>
            <p
              style={{
                marginTop: "40px",
                color: "#C3AEB1",
              }}
            >
              Manage provides all the functionality your team needs, without the
              complexity. Out Software is tailor-made for modern digital product
              teams.
            </p>
          </Row>
          <NumberPropSm
            number="01"
            title="Track company-wide progress"
            description="See how day-to-day tasks fit into the wider vision. Go
                      From tracking progress at the milestone level all the way
                      down to the smallest of details. Never lose sight of the
                      bigger picture again."
          />
          <NumberPropSm
            number="02"
            title="Advanced built-in reports"
            description="Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build
                out the reports you need to keep key stakeholders
                informed."
          />
          <NumberPropSm
            number="03"
            title="Everything you need in one place"
            description="Stop jumping from one service to another to communicate,
                store files, track tasks and share documents. Manage
                offers an all-in-one team productivity solution."
          />
        </Container>
      </div>
    </div>
  );
};

export default DetailSection;
