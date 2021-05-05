import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GhostButton from "../components/Buttons/GhostButton";
import Button from "../components/Buttons/Button";
import Card5 from "../components/Card/Card5";
import { useState } from "react";
import Items from "../components/Util/Items";
import Heart from "../public/icons/Heart";
import { Disclosure } from "@headlessui/react";
import DownArrow from "../public/icons/DownArrow";
import FacebookLogo from "../public/icons/FacebookLogo";
import InstagramLogo from "../public/icons/InstagramLogo";

const Product = () => {
  const img1 = "minimalist-img-7.jpg.webp";
  const img2 = "minimalist-img-71.jpg.webp";

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
          <a href="#" className="text-gray400">
            Home
          </a>{" "}
          /{" "}
          <a href="#" className="text-gray400">
            Men
          </a>{" "}
          / <span>Zipped Jogger</span>
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
              src={`/items/${img1}`}
              alt=""
            />
            <img
              className={`cursor-pointer ${
                mainImg === img2
                  ? "opacity-100 border border-gray300"
                  : "opacity-50"
              }`}
              onClick={() => setMainImg(img2)}
              src={`/items/${img2}`}
              alt=""
            />
          </div>
          <div className="w-3/4 h-full m-4">
            <img className="w-full" src={`/items/${mainImg}`} alt="" />
          </div>
        </div>
        <div className="infoSection w-1/2 h-96 py-8 pl-4  flex flex-col">
          <h1 className="text-3xl mb-4">Zipped Joggers</h1>
          <span className="text-2xl text-gray400 mb-2">$ 320</span>
          <span className="mb-2 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            iusto culpa maxime perferendis fugit natus consequatur facilis
            aliquam hic perspiciatis.
          </span>
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                  repellat, sed sapiente quo dolores sint ullam maxime modi
                  tempora odio illo libero? Suscipit cupiditate blanditiis culpa
                  laboriosam! Soluta, itaque tempore!
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

export default Product;
