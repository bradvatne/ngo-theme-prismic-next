import SliceZone from "./components/SliceZone";
import { Row, Container } from "react-bootstrap";

const Footer = ({ footer }) => {
  console.log("footer data: ");
  console.log(footer);

  return (
    <div className="bg-primary text-light">
    <Container>
      <Row className="p-0 m-0">
        <SliceZone slices={footer.body} />;
      </Row>
    </Container>
    </div>
  );
};

export default Footer;
