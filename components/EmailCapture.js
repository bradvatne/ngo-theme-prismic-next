import { Col } from "react-bootstrap";
import { RichText } from "prismic-reactjs";
const EmailCapture = ({ email }) => {
  console.log("email capture: ");
  console.log(email);
  /*
    button_label
    description
    endpoint

  */
  return (
    <Col sm="12" md="3">
      <RichText render={email.primary.email_capture_title} />
      <RichText render={email.primary.email_capture_description} />
      
    </Col>
  );
};

export default EmailCapture;
