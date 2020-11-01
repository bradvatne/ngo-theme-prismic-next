import DefaultLayout from "../layouts";
import { Client } from "../prismic-configuration";

const Projects = ({ header, footer }) => {
  return (
    <DefaultLayout header={header} footer={footer}>
      <h1>TEST TEST</h1>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const client = Client();
  const home = await client.getSingle("home");
  const header = await client.getSingle("header");
  const footer = await client.getSingle("footer");

  return {
    props: {
      home: home,
      header: header,
      footer: footer,
    },
  };
}

export default Projects;
