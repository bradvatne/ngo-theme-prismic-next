import Prismic from "prismic-javascript";
import { Client } from "../../prismic-configuration";

const Project = ({ project }) => {
  console.log("Page Props Test, Should Return an object with all of the page data, called during render");
  console.log(project);
  return <div>Test</div>;
};

export async function getStaticProps({ params }) {
  //create client to query api
  const client = Client();
  //make sure params is correctly passed
  // console.log("getStaticProps Params Test");
  // console.log(params.uid);

  //
  //getByUid takes param of document type (project) and UID (params.uid) & returns a single page object matching the slug param
  const project = await client.getByUID("project", params.uid);

  //test to see page object data
  console.log("getStaticProps Query Results: Should return a page object with");
  console.log(project);

  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  //create client which queries api
  const client = Client();
  //returns array of pages with type of "project"
  const projectsList = await client.query(
    Prismic.Predicates.at("document.type", "project")
  );

  //tests to see if project list is returned

  // console.log("Project List Tests: ");
  // console.log(projectsList.results);
  // console.log(projectsList.results[0].uid);
  console.log("Path Test: Should return a url slug");
  const pathTest = projectsList.results.map(
    (project) => `/project/${project.uid}`
  );
  console.log(pathTest);

  return {
    paths: projectsList.results.map((project) => `/project/${project.uid}`),
    fallback: true,
  };
}

export default Project;
