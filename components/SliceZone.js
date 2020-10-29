import Quote from "./Quote";
import Values from "./Values";
import Socials from "./Socials";
import EmailCapture from "./EmailCapture";
import FooterLinks from "./FooterLinks";
import FooterMotto from "./FooterMotto";
import MainProject from './MainProject';
import Projects from './Projects'
import { Container } from "react-bootstrap";

// socials_widget, footer_link_block, email_capture

const SliceZone = ({ slices }) => (
  <>
    {slices.map((slice, index) => {
      switch (slice.slice_type) {
        case "quote":
          return (
            <Container className="slice-zone pb-5" key={`slice-${index}`}>
              <Quote quote={slice.primary} />
            </Container>
          );
        case "values":
          return (
            <Container className="slice-zone pb-5" key={`slice-${index}`}>
              <Values values={slice} />
            </Container>
          );
          case "main_project":
          return (
            <Container className="slice-zone pb-5" key={`slice-${index}`}>
              <MainProject mainProject={slice} />
            </Container>
          );
          case "projects":
          return (
            <Container className="slice-zone pb-5" key={`slice-${index}`}>
              <Projects projects={slice} />
            </Container>
          );
        case "socials_widget":
          return <Socials socials={slice} key={`slice-${index}`} />;
        case "footer_link_block":
          return <FooterLinks footerLinks={slice} key={`slice-${index}`} />;
        case "email_capture":
          return <EmailCapture email={slice} key={`slice-${index}`} />;
        case "motto":
          return <FooterMotto footerMotto={slice} key={`slice-${index}`} />;
      }
    })}
  </>
);

export default SliceZone;
