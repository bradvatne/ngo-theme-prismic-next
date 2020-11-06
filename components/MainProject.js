import { RichText } from "prismic-reactjs";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";

const MainProject = ({ mainProject }) => {
  return (
    <Container>
      <Row>
        <Col
          sm="12"
          md="6"
          className="d-flex flex-column justify-content-center"
        >
          <Fade duration="1500">
            <Slide direction="left" duration="1500">
              <div>
                <RichText render={mainProject.primary.main_project_title} />
              </div>
            </Slide>
          </Fade>
        </Col>
        <Col
          sm="12"
          md="6"
          className="d-flex flex-column justify-content-center"
        >
          <Fade duration="1500">
            <Slide direction="right" duration="1500">
              <div>
                <RichText render={mainProject.primary.main_project_text} />
                <div className="d-flex flex-row justify-content-center">
                  <Button variant="primary" className="px-5 mx-3">
                    {RichText.asText(
                      mainProject.primary.main_project_button_1_label
                    )}
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="px-5 mx-3 text-nowrap"
                  >
                    {RichText.asText(
                      mainProject.primary.main_project_button_2_label
                    )}
                  </Button>
                </div>
              </div>
            </Slide>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default MainProject;
