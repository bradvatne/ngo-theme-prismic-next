import { RichText } from "prismic-reactjs";
import { Col, Row } from "react-bootstrap";

const Values = ({ values }) => {
  return (
    <section className="section-values">
      <div className="text-center">
        <RichText render={values.primary.values_title} />
        <RichText render={values.primary.values_tagline} />
      </div>
      <Row>
      <ValuesCards values={values.items} />
      </Row>
    </section>
  );
};

const ValuesCards = ({ values }) => (
      values.map((item, key) => (
        <Col sm="12" md="3" key={key}>
          <img className="img-fluid" src={item.values_card_image.url} />
          <RichText render={item.values_card_title} />
          <RichText render={item.values_card_text} />
        </Col>
      ))
  );


export default Values;
