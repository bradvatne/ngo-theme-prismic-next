import { RichText } from "prismic-reactjs";
import { Container } from "react-bootstrap";

const Banner = ({ banner }) => {
  return (
    <section
      className="section-banner"
      style={{
        backgroundImage: "url(" + banner.image.url + ")",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <Container>
        {RichText.asText(banner.title)}
        <br />
        {RichText.asText(banner.text)}
        <br />
        {RichText.asText(banner.button_label)}
      </Container>
    </section>
  );
};

export default Banner;
