import { Container, Row, Col } from "react-bootstrap";
import { RichText } from "prismic-reactjs";

export const LatestProjects = () => {
  return (
    <Container>
      <Row>
        <Col md={9}>LEFT</Col>
        <Col md={3}>
          <Row>
            <Col>RIGHT TOP</Col>
          </Row>
          <Row>
            <Col>RIGHT BOTTOM</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LatestProjects;
