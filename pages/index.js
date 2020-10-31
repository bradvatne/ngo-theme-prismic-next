import Head from "next/head";
import { Client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";

import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./LandingPage";

const Index = ({ home, header, footer }) => {
  return (
    <div className="layout">
      <Head>
        <title>{RichText.asText(home.data.home_page_title)}</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      <Header header={header.data} />
      <LandingPage home={home}/>
      <Footer footer={footer.data} />
    </div>
  );
};

export async function getStaticProps() {
  const client = Client();
  const home = await client.getSingle("home")
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

export default Index;
