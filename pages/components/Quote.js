import { RichText } from "prismic-reactjs";
import { Container, Row, Col } from "react-bootstrap";

const Quote = ({ quote }) => (
  <section className="section-quote">
    <Row>
    <Col className="col-md-3">
      <RichText render={quote.author} />
    </Col>
    <Col className="col-md-9">
    <RichText render={quote.quote} />
    </Col>
    </Row>
  </section>
);

export default Quote;
