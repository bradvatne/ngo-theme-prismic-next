import { Container, Carousel } from "react-bootstrap";
import { RichText } from "prismic-reactjs";
import htmlSerializer from "../lib/htmlSerializer";

const Projects = ({ projects }) => {
  return (
    <Container>
      {/* <div className="text-center mb-5">
        <RichText htmlSerializer={htmlSerializer} render={projects.primary.projects_title} />
         <RichText render={projects.primary.projects_description} /> 
      </div>*/}
      <Carousel>
        {projects.items.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={item.project_image.url}
              alt="Slide"
            />
            <Carousel.Caption>
              <RichText render={item.project_title} />
              <RichText render={item.project_description} />
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Projects;
