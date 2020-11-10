import { Container } from "react-bootstrap";
import { RichText } from "prismic-reactjs";
import { Fade } from "react-awesome-reveal";

const PageBanner = ({ doc }) => {
  if (doc)
    return (
      <Fade triggerOnce>
        <section
          className="section-banner"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${doc.image.url})`,
            height: "75vh ",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <Container className="d-flex flex-column h-100 justify-content-center">
            <div className="content text-white">
              <RichText render={doc.title} />
              <RichText render={doc.tagline} />
              {RichText.asText(doc.banner_button_label)}
            </div>
          </Container>
        </section>
      </Fade>
    );
  else {
    return <div>nope</div>;
  }
};

export default PageBanner;
