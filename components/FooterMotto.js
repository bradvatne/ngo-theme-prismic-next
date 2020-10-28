import { Col } from "react-bootstrap";
import { RichText } from "prismic-reactjs";

const FooterMotto = ({ footerMotto }) => {
  console.log(footerMotto);
  return (
    <Col md="3">
      <RichText render={footerMotto.primary.footer_motto_title} />
      <RichText render={footerMotto.primary.footer_motto_content} />
    </Col>
  );
};

export default FooterMotto;
