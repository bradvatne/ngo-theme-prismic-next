import { Container, Row, Col } from "react-bootstrap";
import { RichText } from "prismic-reactjs";
import { Slide, Fade } from "react-awesome-reveal";

const FeaturedProjects = ({ projects }) => {
  const projectsSlice = projects.slice(0, 3);
  return (
    <section className="section section-featured-projects bg-light">
      <Container>
        <Row>
          {projectsSlice.map((item, index) => (
            <Col md={12} key={index}>
              <Row
                className={"py-4 d-flex flex-row" + (index === 1 && "-reverse")}
              >
                <Col md={6}>
                  <Fade triggerOnce>
                    <Slide triggerOnce direction={index === 1 ? "right" : "left"}>
                      <img
                        src={item.data.image.url}
                        className="img-fluid shadow-lg"
                        style={{ zIndex: "999" }}
                      />
                    </Slide>
                  </Fade>
                </Col>
                <Col
                  md={6}
                  className={
                    "d-flex flex-column justify-content-center" +
                    (index === 1 ? " text-md-right" : " ")
                  }
                >
                  <Fade triggerOnce direction="down">
                    <div style={{ zIndex: 3 }}>
                      <RichText render={item.data.title} />
                      <RichText render={item.data.content} />
                    </div>
                  </Fade>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
