import type { AppProps, AppContext } from "next/app";
import "../styles/globals.css";
import "animate.css";
import CartProvider from "../context/CartProvider";
import TextProvider from "../context/TestContext";
import { NextComponentType, NextPageContext } from "next";
import firebase from "../firebase/firebase";
import { ProvideAuth } from "../firebase/firebaseAuth";

type AppCustomProps = {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
  cartState: string;
};

const MyApp = ({ Component, pageProps, cartState }: AppCustomProps) => {
  return (
    <ProvideAuth>
      <CartProvider iniState={cartState}>
        <Component {...pageProps} />
      </CartProvider>
    </ProvideAuth>
  );
};

MyApp.getInitialProps = async (appCtx) => {
  const cartState = appCtx.ctx.req?.cookies?.cartState || '{"cart":[]}';
  return { cartState };
};

export default MyApp;
