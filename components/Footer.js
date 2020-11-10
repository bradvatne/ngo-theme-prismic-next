import { Button, Row, Form, Col, Container } from "react-bootstrap";
import { RichText } from "prismic-reactjs";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Logo from "../public/logo.svg";

const Footer = ({ footer, nav }) => {
  return (
    <section className="section section-footer bg-custom-footer text-light">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col lg={5}>
            <Fade triggerOnce fraction={0.5}>
              <div>
                <Logo className="logo" />
                <hr />
                <RichText render={footer.brand_description} />
              </div>
            </Fade>
          </Col>
          <Col lg={4} className="my-4">
            <Fade triggerOnce fraction={0.5}>
              <Row>
                <Col>
                  <RichText render={footer.address_title} />
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col xs={2} className="text-center">
                  <i aria-hidden className="fas fa-map-marker-alt fa-2x"></i>
                </Col>
                <Col>
                  <RichText render={footer.address_content} />
                </Col>
              </Row>
              <Row>
                <Col xs={2} className="text-center">
                  <i aria-hidden className="fab fa-whatsapp fa-2x"></i>
                </Col>
                <Col>
                  <RichText render={footer.phone_contact} />
                </Col>
              </Row>
              <Row>
                <Col xs={2} className="text-center">
                  <i aria-hidden className="fas fa-envelope fa-2x"></i>
                </Col>
                <Col>
                  <RichText render={footer.email_contact} />
                </Col>
              </Row>
            </Fade>
          </Col>
          <Col lg={3} className="my-4">
            <Fade triggerOnce fraction={0.5}>
              <div>
                <RichText render={footer.email_capture_title} />

                <hr />
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
              </div>
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
          <Fade delay={index * 50} triggerOnce>
            <i
              aria-hidden
              className={
                "fa-2x fab fa-" + item.socials_widget_icon.toLowerCase()
              }
            />
          </Fade>
        </a>
      </Link>
    ))}
  </Row>
);

export default Footer;
