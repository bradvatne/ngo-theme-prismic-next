import { RichText } from "prismic-reactjs";
import { Row, Col } from "react-bootstrap";

//Current step : map through socials list

const Socials = ({ socials }) => {
  console.log("socials: ");
  console.log(socials);
  return (
    <Col>
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
          />
        );
      case "Instagram":
        return (
          <SocialItem
            social="fab fa-instagram"
            link={item.socials_widget_link}
          />
        );
      case "Youtube":
        return (
          <SocialItem social="fab fa-youtube" link={item.socials_widget_link} />
        );
      case "Twitter":
        return (
          <SocialItem social="fab fa-twitter" link={item.socials_widget_link} />
        );
    }
    return;
  });
};

const SocialItem = ({ social, link }) => {
  console.log(link);
  return <i className={social + " fa-3x"} />;
};

export default Socials;
