import { Container, Row, Col } from "react-bootstrap";
import { Client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";
import DefaultLayout from "../layouts";
import { PageBanner, SliceZone } from "../components";

const Donate = ({ donate, header, footer }) => {
  return (
    <DefaultLayout header={header} footer={footer}>
      <PageBanner doc={donate.data} />
      <SliceZone slices={donate.data.body} />
      <Container>
          <Row>
              <Col lg={4}>
                Hello
              </Col>
              <Col lg={4}>
                Hello
              </Col>
              <Col lg={4}>
                Hello
              </Col>
          </Row>
      </Container>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const client = Client();
  const donate = await client.getSingle("donate");
  const header = await client.getSingle("header");
  const footer = await client.getSingle("footer");

  return {
    props: {
      donate,
      header,
      footer,
    },
  };
}

export default Donate;
