import { RichText } from "prismic-reactjs";
import { Container, Row, Col } from "react-bootstrap";

const Quote = ({ quote }) => (
  <section className="section-quote">
    <Row className="m-0">
    <Col className="md-6 sm-12">
      
      <RichText render={quote.author} />
    </Col>
    <Col className="md-6 sm-12">
    <RichText render={quote.quote} />
    </Col>
    </Row>
  </section>
);

export default Quote;
