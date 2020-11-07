import { Container } from "react-bootstrap";
import { RichText } from "prismic-reactjs";
import htmlSerializer from "../lib/htmlSerializer";

const PageBanner = ({ doc }) => {
  if (doc)
    return (
      <section
        className="section-banner"
        style={{
          backgroundImage: "url(" + doc.image.url + ")",
          height: "50vh",
          backgroundSize: "cover",
          backgroundPosition: "bottom"
        }}
      >
        <Container className="d-flex flex-column h-100 justify-content-center pb-5">
          <div className="content text-white">
            <RichText
              render={doc.title}
            />
            <RichText
              render={doc.tagline}
            />
            {RichText.asText(doc.banner_button_label)}
          </div>
        </Container>
      </section>
    );
  else {
    return <div>nope</div>;
  }
};

export default PageBanner;
