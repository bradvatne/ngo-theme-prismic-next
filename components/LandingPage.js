import { Banner, SliceZone, LatestProjects } from ".";
import DefaultLayout from "../layouts";

const LandingPage = ({ header, home, footer, projects }) => (
  <DefaultLayout header={header} footer={footer}>
    <section className="section-landing-page">
      <Banner banner={home.data} />
      <SliceZone slices={home.data.body} />
        <LatestProjects projects={projects} />
    </section>
  </DefaultLayout>
);

export default LandingPage;
