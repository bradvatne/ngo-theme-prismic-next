import { RichText } from "prismic-reactjs";
import { Button, Container, Row, Col } from "react-bootstrap";

const MainProject = ({ mainProject }) => {
  return (
    <Container>
      <Row>
        <Col
          sm="12"
          md="6"
          className="d-flex flex-column justify-content-center text-center"
        >
          <RichText render={mainProject.primary.main_project_title} />
        </Col>
        <Col
          sm="12"
          md="6"
          className="d-flex flex-column justify-content-center"
        >
          <RichText render={mainProject.primary.main_project_text} />
          <div className="d-flex flex-row justify-content-center">
            <Button variant="primary" className="px-5 mx-3">
              {RichText.asText(mainProject.primary.main_project_button_1_label)}
            </Button>
            <Button variant="outline-primary" className="px-5 mx-3">
              {RichText.asText(mainProject.primary.main_project_button_2_label)}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainProject;
