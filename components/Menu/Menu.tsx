import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useCallback, useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart/CartContext";
import BagIcon from "../../public/icons/BagIcon";
import MenuIcon from "../../public/icons/MenuIcon";
import Button from "../Buttons/Button";
import GhostButton from "../Buttons/GhostButton";

export default function CartItem() {
  const [open, setOpen] = useState(false);

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
          onClick={openModal}
          className="focus:outline-none"
        >
          {/* <BagIcon extraClass="h-8 w-8 sm:h-6 sm:w-6" /> */}
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
                  <div className="itemContainer mt-20 px-6 h-1/2 w-full flex flex-col justify-around items-center">
                    <Link href="/product-category/men">
                      <a
                        className="w-full text-2xl hover:bg-gray100 text-center py-2"
                        onClick={closeModal}
                      >
                        Men
                      </a>
                    </Link>
                    <Link href="/product-category/women">
                      <a
                        className="w-full text-2xl hover:bg-gray100 text-center py-2"
                        onClick={closeModal}
                      >
                        Women
                      </a>
                    </Link>
                    <Link href="/product-category/bags">
                      <a
                        className="w-full text-2xl hover:bg-gray100 text-center py-2"
                        onClick={closeModal}
                      >
                        Bags
                      </a>
                    </Link>
                    <Link href="/blogs">
                      <a
                        className="w-full text-2xl hover:bg-gray100 text-center py-2"
                        onClick={closeModal}
                      >
                        Blogs
                      </a>
                    </Link>
                    <Link href="/about">
                      <a
                        className="w-full text-2xl hover:bg-gray100 text-center py-2"
                        onClick={closeModal}
                      >
                        About
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a
                        className="w-full text-2xl hover:bg-gray100 text-center py-2"
                        onClick={closeModal}
                      >
                        Contact
                      </a>
                    </Link>
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
