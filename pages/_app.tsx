import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/globals.css";
import "animate.css";
import { AuthProvider } from "../context/AuthContext";
import CartProvider from "../context/CartProvider";
import MainProvider from "../context/MainProvider";
import TextProvider from "../context/TestContext";
// import CartProvider from "../components/context/cartStore";
// import "react-slideshow-image/dist/styles.css";
// import "../styles/carousel.css";

const MyApp = ({ Component, pageProps, cartState }: any) => {
  return (
    <CartProvider iniState={cartState}>
      <TextProvider>
        <Component {...pageProps} />
      </TextProvider>
    </CartProvider>
    // <MainProvider>
    //   <Component {...pageProps} />
    // </MainProvider>
  );
};

MyApp.getInitialProps = async (appCtx) => {
  // console.log(appCtx.ctx.req.cookies.cartState);
  let cartState;
  // if (appCtx.ctx.req.cookies.cartState) {
  //   cartState = appCtx.ctx.req.cookies.cartState || "";
  // }
  cartState = appCtx.ctx.req?.cookies?.cartState || '{"cart":[]}';

  // try {
  //   cartState = appCtx.ctx.req.cookies.cartState || "";
  // } catch {}

  return { cartState };
};

// export const getServerSideProps = async (context) => {
//   console.log("hello from app");
//   return {
//     props: {
//       initialRememberValue: "haha" || "",
//     },
//   };
// };

export default MyApp;
