import { Row, Col, Container } from "react-bootstrap";
import { RichText } from "prismic-reactjs";
import { Fade } from "react-awesome-reveal";

export const Team = ({ team }) => {
  return (
    <Container>
      <Row className="d-flex flex-row justify-content-center">
        {team.items.map((item, index) => (
          <Col lg={4}>
            <Fade triggerOnce key={index} delay={index * 250}>
              <div className="text-center">
                <img
                  src={item.portrait.url}
                  className="img-fluid rounded-circle shadow-lg w-75 "
                />
                <RichText render={item.name} />
              </div>
              <RichText render={item.bio} />
            </Fade>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Team;
