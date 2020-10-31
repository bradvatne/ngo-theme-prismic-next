import { RichText } from "prismic-reactjs";
import { Col } from "react-bootstrap";

const Socials = ({ socials }) => {
  return (
    <Col sm="12" md="3">
      <RichText render={socials.primary.socials_widget_title} />
      <SocialsList socialsList={socials.items} />
    </Col>
  );
};

const SocialsList = ({ socialsList }) => {
  return socialsList.map((item, index) => {
    switch (item.socials_widget_loco) {
      case "Facebook":
        return (
          <SocialItem
            social="fab fa-facebook"
            link={item.socials_widget_link}
            key={index}
          />
        );
      case "Instagram":
        return (
          <SocialItem
            social="fab fa-instagram"
            link={item.socials_widget_link}
            key={index}
          />
        );
      case "Youtube":
        return (
          <SocialItem
            social="fab fa-youtube"
            link={item.socials_widget_link}
            key={index}
          />
        );
      case "Twitter":
        return (
          <SocialItem
            social="fab fa-twitter"
            link={item.socials_widget_link}
            key={index}
          />
        );
    }
    return;
  });
};

const SocialItem = ({ social, link }) => {
  return <i className={social + " fa-3x"} />;
};

export default Socials;
