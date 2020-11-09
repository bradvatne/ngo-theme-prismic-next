import { Header, Footer } from "../components/index";
import Head from 'next/head';

const DefaultLayout = (props) => {
  return (
    <div className="layout-container">
    <Head>
    <script src="https://kit.fontawesome.com/cf45b65f00.js" crossorigin="anonymous"></script>
    </Head>
      <Header header={props.header.data} />
      {props.children}
        <Footer footer={props.footer.data} nav={props.header.data} />
    </div>
  );
};

export default DefaultLayout;
