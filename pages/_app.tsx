import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/globals.css";
import "animate.css";
// import "react-slideshow-image/dist/styles.css";
// import "../styles/carousel.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
