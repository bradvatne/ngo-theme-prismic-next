import { Col, Row } from "react-bootstrap";
import { RichText } from "prismic-reactjs";

const FooterLinks = ({ footerLinks }) => {
  return (
    <Col md="4">
      <RichText render={footerLinks.primary.footer_link_block_title} />
      <FooterLinksList footerLinks={footerLinks.items} />
    </Col>
  );
};

const FooterLinksList = ({ footerLinks }) => {
  return (
    <>
      {footerLinks.map((item, index) => (
        <RichText render={item.footer_link_block_label} key={index}/>
      ))}
    </>
  );
};

export default FooterLinks;
