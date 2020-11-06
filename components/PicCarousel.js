import { Container, Carousel } from "react-bootstrap";
import { RichText } from "prismic-reactjs";
import htmlSerializer from "../lib/htmlSerializer";
import { Fade } from "react-awesome-reveal";

const PicCarousel = ({ projects }) => {
  return (
    <Container>
      {/* <div className="text-center mb-5">
        <RichText htmlSerializer={htmlSerializer} render={projects.primary.projects_title} />
         <RichText render={projects.primary.projects_description} /> 
      </div>*/}
      <Fade duration="3000">
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
      </Fade>
    </Container>
  );
};

export default PicCarousel;
