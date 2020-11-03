import { Header, Footer } from "../components";
import { Fade } from "react-awesome-reveal";

const DefaultLayout = (props) => {
  return (
    <div className="layout-container">
      <Header header={props.header.data} />
      {props.children}
      <Fade>
        <Footer footer={props.footer.data} nav={props.header.data} />
      </Fade>
    </div>
  );
};

export default DefaultLayout;
