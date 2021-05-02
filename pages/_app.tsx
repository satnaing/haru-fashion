import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/globals.css";
import "animate.css";
import { AuthProvider } from "../context/AuthContext";
import CartProvider from "../context/CartProvider";
// import CartProvider from "../components/context/cartStore";
// import "react-slideshow-image/dist/styles.css";
// import "../styles/carousel.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
    //    <AuthProvider>
    //    <Component {...pageProps} />
    //  </AuthProvider>
  );
};

export default MyApp;
