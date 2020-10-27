import SliceZone from "./components/SliceZone";

const Footer = ({ footer }) => {
  console.log("footer data: ");
  console.log(footer);

  return <SliceZone slices={footer.body} />;
};

export default Footer;
