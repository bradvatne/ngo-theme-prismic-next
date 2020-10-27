import Quote from "./Quote";
import Values from "./Values";
import { Container } from "react-bootstrap";

const SliceZone = ({ slices }) => (
  <Container className="slice-zone">
    {slices.map((slice, index) => {
      switch (slice.slice_type) {
        case "quote":
          console.log("slice zone: ");
          console.log(slice.primary);
          return <Quote quote={slice.primary} key={`slice-${index}`} />;
        case "values":
          console.log("values slice zone: ");
          console.log(slice)
          return <Values values={slice} key={`slice-${index}`} />;
      }
    })}
  </Container>
);

export default SliceZone;
