import DefaultLayout from "../layouts";
import { Client } from "../prismic-configuration";
import { PageBanner } from "../components";

const Projects = ({ header, footer, projects }) => {
  return (
    <DefaultLayout header={header} footer={footer}>
      <PageBanner projects={projects.data} />
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const client = Client();
  const projects = await client.getSingle("projects");
  const header = await client.getSingle("header");
  const footer = await client.getSingle("footer");

  return {
    props: {
      projects: projects,
      header: header,
      footer: footer,
      project: projects
    },
  };
}

export default Projects;
