// pages/_app.js
import "../styles/_global.scss";
import { ParallaxProvider } from "react-scroll-parallax";

const MyApp = ({ Component, pageProps }) => (
  <ParallaxProvider>
    <Component {...pageProps} />;
  </ParallaxProvider>
);
export default MyApp;
