import { RichText } from "prismic-reactjs";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

const Quote = ({ quote }) => (
  <Container>
    <Row className="d-flex flex-column-reverse flex-md-row text-center">
      <Col sm="12" md="7" className="d-flex flex-column justify-content-center">
        <Fade triggerOnce>
          <div>
            <RichText render={quote.quote} />
          </div>
        </Fade>
        <Fade triggerOnce>
          <div>
            <Button variant="outline-blu" className="px-3">
              <small className="text-uppercase">
                {RichText.asText(quote.quote_button_label)}
              </small>
            </Button>
          </div>
        </Fade>
      </Col>
      <Col sm="12" md="5">
        <Fade triggerOnce>
          <img
            src={quote.author_portrait.url}
            className="img-fluid w-50 rounded-circle shadow-lg"
          />
          <div>
            <RichText render={quote.author} />
          </div>
        </Fade>
      </Col>
    </Row>
  </Container>
);

export default Quote;
