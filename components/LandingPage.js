import { Head } from "next/head";
import { Banner, SliceZone, LatestProjects } from ".";
import { Client } from "../prismic-configuration";
import DefaultLayout from "../layouts";

const LandingPage = ({ header, home, footer }) => (
  <DefaultLayout header={header} footer={footer}>
    <section className="section-landing-page">
      <Banner banner={home.data} />
      <SliceZone slices={home.data.body} />
      <LatestProjects />
    </section>
  </DefaultLayout>
);

export default LandingPage;
