import { Container, Row, Col } from "react-bootstrap";
import { RichText } from "prismic-reactjs";

export const LatestProjects = ({ projects }) => {
  return (
    <section className="section-projects py-4">
      <Container>
        <Row>
          <Col md={9} className="p-2">
            <div
              className="section-banner"
              style={{
                backgroundImage: "url(" + projects[0].data.project_image.url + ")",
                height: "100%",
                backgroundSize: "cover",
              }}
            />
          </Col>
          <Col md={3}>
            <Row>
              <Col className="p-2">
                <img
                  src={projects[1].data.project_image.url}
                  className="img-fluid"
                />
              </Col>
            </Row>
            <Row>
              <Col className="p-2">
                <img
                  src={projects[2].data.project_image.url}
                  className="img-fluid"
                />
              </Col>
            </Row>
            <Row>
              <Col className="p-2">
                <img
                  src={projects[1].data.project_image.url}
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LatestProjects;
