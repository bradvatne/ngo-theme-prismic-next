import { Container, Row, Col } from "react-bootstrap";
import { RichText } from "prismic-reactjs";
import { Slide, Fade } from "react-awesome-reveal";

const FeaturedProjects = ({ projects }) => {
  const projectsSlice = projects.slice(0, 3);
  console.log(projectsSlice);
  return (
    <section className="section-featured-projects py-4">
      <Container>
        <Row>
          {projectsSlice.map((item, index) => (
            <Col md={12} key={index}>
              <Row
                className={"py-4 d-flex flex-row" + (index === 1 && "-reverse")}
              >
                <Col md={6}>
                  <Fade duration={1500}>
                    <Slide direction={index === 1 ? "right" : "left"}>
                      <img src={item.data.image.url} className="img-fluid" />
                    </Slide>
                  </Fade>
                </Col>
                <Col
                  md={6}
                  className="d-flex flex-column justify-content-center"
                >
                  <Fade duration={1500}>
                    <Slide direction="up">
                      <div>
                        <RichText render={item.data.content} />
                      </div>
                    </Slide>
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
