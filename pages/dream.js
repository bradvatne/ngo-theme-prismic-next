import { Client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";
import { PageBanner } from "../components";
import { Container } from "react-bootstrap";
import DefaultLayout from "../layouts";
import { SliceZone } from "../components";

const Dream = ({ dream, header, footer }) => {
  console.log('DREAM DATA')
  console.log(dream)
  return (
    <DefaultLayout header={header} footer={footer}>
      <PageBanner doc={dream.data} />
      <section className="section section-pagebanner">
        <Container>
          <RichText render={dream.data.content} />
          <SliceZone slices={dream.data.body}/>
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
