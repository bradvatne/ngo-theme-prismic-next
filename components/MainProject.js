import { RichText } from "prismic-reactjs";
import { Button, Container, Row, Col } from "react-bootstrap";

const MainProject = ({ mainProject }) => {
  console.log(mainProject);
  return (
    <section className="section-quote">
      <Row>
        <Col className="d-flex flex-column justify-content-center">
          <RichText render={mainProject.primary.main_project_title} />
        </Col>
        <Col className="d-flex flex-column justify-content-center">
          <RichText render={mainProject.primary.main_project_text} />
          <div className="d-flex flex-row justify-content-center">
          <Button variant="primary">
            {RichText.asText(mainProject.primary.main_project_button_1_label)}
          </Button>
          <Button variant="outline-primary">
            {RichText.asText(mainProject.primary.main_project_button_2_label)}
          </Button>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default MainProject;
