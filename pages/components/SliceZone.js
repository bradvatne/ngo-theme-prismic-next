import Quote from "./Quote";
import Values from "./Values";
import Socials from "./Socials";
import EmailCapture from "./EmailCapture";
import FooterLinks from "./FooterLinks";
import { Container } from "react-bootstrap";

// socials_widget, footer_link_block, email_capture

const SliceZone = ({ slices }) => (
  <Container className="slice-zone">
    {slices.map((slice, index) => {
      switch (slice.slice_type) {
        case "quote":
          console.log("slice zone: ");
          console.log(slice.primary);
          return <Quote quote={slice.primary} key={`slice-${index}`} />;
        case "values":
          console.log("values slice zone: ");
          console.log(slice);
          return <Values values={slice} key={`slice-${index}`} />;
        case "socials_widget":
          return <Socials socials={slice} key={`slice-${index}`} />;
        case "footer_link_block":
          return <FooterLinks footerLinks={slice} key={`slice-${index}`} />;
        case "email_capture":
          return <EmailCapture email={slice} key={`slice-${index}`} />;
      }
    })}
  </Container>
);

export default SliceZone;
