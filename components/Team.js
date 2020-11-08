import { Row, Col, Container } from "react-bootstrap";
import { RichText } from "prismic-reactjs";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import React, { useRef, useEffect, useState } from "react";
import Rellax from "rellax";

export const Team = ({ team }) => {

  useEffect(() => {
    new Rellax('.team-members', {
      speed: 5,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }, []);

  return (
    <Container>
      <Row className="d-flex flex-row justify-content-center team-members">
        {team.items.map((item, index) => (
          <Col lg={4} key={index}>
            <div className="text-center">
              <img
                src={item.portrait.url}
                className="img-fluid rounded-circle shadow-lg w-75"
              
              />
              <RichText render={item.name} />
            </div>
            <RichText render={item.bio} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Team;
