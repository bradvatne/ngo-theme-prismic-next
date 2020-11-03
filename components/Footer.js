import { Button, Row, Form, Col, Container } from "react-bootstrap";
import { RichText } from "prismic-reactjs";
import Link from "next/link";

const Footer = ({ footer, nav }) => {
  return (
    <section className="section-footer bg-primary text-light pt-3">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col md="6">
            <RichText render={footer.brand_name} />
            <RichText render={footer.brand_description} />
          </Col>
          <Col md="3">
            <RichText render={footer.email_capture_title} />
            <Form>
              <Form.Control className="my-2" placeholder="Email Address" />
              <Form.Control className="my-2" placeholder="Name" />
              <Button className="my-2" className="btn-outline-light w-100">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <SocialsWidget socials={footer} />
      </Container>
    </section>
  );
};

const SocialsWidget = ({ socials }) => (
  <Row className="d-flex justify-content-center py-3">
    {socials.socials_widget.map((item, index) => (
      <Link href="/placeholder" className="text-light">
        <a className="text-light px-2">
          <i
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
