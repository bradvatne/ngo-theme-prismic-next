import { Row, Col, Container } from "react-bootstrap";
import { RichText } from "prismic-reactjs";

export const Team = ({ team }) => {
  console.log("TEAM SECTION");
  console.log(team);
  return (
    <section className="section section-team bg-custom-bg">
      <Container>
        <Row className="d-flex flex-row justify-content-center team-members">
          {team.items.map((item, index) => (
            <Col lg={4} key={index}>
            <div className="text-center">
              <img
                src={item.portrait.url}
                className="img-fluid rounded-circle shadow-lg w-75"
              /> 
                <RichText render={item.name} />
              </div>
              <RichText render={item.bio} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
