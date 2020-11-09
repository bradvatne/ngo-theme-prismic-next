import Prismic from "prismic-javascript";
import Link from "next/link";
import { Client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";
import { PageBanner } from "../components";
import { Container, Row, Col } from "react-bootstrap";
import DefaultLayout from "../layouts";
import { Fade } from "react-awesome-reveal";
import {Timeline} from '../components';

const Dream = ({ dream, header, footer }) => {
  return (
    <DefaultLayout header={header} footer={footer}>
      <PageBanner doc={dream.data} />
      <section className="section section-pagebanner">
        <Container>
          <Timeline />
        </Container>
      </section>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const client = Client();
  const dream = await client.getSingle("dream");
  const header = await client.getSingle("header");
  const footer = await client.getSingle("footer");

  return {
    props: {
      dream,
      header,
      footer,
    },
  };
}

export default Dream;
