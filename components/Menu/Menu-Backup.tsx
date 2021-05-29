import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useCallback, useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import BagIcon from "../../public/icons/BagIcon";
import MenuIcon from "../../public/icons/MenuIcon";
import Button from "../Buttons/Button";
import GhostButton from "../Buttons/GhostButton";

export default function Menu() {
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          //   className="focus:outline-none"
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
          <div className="min-h-screen text-right">
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
              leaveTo="translate-x-full"
            >
              <div
                style={{ height: "100vh" }}
                className="relative inline-block dur h-screen w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl"
              >
                <div className="h-full">
                  <div className="itemContainer px-4 h-2/3 w-full flex-grow flex-shrink overflow-y-auto">
                    <div>Men</div>
                    <div>Women</div>
                    <div>Bags</div>
                    <div>Blogs</div>
                    <div>About Us</div>
                    <div>Contact Us</div>
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
