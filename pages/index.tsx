import { useState, useContext, useEffect } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

import CartContext from "../context/cart/CartContext";
import WishlistContext from "../context/wishlist/WishlistContext";
import { db } from "./../firebase/firebase";
import useWindowSize from "../components/Util/useWindowSize";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GhostButton from "../components/Buttons/GhostButton";
import Button from "../components/Buttons/Button";
import Slideshow from "../components/HeroSection/Slideshow";
import OverlayContainer from "../components/OverlayContainer/OverlayContainer";
import Card3 from "../components/Card/Card3";
import Card5 from "../components/Card/Card5";
import TestiSlider from "../components/TestiSlider/TestiSlider";
import { itemType } from "../context/cart/cart-types";

type Props = {
  products: itemType[];
};

const Home: React.FC<Props> = ({ products }) => {
  const t = useTranslations("Index");
  const [totalItems, setTotalItems] = useState(10);
  const { addOne } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const [viewWidth, setViewWidth] = useWindowSize();

  const currentItems = products.slice(0, totalItems);

  // Change totalItems to 8 for good layout
  useEffect(() => {
    viewWidth <= 1280 ? setTotalItems(8) : setTotalItems(10);
  }, [viewWidth]);

  return (
    <div>
      <Header />
      <Slideshow />
      <section className="w-full h-auto px-2 sm:px-8 md:px-16 py-10 border border-b-2 border-gray100">
        <div className="h-full flex flex-col md:flex-row">
          <div className="h-full w-full md:w-1/3 lg:w-1/2 p-4">
            <OverlayContainer
              imgSrc="/bg-img/banner_minipage1.jpg"
              imgSrc2="/bg-img/banner_minipage1-tablet.jpg"
            >
              <Link href="/new-arrivals">
                <GhostButton
                  value={t("new_arrivals")}
                  size="xl"
                  inverted
                  noBorder
                  extraClass="absolute bottom-10-per right-10-per z-20"
                />
              </Link>
            </OverlayContainer>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 bg-cover p-4">
            <OverlayContainer imgSrc="/bg-img/banner_minipage2.jpg">
              <Link href="/product-category/women">
                <GhostButton
                  value={t("women_collection")}
                  size="lg"
                  inverted
                  noBorder
                  extraClass="absolute bottom-10-per z-20"
                />
              </Link>
            </OverlayContainer>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 bg-cover p-4">
            <OverlayContainer imgSrc="/bg-img/banner_minipage3.jpg">
              <Link href="/product-category/men">
                <GhostButton
                  value={t("men_collection")}
                  size="lg"
                  inverted
                  noBorder
                  extraClass="absolute bottom-10-per z-20"
                />
              </Link>
            </OverlayContainer>
          </div>
        </div>
      </section>
      <section className="w-full h-full flex flex-col justify-center items-center mt-16 mb-20">
        <div className="w-3/4 sm:w-1/2 md:w-1/3 text-center mb-8">
          <h4 className="text-3xl mb-4">{t("best_selling")}</h4>
          <span>{t("best_selling_desc")}</span>
        </div>
        <div className="flex flex-col md:flex-row w-full px-6 sm:px-16 md:px-20">
          <Card3
            imgSrc1={currentItems[3].img1 as string}
            imgSrc2={currentItems[3].img2 as string}
            itemName={currentItems[3].name}
            itemPrice={currentItems[3].price}
            onClick={() => addOne!(currentItems[3])}
            onAddWishlist={() => addToWishlist!(currentItems[3])}
            itemLink={`/products/${encodeURIComponent(currentItems[3].id)}`}
          />
          <Card3
            imgSrc1={currentItems[4].img1 as string}
            imgSrc2={currentItems[4].img2 as string}
            itemName={currentItems[4].name}
            itemPrice={currentItems[4].price}
            onAddWishlist={() => addToWishlist!(currentItems[4])}
            onClick={() => addOne!(currentItems[4])}
            itemLink={`/products/${encodeURIComponent(currentItems[3].id)}`}
          />
          <Card3
            imgSrc1={currentItems[2].img1 as string}
            imgSrc2={currentItems[2].img2 as string}
            itemName={currentItems[2].name}
            itemPrice={currentItems[2].price}
            onAddWishlist={() => addToWishlist!(currentItems[2])}
            onClick={() => addOne!(currentItems[2])}
            itemLink={`/products/${encodeURIComponent(currentItems[3].id)}`}
          />
        </div>
      </section>
      <section className="w-full hidden h-full py-16 md:flex flex-col items-center bg-lightgreen">
        <h4 className="text-3xl">{t("testimonial")}</h4>
        <TestiSlider />
      </section>

      <section className="px-2 sm:px-8 md:px-16 my-16 flex flex-col items-center">
        <div className="text-center mb-6">
          <h4 className="text-3xl">{t("featured_products")}</h4>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap w-full mb-8">
          {currentItems.map((item) => (
            <Card5
              key={item.id}
              imgSrc1={item.img1 as string}
              imgSrc2={item.img2 as string}
              itemName={item.name}
              itemPrice={item.price}
              onAddWishlist={() => addToWishlist!(item)}
              onClick={() => addOne!(item)}
              itemLink={`/products/${encodeURIComponent(item.id)}`}
            />
          ))}
        </div>
        <span
          className="cursor-pointer"
          onClick={() => setTotalItems((prevState) => prevState * 2)}
        >
          <Button value={t("see_more")} />
        </span>
      </section>

      <div className="border-gray100 border-b-2"></div>

      <section className="mt-16 mb-20 flex flex-col justify-center items-center text-center">
        <div className="textBox w-2/5 mb-6">
          <h4 className="text-3xl mb-6">{t("our_shop")}</h4>
          <span>{t("our_shop_desc")}</span>
        </div>
        <div className="w-full px-20 flex justify-center">
          <img className="w-full" src="/bg-img/ourshop.png" alt="Our Shop" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let products: itemType[] = [];
  const res = await db.collection("products").get();
  res.forEach((doc) => {
    let docData = doc.data();
    products = [
      ...products,
      {
        id: docData.id,
        name: docData.name,
        price: docData.price,
        img1: docData.img1,
        img2: docData.img2,
      },
    ];
  });
  return {
    props: {
      messages: {
        // ...require(`../messages/index/${locale}.json`),
        ...require(`../messages/common/${locale}.json`),
      },
      products,
    }, // will be passed to the page component as props
  };
};

export default Home;
