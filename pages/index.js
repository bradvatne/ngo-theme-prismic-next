import Head from "next/head";
import { Client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";
import { Container, Row } from "react-bootstrap";

import Header from "./Header";
import Footer from "./Footer"
import Banner from "./components/Banner"
import SliceZone from "./components/SliceZone";

const Index = ({ home, header }) => {
  //Tests
  const banner = home.data;
  const quote = home.data.body[0].primary;
  const nav = header.data;
  console.log(home);
  console.log(header);
  console.log(banner);
  console.log(quote);

  return (
    <>
      <Header header={nav} />
      <div className="home-container">
        <Head>
          <title>{RichText.asText(banner.page_title)}</title>
        </Head>

        <Banner banner={banner} />
        <SliceZone slices={home.data.body} />
      </div>
      <Footer/>
    </>
  );
};

export async function getStaticProps() {
  const client = Client();
  const home = await client.getSingle("home");
  const header = await client.getSingle("header");

  return {
    props: {
      home: home,
      header,
    },
  };
}

export default Index;
