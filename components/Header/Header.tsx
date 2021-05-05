import Head from "next/head";
import styles from "./Header.module.css";
import Image from "next/image";
import IgLogo from "../../public/icons/InstagramLogo";
import FacebookLogo from "../../public/icons/FacebookLogo";
import DownArrow from "../../public/icons/DownArrow";
import TopNav from "./TopNav";
import BagIcon from "../../public/icons/BagIcon";
import WhistlistIcon from "../../public/icons/WhistlistIcon";
import UserIcon from "../../public/icons/UserIcon";
import SearchIcon from "../../public/icons/SearchIcon";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import LoginForm from "../LoginForm/LoginForm";
import SearchForm from "../SearchForm/SearchForm";
import CartItem from "../CartItem/CartItem";
// import CartProvider from "../../context/cartStore";

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [didMount, setDidMount] = useState<boolean>(false); // to disable Can't perform a React state Warning

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [setScrolled]);

  useEffect(() => {
    setDidMount(true);
    window.addEventListener("scroll", handleScroll);
    return () => setDidMount(false);
  }, [handleScroll]);

  if (!didMount) {
    return null;
  }
  return (
    <>
      <TopNav />
      <nav
        className={`${
          scrolled ? "bg-white sticky top-0 shadow-md z-50" : "bg-transparent"
        } w-full z-50 h-20 relative`}
      >
        <div className={`flex justify-between ${styles.mainMenu}`}>
          <ul className={`flex-1 flex ${styles.leftMenu}`}>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">Bags</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
          </ul>
          <div className="flex-1 flex justify-center cursor-pointer">
            <Link href="/">
              <a>
                <Image
                  className="justify-center"
                  src="/logo-light.png"
                  alt="Picture of the author"
                  width={90}
                  height={22}
                />
              </a>
            </Link>
          </div>
          <ul className={`flex-1 flex justify-end ${styles.rightMenu}`}>
            <li>
              <SearchForm />
              {/* <a href="#">
                <SearchIcon />
              </a> */}
            </li>
            <li>
              <LoginForm />
              {/* <a href="#">
                <UserIcon />
              </a> */}
            </li>
            <li>
              <a href="#">
                <WhistlistIcon />
              </a>
            </li>
            <li>
              <CartItem />
              {/* <a href="#">
                <BagIcon />
              </a> */}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
