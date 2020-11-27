import { Container, Row, Col, Button } from "react-bootstrap";
import { RichText } from "prismic-reactjs";
import { Slide, Fade } from "react-awesome-reveal";

const FeaturedProjects = ({ projects }) => {
  const projectsSlice = projects.slice(0, 3);
  console.log(projects);
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
                  <Fade triggerOnce direction="up">
                    <img
                      src={item.data.image.url}
                      className="img-fluid shadow-lg"
                      style={{ zIndex: "999" }}
                    />
                  </Fade>
                </Col>
                <Col
                  md={6}
                  className={
                    "d-flex flex-column justify-content-center" +
                    (index === 1 ? " text-md-right" : " ")
                  }
                >
                  <Fade triggerOnce direction="up">
                    <div
                      className={
                        "text-center text-md-left py-2" +
                        (index === 1 ? " text-md-right" : " ")
                      }
                    >
                      <RichText render={item.data.title} />
                      <small className="text-muted text-uppercase">
                        Published: {item.data.date}
                      </small>
                    </div>
                    <div>
                      <RichText render={item.data.content} />
                    </div>
                    <Button variant="outline-blu" className="px-3">
                      <small className="text-uppercase">See More</small>
                    </Button>
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
