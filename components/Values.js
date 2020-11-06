import { RichText } from "prismic-reactjs";
import { Container, Col, Row } from "react-bootstrap";
import htmlSerializer from "../lib/htmlSerializer";
import { Fade, Slide } from "react-awesome-reveal";

const Values = ({ values }) => {
  return (
    <Container>
      {/*<div className="text-center mb-5">
          <RichText htmlSerializer={htmlSerializer} render={values.primary.values_title} />
           <RichText render={values.primary.values_tagline} /> 
        </div>*/}
      <Row>
        <ValuesCards values={values.items} />
      </Row>
    </Container>
  );
};

const ValuesCards = ({ values }) =>
  values.map((item, key) => (
    <Col sm={12} md={6} key={key}>
      <Fade duration="1500" delay={key * 200}>
        <img className="img-fluid" src={item.values_card_image.url} />
        <div className="text-center py-3">
          <RichText render={item.values_card_title} />
        </div>
        <div>
          <RichText render={item.values_card_text} />
        </div>
      </Fade>
    </Col>
  ));

export default Values;
