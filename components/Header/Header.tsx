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
import MenuIcon from "../../public/icons/MenuIcon";
import Menu from "../Menu/Menu";

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
      <Head>
        <title>Haru Fashion</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </Head>
      <TopNav />
      <nav
        className={`${
          scrolled ? "bg-white sticky top-0 shadow-md z-50" : "bg-transparent"
        } w-full z-50 h-20 relative`}
      >
        <div
          className={`flex justify-between align-baseline ${styles.mainMenu}`}
        >
          <div className="flex-1 lg:flex-0 lg:hidden">
            {/* <MenuIcon /> */}
            <Menu />
          </div>
          <ul className={`flex-0 lg:flex-1 flex ${styles.leftMenu}`}>
            <li>
              <Link href={`/product-category/men`}>
                <a>Men</a>
              </Link>
            </li>
            <li>
              <Link href={`/product-category/women`}>
                <a>Women</a>
              </Link>
            </li>
            <li>
              <Link href="/coming-soon">
                <a>Bags</a>
              </Link>
            </li>
            <li>
              <Link href="/coming-soon">
                <a>Blogs</a>
              </Link>
            </li>
          </ul>
          <div className="flex-1 flex justify-center items-center cursor-pointer">
            <Link href="/">
              <a>
                <Image
                  className="justify-center"
                  src="/logo.svg"
                  alt="Picture of the author"
                  width={120}
                  height={25}
                />
              </a>
            </Link>
          </div>
          <ul className={`flex-1 flex justify-end ${styles.rightMenu}`}>
            <li>
              <SearchForm />
            </li>
            <li>
              <LoginForm />
            </li>
            <li>
              <Link href="/wishlist">
                <a>
                  <WhistlistIcon />
                </a>
              </Link>
            </li>
            <li>
              <CartItem />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
