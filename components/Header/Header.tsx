import { useEffect, useState, useCallback, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import TopNav from "./TopNav";
import WhistlistIcon from "../../public/icons/WhistlistIcon";
import UserIcon from "../../public/icons/UserIcon";
import LoginForm from "../LoginForm/LoginForm";
import SearchForm from "../SearchForm/SearchForm";
import CartItem from "../CartItem/CartItem";
import Menu from "../Menu/Menu";
import WishlistContext from "../../context/wishlist/WishlistContext";
import AppHeader from "./AppHeader";

import styles from "./Header.module.css";

type Props = {
  title?: string;
};

const Header: React.FC<Props> = ({ title }) => {
  const t = useTranslations("Navigation");
  const { wishlist } = useContext(WishlistContext);
  const [animate, setAnimate] = useState("");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [didMount, setDidMount] = useState<boolean>(false); // to disable Can't perform a React state Warning

  // Calculate Number of Wishlist
  let noOfWishlist = wishlist.length;

  // Animate Wishlist Number
  const handleAnimate = useCallback(() => {
    if (noOfWishlist === 0) return;
    setAnimate("animate__animated animate__headShake");
  }, [noOfWishlist, setAnimate]);

  // Set animate when no of wishlist changes
  useEffect(() => {
    handleAnimate();
    setTimeout(() => {
      setAnimate("");
    }, 1000);
  }, [handleAnimate]);

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
      <AppHeader title={title} />
      <TopNav />
      <nav
        className={`${
          scrolled ? "bg-white sticky top-0 shadow-md z-50" : "bg-transparent"
        } w-full z-50 h-20 relative`}
      >
        <div className="app-max-width w-full">
          <div
            className={`flex justify-between align-baseline app-x-padding ${styles.mainMenu}`}
          >
            <div className="flex-1 lg:flex-0 lg:hidden">
              <Menu />
            </div>
            <ul className={`flex-0 lg:flex-1 flex ${styles.leftMenu}`}>
              <li>
                <Link href={`/product-category/men`}>
                  <a>{t("men")}</a>
                </Link>
              </li>
              <li>
                <Link href={`/product-category/women`}>
                  <a>{t("women")}</a>
                </Link>
              </li>
              <li>
                <Link href="/coming-soon">
                  <a>{t("bags")}</a>
                </Link>
              </li>
              <li>
                <Link href="/coming-soon">
                  <a>{t("blogs")}</a>
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
                <LoginForm>
                  <UserIcon />
                </LoginForm>
              </li>
              <li>
                <Link href="/wishlist">
                  <a className="relative">
                    <WhistlistIcon />
                    {noOfWishlist > 0 && (
                      <span
                        className={`${animate} absolute text-xs -top-3 -right-9 bg-gray500 text-gray100 py-1 px-2 rounded-full`}
                      >
                        {noOfWishlist}
                      </span>
                    )}
                  </a>
                </Link>
              </li>
              <li>
                <CartItem />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
