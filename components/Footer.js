import { Row, Col, Container } from "react-bootstrap";
import Link from "next/link";

const Footer = ({ footer, nav }) => {
  console.log("footer test");
  console.log(footer);
  return (
    <div className="bg-primary text-light">
      <Container>
        <Row className="py-5"></Row>
        <SocialsWidget socials={footer} />
      </Container>
    </div>
  );
};

const SocialsWidget = ({ socials }) => (
  <Row className="d-flex justify-content-center pb-3">
    {socials.socials_widget.map((item, index) => (
        <Link href="/placeholder" className="text-light">
          <a className="text-light px-2">
            <i
              className={
                "fa-2x fab fa-" + item.socials_widget_icon.toLowerCase()
              }
            />
          </a>
        </Link>
    ))}
  </Row>
);

export default Footer;
