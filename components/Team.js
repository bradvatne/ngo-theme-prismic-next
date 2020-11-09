import { Row, Col, Container } from "react-bootstrap";
import { RichText } from "prismic-reactjs";

export const Team = ({ team }) => {
  return (
    <Container>
      <Row className="d-flex flex-row justify-content-center">
        {team.items.map((item, index) => (
          <Col lg={4}>
            <div className="text-center">
                <img
                  src={item.portrait.url}
                  className="img-fluid rounded-circle shadow-lg w-75 "
                />
              <RichText render={item.name} />
            </div>
            <RichText render={item.bio} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Team;
