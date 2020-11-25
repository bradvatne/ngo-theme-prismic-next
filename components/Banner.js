import { RichText } from "prismic-reactjs";
import { Container, Button } from "react-bootstrap";
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

            <Button variant="outline-light" className="">
              <small className="text-uppercase">
                {RichText.asText(banner.banner_button_label)}
              </small>
            </Button>
          </div>
        </Container>
      </section>
    </Fade>
  );
};

export default Banner;
