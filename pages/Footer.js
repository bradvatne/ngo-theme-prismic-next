import SliceZone from "./components/SliceZone";
import {Row} from 'react-bootstrap';


const Footer = ({ footer }) => {
  console.log("footer data: ");
  console.log(footer);

  return (
    <Row className="p-o">
  <SliceZone slices={footer.body} />;
  </Row>
  )
};

export default Footer;
