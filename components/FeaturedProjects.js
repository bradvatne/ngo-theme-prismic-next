import { Container, Row, Col } from "react-bootstrap";
import { RichText } from "prismic-reactjs";

const FeaturedProjects = ({ projects }) => {
  const projectsSlice = projects.slice(0, 3);
  console.log(projectsSlice);
  return (
    <section className="section-featured-projects py-4">
      <Container>
        <Row>
          {projectsSlice.map((item, index) => (
            <Col md={12} key={index}>
              <Row className={"py-4 d-flex flex-row" + (index === 1 && "-reverse")}>
                <Col md={6}>
                  <img src={item.data.image.url} className="img-fluid" />
                </Col>
                <Col md={6} className="d-flex flex-column justify-content-center"><RichText render={item.data.content}/></Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
