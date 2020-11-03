import Quote from "./Quote";
import Values from "./Values";
import MainProject from "./MainProject";
import PicCarousel from "./PicCarousel";
import Stats from "./Stats";
import { Fade } from "react-awesome-reveal";

const SliceZone = ({ slices }) => (
  <>
    {slices.map((slice, index) => {
      switch (slice.slice_type) {
        case "quote":
          return (
            <section
              className={`section-quote slice-zone py-4`}
              key={`slice-${index}`}
            >
              <Fade>
                <Quote quote={slice.primary} />
              </Fade>
            </section>
          );
        case "values":
          return (
            <section className="section-values py-4" key={`slice-${index}`}>
              <Fade>
                <Values values={slice} key={`slice-${index}`} />
              </Fade>
            </section>
          );
        case "main_project":
          return (
            <section
              className="section-main-project py-4"
              key={`slice-${index}`}
            >
              <Fade>
                <MainProject mainProject={slice} />
              </Fade>
            </section>
          );
        case "projects":
          return (
            <section className="section-projects py-4" key={`slice-${index}`}>
              <Fade>
                <PicCarousel projects={slice} />
              </Fade>
            </section>
          );
        case "statistics":
          return (
            <section className="section-statistics py-4" key={`slice-${index}`}>
              <Fade>
                <Stats stats={slice} />
              </Fade>
            </section>
          );
      }
    })}
  </>
);

export default SliceZone;
