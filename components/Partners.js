import { Row, Col, Container } from "react-bootstrap";
import { Slide } from 'react-awesome-reveal';

export const Partners = ({ partners }) => {
  return (
    <Container>
    <Slide direction="up" triggerOnce>
      <Row className="d-flex flex-row justify-content-center">
        <Col sm={12}>
          <Row className="d-flex flex-row justify-content-center">
            {partners.items.map((item, index) => (
              <Col xs={4} lg={2} key={index}>
                <img
                  src={item.partner_logo.url}
                  className="img-fluid partner-logo p-2"
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      </Slide>
    </Container>
  );
};

export default Partners;
