import Prismic from "prismic-javascript";
import Link from "next/link";
import { Client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";
import { PageBanner } from "../components";
import { Container, Row, Col } from "react-bootstrap";
import DefaultLayout from "../layouts";
import { Fade } from "react-awesome-reveal";

const About = ({ about, header, footer }) => {
  return (
    <DefaultLayout header={header} footer={footer}>
      <PageBanner doc={about.data} />
      <section className="section section-pagebanner">
        <Container>
          <Row>About</Row>
        </Container>
      </section>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const client = Client();
  const about = await client.getSingle("about");
  const header = await client.getSingle("header");
  const footer = await client.getSingle("footer");

  return {
    props: {
      about,
      header,
      footer,
    },
  };
}

export default About;
