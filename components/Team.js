import { Row, Col, Container } from "react-bootstrap";
import { RichText } from "prismic-reactjs";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import React, { useRef, useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

export const Team = ({ team }) => {
  return (
    <Container>
      <Row className="d-flex flex-row justify-content-center team-members">
        {team.items.map((item, index) => (
          <Col lg={4}>
            <div className="text-center">
              <Parallax y={[-150, 0]} tagOuter="figure" key={index}>
                <img
                  src={item.portrait.url}
                  className="img-fluid rounded-circle shadow-lg w-75 "
                />
              </Parallax>
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
