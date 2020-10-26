import { RichText } from "prismic-reactjs";
import { Container } from "react-bootstrap";

const Banner = ({ banner }) => {
  return (
    <section
      className="section-banner"
      style={{
        backgroundImage: "url(" + banner.banner_image.url + ")",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <Container>
        {RichText.asText(banner.banner_title)}
        <br />
        {RichText.asText(banner.banner_tagline)}
        <br />
        {RichText.asText(banner.banner_button_label)}
      </Container>
    </section>
  );
};

export default Banner;
