import { Fragment, useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

import WishlistContext from "../../context/wishlist/WishlistContext";
import MenuIcon from "../../public/icons/MenuIcon";
import LoginForm from "../LoginForm/LoginForm";
import WhistlistIcon from "../../public/icons/WhistlistIcon";
import UserIcon from "../../public/icons/UserIcon";
import SearchIcon from "../../public/icons/SearchIcon";

export default function CartItem() {
  const { wishlist } = useContext(WishlistContext);
  const [open, setOpen] = useState(false);

  // Calculate Number of Wishlist
  let noOfWishlist = wishlist.length;

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }

  return (
    <>
      <div className="relative">
        <button
          type="button"
          aria-label="Hamburger Menu"
          onClick={openModal}
          className="focus:outline-none"
        >
          <MenuIcon />
        </button>
      </div>
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          style={{ zIndex: 99999 }}
          static
          open={open}
          onClose={closeModal}
        >
          <div className="min-h-screen">
            <Transition.Child as={Fragment}>
              <Dialog.Overlay className="fixed inset-0 bg-gray500 opacity-50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-linear duration-600"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-linear duration-300"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div
                style={{ height: "100vh" }}
                className="relative opacity-95 inline-block dur h-screen w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl"
              >
                <div className="flex justify-between items-center p-6">
                  <Link href="/">
                    <a>
                      <Image
                        className="justify-center"
                        src="/logo.svg"
                        alt="Picture of the author"
                        width={85}
                        height={22}
                      />
                    </a>
                  </Link>
                  <button
                    type="button"
                    className="outline-none focus:outline-none text-3xl sm:text-2xl"
                    onClick={closeModal}
                  >
                    &#10005;
                  </button>
                </div>

                <div className="h-full">
                  <div className="itemContainer mt-7 px-6 h-1/2 w-full flex flex-col justify-around items-center">
                    <div className="flex justify-between items-center mt-5 mb-5 border-gray300 border-b-2">
                      <SearchIcon extraClass="text-gray300 w-6 h-6" />
                      <input
                        type="search"
                        placeholder="Search anything ..."
                        className="px-4 py-2 w-full focus:outline-none text-2xl"
                      />
                    </div>
                    <Link href="/product-category/men">
                      <a
                        className="w-full text-xl hover:bg-gray100 text-left py-2"
                        onClick={closeModal}
                      >
                        Men
                      </a>
                    </Link>
                    <Link href="/product-category/women">
                      <a
                        className="w-full text-xl hover:bg-gray100 text-left py-2"
                        onClick={closeModal}
                      >
                        Women
                      </a>
                    </Link>
                    <Link href="/product-category/bags">
                      <a
                        className="w-full text-xl hover:bg-gray100 text-left py-2"
                        onClick={closeModal}
                      >
                        Bags
                      </a>
                    </Link>
                    <Link href="/blogs">
                      <a
                        className="w-full text-xl hover:bg-gray100 text-left py-2"
                        onClick={closeModal}
                      >
                        Blogs
                      </a>
                    </Link>
                    <Link href="/about">
                      <a
                        className="w-full text-xl hover:bg-gray100 text-left py-2"
                        onClick={closeModal}
                      >
                        About
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a
                        className="w-full text-xl hover:bg-gray100 text-left py-2"
                        onClick={closeModal}
                      >
                        Contact
                      </a>
                    </Link>
                    <hr className="border border-gray300 w-full mt-2" />
                    <div className="w-full text-xl py-2 my-3 flex justify-between">
                      <LoginForm extraClass="flex justify-between w-full">
                        <span>Login</span>
                        <UserIcon />
                      </LoginForm>
                    </div>
                    <hr className="border border-gray300 w-full" />
                    <Link href="/wishlist">
                      <a className="text-xl py-2 my-3 w-full flex justify-between">
                        <span>Wishlist</span>
                        <div className="relative">
                          <WhistlistIcon />
                          {noOfWishlist > 0 && (
                            <span
                              className={`absolute text-xs -top-0 -left-7 bg-gray500 text-gray100 py-1 px-2 rounded-full`}
                            >
                              {noOfWishlist}
                            </span>
                          )}
                        </div>
                      </a>
                    </Link>
                    <hr className="border border-gray300 w-full" />
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
