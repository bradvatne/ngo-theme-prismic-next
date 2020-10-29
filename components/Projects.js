import { Carousel } from "react-bootstrap";
import { useState } from "react";
import { RichText } from "prismic-reactjs";

const Projects = ({ projects }) => {
  console.log(projects);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="section-projects">
      <div className="text-center">
        <RichText render={projects.primary.projects_title} />
        <RichText render={projects.primary.projects_description} />
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block h-100 w-100 img-fluid"
            src={projects.items[0].project_image.url}
            alt="Slide"
          />
          <Carousel.Caption>
            <RichText render={projects.items[0].project_title} />
            <RichText render={projects.items[0].project_description} />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-100 w-100"
            src={projects.items[1].project_image.url}
            alt="Slide"
          />
          <Carousel.Caption>
            <RichText render={projects.items[1].project_title} />
            <RichText render={projects.items[1].project_description} />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-100 w-100"
            src={projects.items[1].project_image.url}
            alt="Slide"
          />
          <Carousel.Caption>
            <RichText render={projects.items[1].project_title} />
            <RichText render={projects.items[1].project_description} />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

const RenderCarouselItems = ({ items }) =>
  items.map((item, key) => (
    <Carousel.Item key={key}>
      <img className="d-block w-100" src={item.project_image.url} alt="Slide" />
      <Carousel.Caption>
        <RichText render={item.project_title} />
        <RichText render={item.projects_description} />
      </Carousel.Caption>
    </Carousel.Item>
  ));

export default Projects;
