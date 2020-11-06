import { RichText } from "prismic-reactjs";
import { Container } from "react-bootstrap";
import htmlSerializer from "../lib/htmlSerializer";
import { Fade } from "react-awesome-reveal";

const Banner = ({ banner }) => {
  return (
    <Fade triggerOnce>
      <section
        className="section-banner"
        style={{
          backgroundImage: "url(" + banner.banner_image.url + ")",
          backgroundPosition: "bottom",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Container className="d-flex flex-column h-100 pb-5">
          <div className="hero-text text-white">
            <RichText render={banner.banner_title} />
            <RichText render={banner.banner_tagline} />
            <div>{RichText.asText(banner.banner_button_label)}</div>
          </div>
        </Container>
      </section>
    </Fade>
  );
};

export default Banner;
