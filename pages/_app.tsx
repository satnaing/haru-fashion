import type { AppProps, AppContext } from "next/app";
import "../styles/globals.css";
import "animate.css";
import CartProvider from "../context/CartProvider";
import TextProvider from "../context/TestContext";
import { NextComponentType, NextPageContext } from "next";

type AppCustomProps = {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
  cartState: string;
};

// const MyApp = ({ Component, pageProps }: AppCustomProps) => {
//   return (
//     <TextProvider>
//       <Component {...pageProps} />
//     </TextProvider>
//   );
// };

const MyApp = ({ Component, pageProps, cartState }: AppCustomProps) => {
  return (
    <CartProvider iniState={cartState}>
      <TextProvider>
        <Component {...pageProps} />
      </TextProvider>
    </CartProvider>
  );
};

MyApp.getInitialProps = async (appCtx) => {
  const cartState = appCtx.ctx.req?.cookies?.cartState || '{"cart":[]}';
  return { cartState };
};

export default MyApp;
