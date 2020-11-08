import { Client } from "../prismic-configuration";
import { PageBanner } from "../components";
import DefaultLayout from "../layouts";
import { Fade } from "react-awesome-reveal";
import { SliceZone } from "../components";

const About = ({ about, header, footer }) => {
  return (
    <DefaultLayout header={header} footer={footer}>
      <PageBanner doc={about.data} />
      <section className="section-about">
        <SliceZone slices={about.data.body} />
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
