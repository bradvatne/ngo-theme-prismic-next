import {
  Team,
  Partners,
  BrandIcons,
  Stats,
  PicCarousel,
  MainProject,
  Values,
  Quote,
  Timeline,
} from "./index";

const SliceZone = ({ slices }) => (
  <>
    {slices.map((slice, index) => {
      switch (slice.slice_type) {
        case "quote":
          return (
            <section
              className={`section-quote slice-zone section`}
              key={`slice-${index}`}
            >
              <Quote quote={slice.primary} />
            </section>
          );
        case "values":
          if (slice) return;
          return (
            <section
              className="section-values section bg-clr"
              key={`slice-${index}`}
            >
              <Values values={slice} key={`slice-${index}`} />
            </section>
          );
        case "main_project":
          return (
            <section
              className="section-main-project section bg-light"
              key={`slice-${index}`}
            >
              <MainProject mainProject={slice} />
            </section>
          );
        case "projects":
          return (
            <section
              className="section-projects section"
              key={`slice-${index}`}
            >
              <PicCarousel projects={slice} />
            </section>
          );
        case "statistics":
          return (
            <section
              className=" section section-statistics"
              key={`slice-${index}`}
            >
              <Stats stats={slice} />
            </section>
          );
        case "icon_section":
          return (
            <section
              className="section section-brand-icons bg-custom-bg"
              key={`slice-${index}`}
            >
              <BrandIcons doc={slice} />
            </section>
          );
        case "team":
          return (
            <section className="section section-team" key={`slice-${index}`}>
              <Team team={slice} />
            </section>
          );
        case "partners":
          return (
            <section
              className="section-partners section bg-custom-dark"
              key={`slice-${index}`}
            >
              <Partners partners={slice} />
            </section>
          );
        case "carousel":
          return (
            <section
              className="section section-carousel"
              key={`slice-${index}`}
            >
              <PicCarousel doc={slice} />
            </section>
          );
        case "timeline":
          return (
            <section className="section section-timeline"
            key={`slice-${index}`}
            >
              <Timeline doc={slice} />
            </section>
          )
      }
    })}
  </>
);

export default SliceZone;
