import { useContext, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useTranslations } from "next-intl";

import firebase, { db } from "../../firebase/firebase";
import CartContext from "../../context/cart/CartContext";
import Heart from "../../public/icons/Heart";
import DownArrow from "../../public/icons/DownArrow";
import FacebookLogo from "../../public/icons/FacebookLogo";
import InstagramLogo from "../../public/icons/InstagramLogo";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GhostButton from "../../components/Buttons/GhostButton";
import Button from "../../components/Buttons/Button";
import Card from "../../components/Card/Card";

// swiperjs
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";
import WishlistContext from "../../context/wishlist/WishlistContext";
import { dbItemType, itemType } from "../../context/cart/cart-types";
import HeartSolid from "../../public/icons/HeartSolid";
import Image from "next/image";

// install Swiper modules
SwiperCore.use([Pagination]);

type Props = {
  post: dbItemType;
  products: dbItemType[];
};

const Product: React.FC<Props> = ({ post, products }) => {
  const img1 = post.img1;
  const img2 = post.img2;

  const { addItem } = useContext(CartContext);
  const { wishlist, addToWishlist, deleteWishlistItem } =
    useContext(WishlistContext);
  const [size, setSize] = useState("M");
  const [mainImg, setMainImg] = useState(img1);
  const [currentQty, setCurrentQty] = useState(1);
  const t = useTranslations("Category");

  const alreadyWishlisted =
    wishlist.filter((wItem) => wItem.id === post.id).length > 0;

  useEffect(() => {
    setMainImg(post.img1);
  }, [post]);

  const handleSize = (value: string) => {
    setSize(value);
  };

  const currentItem = {
    ...post,
    qty: currentQty,
  };

  const handleWishlist = () => {
    alreadyWishlisted
      ? deleteWishlistItem!(currentItem)
      : addToWishlist!(currentItem);
  };

  return (
    <div>
      {/* ===== Head Section ===== */}
      <Header title={`${post.name} - Haru Fashion`} />

      {/* ===== Breadcrumb Section ===== */}
      <div className="bg-lightgreen h-16 w-full flex items-center border-t-2 border-gray200">
        <div className="app-x-padding app-max-width w-full">
          <div className="breadcrumb">
            <Link href="/">
              <a className="text-gray400">{t("home")}</a>
            </Link>{" "}
            /{" "}
            <Link href={`/product-category/${post.category}`}>
              <a className="text-gray400 capitalize">
                {t(post.category as string)}
              </a>
            </Link>{" "}
            / <span>{post.name}</span>
          </div>
        </div>
      </div>

      {/* ===== Main Content Section ===== */}
      <div className="itemSection app-max-width app-x-padding flex flex-col md:flex-row">
        <div className="imgSection w-full md:w-1/2 h-full flex">
          <div className="hidden sm:block w-full sm:w-1/4 h-full space-y-4 my-4">
            <Image
              className={`cursor-pointer ${
                mainImg === img1
                  ? "opacity-100 border border-gray300"
                  : "opacity-50"
              }`}
              onClick={() => setMainImg(img1)}
              src={img1 as string}
              alt={post.name}
              width={1000}
              height={1282}
            />
            <Image
              className={`cursor-pointer ${
                mainImg === img2
                  ? "opacity-100 border border-gray300"
                  : "opacity-50"
              }`}
              onClick={() => setMainImg(img2)}
              src={img2 as string}
              alt={post.name}
              width={1000}
              height={1282}
            />
          </div>
          <div className="w-full sm:w-3/4 h-full m-0 sm:m-4">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              pagination={{
                clickable: true,
              }}
              className="mySwiper sm:hidden"
            >
              <SwiperSlide>
                <Image
                  className="each-slide w-full"
                  src={img1 as string}
                  width={1000}
                  height={1282}
                  alt={post.name}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className="each-slide w-full"
                  src={img2 as string}
                  width={1000}
                  height={1282}
                  alt={post.name}
                />
              </SwiperSlide>
            </Swiper>
            <div className="hidden sm:block h-full">
              <Image
                className="w-full"
                src={mainImg as string}
                width={1000}
                height={1282}
                alt={post.name}
              />
            </div>
          </div>
        </div>
        <div className="infoSection w-full md:w-1/2 h-auto py-8 sm:pl-4 flex flex-col">
          <h1 className="text-3xl mb-4">{post.name}</h1>
          <span className="text-2xl text-gray400 mb-2">$ {post.price}</span>
          <span className="mb-2 text-justify">{post.desc}</span>
          <span className="mb-2">
            {t("availability")}: {t("in_stock")}
          </span>
          <span className="mb-2">
            {t("size")}: {size}
          </span>
          <div className="sizeContainer flex space-x-4 text-sm mb-4">
            <div
              onClick={() => handleSize("S")}
              className={`w-8 h-8 flex items-center justify-center border ${
                size === "S" ? "border-gray500" : "border-gray300 text-gray400"
              } cursor-pointer hover:bg-gray500 hover:text-gray100`}
            >
              S
            </div>
            <div
              onClick={() => handleSize("M")}
              className={`w-8 h-8 flex items-center justify-center border ${
                size === "M" ? "border-gray500" : "border-gray300 text-gray400"
              } cursor-pointer hover:bg-gray500 hover:text-gray100`}
            >
              M
            </div>
            <div
              onClick={() => handleSize("L")}
              className={`w-8 h-8 flex items-center justify-center border ${
                size === "L" ? "border-gray500" : "border-gray300 text-gray400"
              } cursor-pointer hover:bg-gray500 hover:text-gray100`}
            >
              L
            </div>
          </div>
          <div className="addToCart flex flex-col sm:flex-row md:flex-col lg:flex-row space-y-4 sm:space-y-0 mb-4">
            <div className="plusOrMinus h-12 flex border justify-center border-gray300 divide-x-2 divide-gray300 mb-4 mr-0 sm:mr-4 md:mr-0 lg:mr-4">
              <div
                onClick={() => setCurrentQty((prevState) => prevState - 1)}
                className={`${
                  currentQty === 1 && "pointer-events-none"
                } h-full w-full sm:w-12 flex justify-center items-center cursor-pointer hover:bg-gray500 hover:text-gray100`}
              >
                -
              </div>
              <div className="h-full w-28 sm:w-12 flex justify-center items-center pointer-events-none">
                {currentQty}
              </div>
              <div
                onClick={() => setCurrentQty((prevState) => prevState + 1)}
                className="h-full w-full sm:w-12 flex justify-center items-center cursor-pointer hover:bg-gray500 hover:text-gray100"
              >
                +
              </div>
            </div>
            <div className="flex h-12 space-x-4 w-full">
              <Button
                value={t("add_to_cart")}
                size="lg"
                extraClass={`flex-grow text-center whitespace-nowrap`}
                onClick={() => addItem!(currentItem)}
              />
              <GhostButton
                value=""
                size="lg"
                onClick={handleWishlist}
                extraClass={`text-center`}
              >
                {alreadyWishlisted ? (
                  <HeartSolid extraClass="inline" />
                ) : (
                  <Heart extraClass="inline" />
                )}
              </GhostButton>
            </div>
          </div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="py-2 focus:outline-none text-left mb-4 border-b-2 border-gray200 flex items-center justify-between">
                  <span>{t("details")}</span>
                  <DownArrow
                    extraClass={`${
                      open ? "" : "transform rotate-180"
                    } w-5 h-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel
                  className={`text-gray400 animate__animated animate__bounceIn`}
                >
                  {post.details}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div className="flex items-center space-x-4 mt-4">
            <span>{t("share")} </span>
            <FacebookLogo extraClass="h-4 cursor-pointer text-gray400 hover:text-gray500" />
            <InstagramLogo extraClass="h-4 cursor-pointer text-gray400 hover:text-gray500" />
          </div>
        </div>
      </div>

      {/* ===== Horizontal Divider ===== */}
      <div className="border-b-2 border-gray200"></div>

      {/* ===== You May Also Like Section ===== */}
      <div className="recSection my-8 app-max-width app-x-padding">
        <h2 className="text-3xl mb-6">{t("you_may_also_like")}</h2>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={0}
          loop={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper sm:hidden"
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="mb-6">
                <Card key={item.id} item={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-10 sm:gap-y-6 mb-10">
          {products.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>
      </div>

      {/* ===== Footer Section ===== */}
      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  let products: dbItemType[] = [];
  const querySnapshot = await db.collection("products").get();
  querySnapshot.forEach((doc) => {
    products = [...products, doc.data() as dbItemType];
  });

  // const paths = products.map((product) => ({
  //   params: { id: product.id.toString() },
  //   locale: "en",
  // }));

  const paths = locales?.map((locale) =>
    products.map((product) => ({
      params: { id: product.id.toString() },
      locale,
    }))
  );

  return { paths: [...paths![0], ...paths![1]], fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const productRef = db.collection("products");
  const paramId = params!.id as string;
  const snapshot = await productRef.where("id", "==", parseInt(paramId)).get();
  if (snapshot.empty) {
    return { props: { post: "Error" } };
  }

  let post: firebase.firestore.DocumentData = {};
  snapshot.forEach((doc) => {
    post = doc.data();
  });

  let products: itemType[] = [];
  const productSnapshot = await productRef.get();
  productSnapshot.forEach((doc) => {
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
  let nums: number[] = [];
  let numOfItems = 5;
  for (let i = 0; i < numOfItems; i++) {
    let ranNum = Math.floor(Math.random() * products.length);
    if (!nums.includes(ranNum)) {
      nums.push(ranNum);
    } else {
      numOfItems++;
    }
  }
  let newProducts = [
    products[nums[0]],
    products[nums[1]],
    products[nums[2]],
    products[nums[3]],
    products[nums[4]],
  ];

  return {
    props: {
      post,
      products: newProducts,
      messages: (await import(`../../messages/common/${locale}.json`)).default,
    },
  };
};

export default Product;
