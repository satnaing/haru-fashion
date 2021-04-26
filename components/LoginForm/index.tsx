import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useEffect, useState } from "react";
import UserIcon from "../../public/icons/UserIcon";
import Button from "../Buttons/Button";
import Input from "../Input";

export default function LoginForm() {
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
          <UserIcon />
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
          <div className="min-h-screen px-4 text-center">
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
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
                <button
                  type="button"
                  className="absolute right-5 top-2 outline-none focus:outline-none text-2xl"
                  onClick={closeModal}
                >
                  &#10005;
                </button>
                <Dialog.Title
                  as="h3"
                  className="text-4xl text-center my-8 font-medium leading-6 text-gray-900"
                >
                  Login
                </Dialog.Title>
                <div className="mt-2">
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    name="email"
                    required
                    extraClass="w-full focus:border-gray500"
                    border="border-2 border-gray300 mb-4"
                  />
                  <Input
                    type="password"
                    placeholder="Password *"
                    name="password"
                    required
                    extraClass="w-full focus:border-gray500 mb-4"
                    border="border-2 border-gray300"
                  />
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center text-gray400 focus:outline-none">
                      <input
                        type="checkbox"
                        id="remember"
                        name="remember"
                        className="w-4 h-4 mb-0 mr-2"
                      />
                      <label htmlFor="remember">Remember me?</label>
                    </div>
                    <a
                      href="#"
                      className="text-gray400 hover:text-gray500 focus:outline-none focus:text-gray500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Button
                    value="Log in"
                    extraClass="w-full text-center text-xl mb-4"
                    size="large"
                  />
                  <div className="text-center text-gray400">
                    Not a member?{" "}
                    <a
                      href="#"
                      className="text-gray500 focus:outline-none focus:underline"
                    >
                      Register
                    </a>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
