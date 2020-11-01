import { Head } from "next/head";
import { Banner, SliceZone } from ".";
import { Client } from "../prismic-configuration";
import DefaultLayout from "../layouts";

const LandingPage = ({ header, home, footer }) => (
  <DefaultLayout header={header} footer={footer}>
    <section className="section-landing-page">
      <Banner banner={home.data} />
      <SliceZone slices={home.data.body} />
    </section>
  </DefaultLayout>
);

export default LandingPage;
