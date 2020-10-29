import { Container, Col, Row } from "react-bootstrap";
import { RichText } from "prismic-reactjs";

/*
statistic_number
statistic_icon
statistic_title
statistic_description
*/
const Stats = ({ stats }) => {
  console.log("STATS INFO");
  console.log(stats);
  return (
    <Container>
      <Row>
        {stats.items.map((item, key) => (
          <Col className="column-sm-2" className="text-center" key={key}>
            <div className="">
              <i className={item.statistic_icon[0].text + " fa-1x"} />
              <h1>{item.statistic_number}</h1>
            <RichText render={item.statistic_description} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Stats;
