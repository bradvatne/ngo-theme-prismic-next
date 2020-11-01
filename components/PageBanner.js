import { Container } from "react-bootstrap";
import { RichText } from "prismic-reactjs";
import htmlSerializer from "../lib/htmlSerializer";

const PageBanner = ({ projects }) => {
  console.log(projects);
  if (projects)
    return (
      <section
        className="section-banner"
        style={{
          backgroundImage: "url(" + projects.projects_banner.url + ")",
          height: "50vh",
          backgroundSize: "cover",
        }}
      >
        <Container className="d-flex flex-column h-100 justify-content-center pb-5">
          <div className="content text-center text-white">
            <RichText
              htmlSerializer={htmlSerializer}
              render={projects.projects_title}
            />
            <RichText
              htmlSerializer={htmlSerializer}
              render={projects.projects_tagline}
            />
            {RichText.asText(projects.banner_button_label)}
          </div>
        </Container>
      </section>
    );
  else {
    console.log(projects);
    return <div>nope</div>;
  }
};

export default PageBanner;
