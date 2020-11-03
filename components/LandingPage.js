import { Banner, SliceZone, LatestProjects } from ".";
import DefaultLayout from "../layouts";
import { Fade } from "react-awesome-reveal";

const LandingPage = ({ header, home, footer, projects }) => (
  <DefaultLayout header={header} footer={footer}>
    <section className="section-landing-page">
      <Banner banner={home.data} />
      <SliceZone slices={home.data.body} />
      <Fade>
        <LatestProjects projects={projects} />
      </Fade>
    </section>
  </DefaultLayout>
);

export default LandingPage;
