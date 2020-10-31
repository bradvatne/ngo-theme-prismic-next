import SliceZone from "../components/SliceZone";
import { Row, Container } from "react-bootstrap";

const Footer = ({ footer }) => {
  return (
    <div className="bg-primary text-light">
      <Container>
        <Row className="py-5">
          <SliceZone slices={footer.body} />
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
