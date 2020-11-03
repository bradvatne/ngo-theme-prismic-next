import { Header, Footer } from "../components";

const DefaultLayout = (props) => {
  return (
    <div className="layout-container">
      <Header header={props.header.data} />
      {props.children}
      <Footer footer={props.footer.data} nav={props.header.data} />
    </div>
  );
};

export default DefaultLayout;
