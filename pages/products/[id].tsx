import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GhostButton from "../../components/Buttons/GhostButton";
import Button from "../../components/Buttons/Button";
import Card5 from "../../components/Card/Card5";
import { useState } from "react";
import Items from "../../components/Util/Items";
import Heart from "../../public/icons/Heart";
import { Disclosure } from "@headlessui/react";
import DownArrow from "../../public/icons/DownArrow";
import FacebookLogo from "../../public/icons/FacebookLogo";
import InstagramLogo from "../../public/icons/InstagramLogo";

import { GetStaticProps } from "next";
import firebase, { db } from "../../firebase/firebase";
import Link from "next/link";

const Product = ({ post }) => {
  const img1 = post.img1;
  const img2 = post.img2;

  const [size, setSize] = useState("M");
  const [mainImg, setMainImg] = useState(img1);

  const handleSize = (value: string) => {
    setSize(value);
  };

  const featuredItems = Items.slice(0, 5);

  return (
    <div>
      <Header />
      <div className="px-20 bg-lightgreen h-16 w-full flex items-center border-t-2 border-gray200">
        <div className="breadcrumb">
          <Link href="/">
            <a className="text-gray400">Home</a>
          </Link>{" "}
          /{" "}
          <a href="#" className="text-gray400 capitalize">
            {post.category}
          </a>{" "}
          / <span>{post.name}</span>
        </div>
      </div>
      <div className="itemSection mx-20 flex">
        <div className="imgSection w-1/2 h-full flex">
          <div className="w-1/4 h-full space-y-4 my-4">
            <img
              className={`cursor-pointer ${
                mainImg === img1
                  ? "opacity-100 border border-gray300"
                  : "opacity-50"
              }`}
              onClick={() => setMainImg(img1)}
              src={img1}
              alt=""
            />
            <img
              className={`cursor-pointer ${
                mainImg === img2
                  ? "opacity-100 border border-gray300"
                  : "opacity-50"
              }`}
              onClick={() => setMainImg(img2)}
              src={img2}
              alt=""
            />
          </div>
          <div className="w-3/4 h-full m-4">
            <img className="w-full" src={mainImg} alt="" />
          </div>
        </div>
        <div className="infoSection w-1/2 h-96 py-8 pl-4  flex flex-col">
          <h1 className="text-3xl mb-4">{post.name}</h1>
          <span className="text-2xl text-gray400 mb-2">$ {post.price}</span>
          <span className="mb-2 text-justify">{post.desc}</span>
          <span className="mb-2">Availability: in stock</span>
          <span className="mb-2">Size: {size}</span>
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
          <div className="addToCart flex space-x-4 mb-4">
            <div className="plusOrMinus flex border border-gray300 divide-x-2 divide-gray300">
              <div className="h-full w-12 flex justify-center items-center cursor-pointer hover:bg-gray500 hover:text-gray100">
                -
              </div>
              <div className="h-full w-12 flex justify-center items-center pointer-events-none">
                1
              </div>
              <div className="h-full w-12 flex justify-center items-center cursor-pointer hover:bg-gray500 hover:text-gray100">
                +
              </div>
            </div>
            <Button
              value="Add to cart"
              size="lg"
              extraClass="flex-grow text-center"
            />
            {/* extraClass="w-full text-center" */}
            <GhostButton value="Add to wishlist" size="lg">
              <Heart extraClass="inline bg-black" />
            </GhostButton>
          </div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="py-2 focus:outline-none text-left mb-4 border-b-2 border-gray200 flex items-center justify-between">
                  <span>Details</span>
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
            <span>Share </span>
            <FacebookLogo extraClass="h-4 cursor-pointer text-gray400 hover:text-gray500" />
            <InstagramLogo extraClass="h-4 cursor-pointer text-gray400 hover:text-gray500" />
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray200"></div>
      <div className="recSection my-8 mx-20 flex flex-wrap">
        <h2 className="text-3xl mb-4">You may also like</h2>
        <div className="flex flex-wrap">
          {featuredItems.map((item) => (
            <Card5
              key={item.name}
              imgSrc1={item.img1}
              imgSrc2={item.img2}
              itemName={item.name}
              itemPrice={item.price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  let products = [];
  const querySnapshot = await db.collection("products").get();
  querySnapshot.forEach((doc) => {
    products = [...products, doc.data()];
  });

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const productRef = db.collection("products");
  const snapshot = await productRef
    .where("id", "==", parseInt(params.id))
    .get();
  if (snapshot.empty) {
    console.log("No matching doc");
    return { props: { post: "Error" } };
  }

  let post: firebase.firestore.DocumentData;
  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
    post = doc.data();
  });

  // console.log("Post is ", post);
  // const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  // const post = await res.json();

  return { props: { post } };
}

export default Product;
