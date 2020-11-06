import { RichText } from "prismic-reactjs";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Slide, Fade } from "react-awesome-reveal";

const Quote = ({ quote }) => (
  <Container>
    <Row className="d-flex flex-column-reverse flex-md-row text-center">
      <Col sm="12" md="7" className="d-flex flex-column justify-content-center">
        <Fade duration={1500}>
          <Slide duration={1500} direction="left">
            <div>
              <RichText render={quote.quote} />
            </div>
          </Slide>
        </Fade>
        <Fade duration={1500} delay={700}>
          <div>
            <Button variant="primary" className="px-3">
              {RichText.asText(quote.quote_button_label)}
            </Button>
          </div>
        </Fade>
      </Col>
      <Col sm="12" md="5">
        <Fade duration={1500}>
          <Slide duration={1500} direction="right">
            <img
              src={quote.author_portrait.url}
              className="img-fluid w-50 rounded-circle shadow-lg"
            />
          </Slide>
        </Fade>
        <Fade delay={700} duration={1500}>
          <div>
            <RichText render={quote.author} />
          </div>
        </Fade>
      </Col>
    </Row>
  </Container>
);

export default Quote;
