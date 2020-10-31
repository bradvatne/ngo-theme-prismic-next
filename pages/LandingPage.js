import { Head } from "next/head";
import { Banner, SliceZone } from "../components";
import { Client } from "../prismic-configuration";

const LandingPage = ({ home }) => (
  <section className="section-landing-page">
    <Banner banner={home.data} />
    <SliceZone slices={home.data.body} />
  </section>
);

export default LandingPage;
