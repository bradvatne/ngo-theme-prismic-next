import Prismic from "prismic-javascript";
import Link from "next/link";
import { Client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";
import { PageBanner } from "../components";
import { Container, Row, Col } from "react-bootstrap";
import DefaultLayout from "../layouts";

const Projects = ({ header, footer, projects, projectsPosts }) => {
  return (
    <DefaultLayout header={header} footer={footer}>
      <PageBanner doc={projects.data} />
      <section className="projects-container py-4">
        <Container>
          <Row>
            {projectsPosts.results.map((project) => (
              <Col md={6} key={project.id} className="py-3">
                <Link
                  href={{
                    pathname: "/projects/[uid]",
                    query: { uid: project.uid },
                  }}
                >
                  <img className="img-fluid" src={project.data.image.url} />
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const client = Client();
  const projects = await client.getSingle("projects");
  const header = await client.getSingle("header");
  const footer = await client.getSingle("footer");
  const projectsPosts = await client.query(
    Prismic.Predicates.at("document.type", "project")
  );

  return {
    props: {
      projects: projects,
      header: header,
      footer: footer,
      projectsPosts: projectsPosts,
    },
  };
}

export default Projects;
