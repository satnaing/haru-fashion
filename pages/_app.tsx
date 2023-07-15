import {NextComponentType, NextPageContext} from "next";
import Router from "next/router";
import NProgress from "nprogress";
import {NextIntlProvider} from "next-intl";

import {ProvideCart} from "../context/cart/CartProvider";
import {ProvideWishlist} from "../context/wishlist/WishlistProvider";
import {ProvideAuth} from "../context/AuthContext";

import "../styles/globals.css";
import "animate.css";
import "nprogress/nprogress.css";
import 'react-toastify/dist/ReactToastify.min.css';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import {toast, ToastContainer} from "react-toastify";


Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type AppCustomProps = {
    Component: NextComponentType<NextPageContext, any, {}>;
    pageProps: any;
    cartState: string;
    wishlistState: string;
};


const MyApp = ({Component, pageProps}: AppCustomProps) => {

    return (
        <NextIntlProvider messages={pageProps?.messages}>
            <ProvideAuth>
                <ProvideWishlist>
                    <ProvideCart>
                        <Component {...pageProps} />
                        <ToastContainer rtl position={toast.POSITION.TOP_CENTER} theme="colored" limit={1}/>
                    </ProvideCart>
                </ProvideWishlist>
            </ProvideAuth>
        </NextIntlProvider>
    );
};

export default MyApp;
