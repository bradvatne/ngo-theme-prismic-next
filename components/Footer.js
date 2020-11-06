import { Button, Row, Form, Col, Container } from "react-bootstrap";
import { RichText } from "prismic-reactjs";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const Footer = ({ footer, nav }) => {
  return (
    <section className="section section-footer bg-custom-footer text-light">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col md="6">
            <Fade duration={1500}>
              <div>
                <RichText render={footer.brand_name} />
                <RichText render={footer.brand_description} />
              </div>
            </Fade>
          </Col>
          <Col md="3">
            <Fade duration={1500}>
              <div>
            <RichText render={footer.email_capture_title} />
              </div>
            <Form>
              <Form.Control className="my-2" placeholder="Email Address" />
              <Form.Control className="my-2" placeholder="Name" />
              <Button
                variant="outline-light"
                className="my-2"
                className="w-100"
              >
                Submit
              </Button>
            </Form>
            <SocialsWidget socials={footer} />
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const SocialsWidget = ({ socials }) => (
  <Row className="d-flex justify-content-center py-3">
    {socials.socials_widget.map((item, index) => (
      <Link href="/placeholder" className="text-light" key={index}>
        <a className="text-light px-2">
          <i
            aria-hidden
            className={"fa-2x fab fa-" + item.socials_widget_icon.toLowerCase()}
          />
        </a>
      </Link>
    ))}
  </Row>
);

const NavLinks = ({ navList }) => {
  return (
    <div className="d-flex flex-column">
      {navList.map((navItem, index) => (
        <Link href={navItem.link.type} key={index}>
          <a className="text-white">{RichText.asText(navItem.label)}</a>
        </Link>
      ))}
    </div>
  );
};

export default Footer;
