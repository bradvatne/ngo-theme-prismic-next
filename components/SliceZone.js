import Quote from "./Quote";
import Values from "./Values";
import Socials from "./Socials";
import EmailCapture from "./EmailCapture";
import FooterLinks from "./FooterLinks";
import FooterMotto from "./FooterMotto";
import MainProject from "./MainProject";
import Projects from "./Projects";
import Stats from "./Stats";
import { Container } from "react-bootstrap";

// socials_widget, footer_link_block, email_capture

const SliceZone = ({ slices }) => (
  <>
    {slices.map((slice, index) => {
      switch (slice.slice_type) {
        case "quote":
          return (
            <section
              className={`section-quote slice-zone py-4`}
              key={`slice-${index}`}
            >
              <Quote quote={slice.primary} />
            </section>
          );
        case "values":
          return (
            <section className="section-values py-4" key={`slice-${index}`}>
              <Values values={slice} key={`slice-${index}`} />
            </section>
          );
        case "main_project":
          return (
            <section
              className="section-main-project py-4"
              key={`slice-${index}`}
            >
              <MainProject mainProject={slice} />
            </section>
          );
        case "projects":
          return (
            <section className="section-projects py-4" key={`slice-${index}`}>
              <Projects projects={slice} />
            </section>
          );
        case "statistics":
          return (
            <section className="section-statistics" key={`slice-${index}`}>
              <Stats stats={slice} />
            </section>
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
