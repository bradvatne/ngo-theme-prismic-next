import Head from "next/head";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";
import { LandingPage } from "../components/";

const Index = ({ home, header, footer, projects }) => {
  return (
    <div className="page-container">
      <Head>
        <title>{RichText.asText(home.data.home_page_title)}</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      <LandingPage
        home={home}
        header={header}
        footer={footer}
        projects={projects}
      />
    </div>
  );
};

export async function getStaticProps() {
  const client = Client();

  const home = await client.getSingle("home");
  const header = await client.getSingle("header");
  const footer = await client.getSingle("footer");
  const projects = await client.query(
    Prismic.Predicates.at("document.type", "project")
  );

  return {
    props: {
      home: home,
      header: header,
      footer: footer,
      projects: projects.results,
    },
  };
}

export default Index;
