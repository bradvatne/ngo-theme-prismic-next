import { RichText } from "prismic-reactjs";
import { Button, Row, Col } from "react-bootstrap";

const Quote = ({ quote }) => (
  <section className="section-quote">
    <Row>
      <Col sm="12" md="7" className="d-flex flex-column justify-content-center">
        <RichText render={quote.quote} />
        <div className="text-center">
          <Button variant="outline-primary" className="px-5">
            {RichText.asText(quote.quote_button_label)}
          </Button>
        </div>
      </Col>
      <Col sm="12" md="5" className="text-center">
        <img
          src={quote.author_portrait.url}
          className="img-fluid w-50 rounded-circle shadow-lg"
        />
        <RichText render={quote.author} />
      </Col>
    </Row>
  </section>
);

export default Quote;
