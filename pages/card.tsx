import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import GhostButton from "../components/Buttons/GhostButton";
import Button from "../components/Buttons/Button";
import TextButton from "../components/Buttons/TextButton";
import Input from "../components/Input";
import Slideshow from "../components/HeroSection/Slideshow";
import Card from "../components/Card";
import styles from "../styles/Test.module.css";
import Card5 from "../components/Card/Card5";
import { Menu } from "@headlessui/react";
import { useCallback, useEffect, useState } from "react";
import Pagination from "../components/Util/Pagination";
import Items from "../components/Util/Items";
import useWindowSize from "../components/Util/useWindowSize";

// let w = window.innerWidth;

const CardContainer = () => {
  const [postPerPage, setPostPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewWidth, setViewWidth] = useWindowSize();

  // Change postPerPage to 8 for good layout
  // useEffect(() => {
  //   viewWidth <= 1280 ? setPostPerPage(8) : setPostPerPage(10);
  // }, [viewWidth]);

  const handlePage = (number: number) => {
    setCurrentPage(number);
  };

  let totalPosts = Items.length;
  let lastIndexPost = currentPage * postPerPage;
  let firstIndexPost = lastIndexPost - postPerPage;
  let currentPosts = Items.slice(firstIndexPost, lastIndexPost);

  const handleNext = (lastIndex: number) => {
    if (currentPage !== lastIndex) {
      setCurrentPage((prevState) => prevState + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage !== 1) {
      setCurrentPage((prevState) => prevState - 1);
    }
  };

  return (
    <div>
      <Header />
      <div className="px-20 bg-lightgreen h-16 w-full flex items-center">
        <div className="breadcrumb">
          <a href="#" className="text-gray400">
            Home
          </a>{" "}
          / <span>Men</span>
        </div>
      </div>
      <div className="px-20 w-full mt-8">
        <h3 className="text-4xl mb-2 animate__animated animate__bounce">Men</h3>
        <div className="flex justify-between mt-6">
          <span>
            Showing {firstIndexPost + 1} ~ {lastIndexPost} of {totalPosts}
          </span>
          <span>Filter by: Price</span>
        </div>
      </div>
      <div className="px-16 mb-14">
        <div className="flex flex-wrap mb-8">
          {currentPosts.map((item) => (
            <Card5
              key={item.name}
              imgSrc1={item.img1}
              imgSrc2={item.img2}
              itemName={item.name}
              itemPrice={item.price}
            />
          ))}
        </div>
        <Pagination
          postPerPage={postPerPage}
          totalPosts={totalPosts}
          handlePage={handlePage}
          activePage={currentPage}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CardContainer;
