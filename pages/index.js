import Head from "next/head";
import { Client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";
import { Container, Row } from "react-bootstrap";

import Header from "./Header";
import Footer from "./Footer"
import Banner from "../components/Banner"
import SliceZone from "../components/SliceZone";

const Index = ({ home, header, footer }) => {

  return (
    <>
      <Header header={header.data} />
      <div className="home-container">
        <Head>
          <title>{RichText.asText(home.data.home_page_title)}</title>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet"/>
        </Head>

        <Banner banner={home.data} />
        <SliceZone slices={home.data.body} />
      </div>
      <Footer footer={footer.data}/>
    </>
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

export default Index;
