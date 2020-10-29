import { RichText } from "prismic-reactjs";
import { Container, Button, Row, Col } from "react-bootstrap";

const Quote = ({ quote }) => (
  <Container>
    <Row className="d-flex flex-column-reverse flex-md-row text-center">
      <Col sm="12" md="7" className="d-flex flex-column justify-content-center text-sm-center text-md-right">
        <RichText render={quote.quote} />
        <div>
          <Button variant="primary" className="px-3">
            {RichText.asText(quote.quote_button_label)}
          </Button>
          </div>
      </Col>
      <Col sm="12" md="5">
        <img
          src={quote.author_portrait.url}
          className="img-fluid w-50 rounded-circle shadow-lg"
        />
        <RichText render={quote.author} />
      </Col>
    </Row>
  </Container>
);

export default Quote;
