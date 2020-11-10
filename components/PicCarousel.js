import { Container, Carousel } from "react-bootstrap";
import { RichText } from "prismic-reactjs";
import htmlSerializer from "../lib/htmlSerializer";
import { Fade } from "react-awesome-reveal";

const PicCarousel = ({ doc }) => {
  console.log(doc);
  return (
    <Fade triggerOnce>
      <Carousel>
        {doc.items.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={item.carousel_image.url}
              alt="Slide"
            />
            <Carousel.Caption>
              <div>
                <RichText render={item.carousel_image_title} />
                <RichText render={item.carousel_image_tagline} />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Fade>
  );
};

export default PicCarousel;
