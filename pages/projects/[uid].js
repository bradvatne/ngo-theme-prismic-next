import Prismic from "prismic-javascript";
import { Client } from "../../prismic-configuration";
import { PageBanner } from "../../components";
import { Container, Col, Row } from "react-bootstrap";
import DefaultLayout from "../../layouts/index";
import { RichText } from "prismic-reactjs";

const Project = ({ project, header, footer }) => {
  if (project)
    return (
      <DefaultLayout header={header} footer={footer}>
        <PageBanner doc={project.data} />
        <section className="project-section">
          <Container>
            <Row>
              <Col>
                <RichText render={project.data.content} />
              </Col>
            </Row>
          </Container>
        </section>
      </DefaultLayout>
    );
};

export async function getStaticProps({ params }) {
  //Instantiate client from prismic-configuration
  const client = Client();

  //Query API for current project
  const project = await client.getByUID("project", params.uid);

  //Get Header and Footer Data
  const header = await client.getSingle("header");
  const footer = await client.getSingle("footer");

  return {
    props: {
      project: project ? project : {},
      header: header ? header : {},
      footer: footer ? footer : {},
    },
  };
}

export async function getStaticPaths() {
  //Instantiate client from prismic-configuration
  const client = Client();

  //Call API to retrieve all project documents
  const projectsList = await client.query(
    Prismic.Predicates.at("document.type", "project")
  );

  //Pull UID's from projects and map to an array
  const paths = projectsList.results.map(
    (project) => `/projects/${project.uid}`
  );

  //Return paths as props
  return {
    paths: paths ? paths: {},
    fallback: true,
  };
}

export default Project;
