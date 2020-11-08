import { Row, Col, Container } from "react-bootstrap";
import { RichText } from "prismic-reactjs";

export const Partners = ({ partners }) => {
  return (
    <Container>
      <Row className="d-flex flex-row justify-content-center">
        <Col sm={8}>
          <Row>
            {partners.items.map((item, index) => (
              <Col xs={2} key={index}>
                <img
                  src={item.partner_logo.url}
                  className="img-fluid partner-logo"
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Partners;
