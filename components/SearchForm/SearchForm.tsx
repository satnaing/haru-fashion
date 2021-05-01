import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useEffect, useState } from "react";
import SearchIcon from "../../public/icons/SearchIcon";
import Button from "../Buttons/Button";
import Input from "../Input/Input";

export default function SearchForm() {
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="focus:outline-none"
        >
          <SearchIcon />
        </button>
      </div>
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto"
          style={{ zIndex: 99999 }}
          static
          open={open}
          onClose={closeModal}
        >
          <div className="min-h-screen text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray500 opacity-50" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            {/* <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span> */}
            <Transition.Child
              as={Fragment}
              enter="ease-linear duration-400"
              enterFrom="-translate-y-full"
              enterTo="translate-y-0"
              leave="ease-linear duration-300"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-full"
            >
              <div className="relative translate-y inline-block w-full pt-6 pb-12 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
                <div className="w-3/5 m-auto">
                  <div className="flex justify-end mb-8">
                    <button
                      type="button"
                      className="outline-none focus:outline-none text-2xl"
                      onClick={closeModal}
                    >
                      &#10005;
                    </button>
                  </div>
                  <div className="mt-2 flex items-center">
                    <SearchIcon extraClass="text-gray300 w-8 h-8" />
                    <input
                      type="search"
                      placeholder="Search anything ..."
                      className="px-4 py-2 w-full focus:outline-none text-2xl"
                    />
                  </div>
                  <div className="border-t-2 border-gray300"></div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
