import { Container, Row, Col } from "react-bootstrap";
import { RichText } from "prismic-reactjs";
import { Fade } from "react-awesome-reveal";

export const BrandIcons = ({ doc }) => {
  return (
    <Container>
      <Row>
        {doc.items.map((item, index) => (
            <Col md={3} className="text-center">
            <Fade triggerOnce key={index} delay={index * 250}>
              <i className={item.icon_link + " fa-4x p-2"} />
              <div className="p-2">
                <RichText render={item.icon_title} />
              </div>
              <div className="text-left p-2">
                <RichText render={item.icon_content} />
              </div>
              </Fade>
            </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BrandIcons;
