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
      <Container className="d-flex flex-column h-100 justify-content-center pb-5">
        <div className="content text-white">
        <RichText render={banner.banner_title} />
        <RichText render={banner.banner_tagline} />
        {RichText.asText(banner.banner_button_label)}
        </div>
      </Container>
    </section>
  );
};

export default Banner;
