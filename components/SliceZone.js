import Quote from "./Quote";
import Values from "./Values";
import MainProject from "./MainProject";
import PicCarousel from "./PicCarousel";
import Stats from "./Stats";

const Animate = () => (<div></div>)

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
                <Quote quote={slice.primary} />
            </section>
          );
        case "values":
          return (
            <section className="section-values py-4" key={`slice-${index}`}>
                <Values values={slice} key={`slice-${index}`} />
            </section>
          );
        case "main_project":
          return (
            <section
              className="section-main-project py-4"
              key={`slice-${index}`}
            >
                <MainProject mainProject={slice} />
            </section>
          );
        case "projects":
          return (
            <section className="section-projects py-4" key={`slice-${index}`}>
                <PicCarousel projects={slice} />
            </section>
          );
        case "statistics":
          return (
            <section className="section-statistics py-4" key={`slice-${index}`}>
                <Stats stats={slice} />
            </section>
          );
      }
    })}
  </>
);

export default SliceZone;
