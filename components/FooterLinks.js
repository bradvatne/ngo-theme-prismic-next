import { Col, Row } from "react-bootstrap";
import { RichText } from "prismic-reactjs";
import { Link } from "next/link";

const FooterLinks = ({ footerLinks }) => {
  return (
    <Col md="3">
      <RichText render={footerLinks.primary.footer_link_block_title} />
      <FooterLinksList footerLinks={footerLinks.items} />
    </Col>
  );
};

const FooterLinksList = ({ footerLinks }) => {
  return (
    <>
      {footerLinks.map((item, index) => (
        <a key={index}>
          {RichText.asText(item.footer_link_block_label)}
          <br />
        </a>
      ))}
    </>
  );
};

export default FooterLinks;
