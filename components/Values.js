import { RichText } from "prismic-reactjs";
import { Container, Col, Row } from "react-bootstrap";

const Values = ({ values }) => {
  return (
    
      <Container>
        <div className="text-center mb-5">
          <RichText render={values.primary.values_title} />
          <RichText render={values.primary.values_tagline} />
        </div>
        <Row>
          <ValuesCards values={values.items} />
        </Row>
      </Container>
    
  );
};

const ValuesCards = ({ values }) =>
  values.map((item, key) => (
    <Col sm="12" md="3" key={key}>
      <img
        className="img-fluid"
        src={item.values_card_image.url}
      />
      <span className="text-center mb-3">
        <RichText render={item.values_card_title} />
      </span>
      <RichText render={item.values_card_text} />
    </Col>
  ));

export default Values;
