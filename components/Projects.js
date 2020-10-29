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
      <div className="text-center mb-5">
        <RichText render={projects.primary.projects_title} />
        <RichText render={projects.primary.projects_description} />
      </div>
      <Carousel>
        {projects.items.map((item) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={item.project_image.url}
              alt="Slide"
            />
            <Carousel.Caption>
              <RichText render={item.project_title} />
              <RichText render={item.projects_description} />
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Projects;
