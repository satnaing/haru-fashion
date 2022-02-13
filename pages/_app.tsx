import { NextComponentType, NextPageContext, NextPage } from "next";
import Router from "next/router";
import NProgress from "nprogress";

import CartProvider from "../context/cart/CartProvider";
import WishlistProvider from "../context/wishlist/WishlistProvider";
import { ProvideAuth } from "../firebase/firebaseAuth";

import "../styles/globals.css";
import "animate.css";
import "nprogress/nprogress.css";
import "react-slideshow-image/dist/styles.css";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type AppCustomProps = {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
  cartState: string;
  wishlistState: string;
};

const MyApp = ({
  Component,
  pageProps,
  cartState,
  wishlistState,
}: AppCustomProps) => {
  return (
    <ProvideAuth>
      <CartProvider iniState={cartState}>
        <WishlistProvider iniState={wishlistState}>
          <Component {...pageProps} />
        </WishlistProvider>
      </CartProvider>
    </ProvideAuth>
  );
};

MyApp.getInitialProps = async (appCtx: any) => {
  const cartState = appCtx.ctx.req?.cookies?.cartState || '{"cart":[]}';
  const wishlistState =
    appCtx.ctx.req?.cookies?.wishlistState || '{"wishlist":[]}';
  return { cartState, wishlistState };
};

export default MyApp;
