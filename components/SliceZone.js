import Quote from "./Quote";
import Values from "./Values";
import MainProject from "./MainProject";
import PicCarousel from "./PicCarousel";
import Stats from "./Stats";
import BrandIcons from "./BrandIcons"

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
              className="section-statistics section"
              key={`slice-${index}`}
            >
              <Stats stats={slice} />
            </section>
          );
          case "icon_section":
          console.log('DING')
          return (
            <section
              className="section-brand-icons section"
              key={`slice-${index}`}
            >
              <BrandIcons doc={slice} />
            </section>
          );
      }
    })}
  </>
);

export default SliceZone;
