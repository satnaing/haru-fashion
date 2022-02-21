import { Fragment, useState, FC } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useTranslations } from "next-intl";

import { useAuth } from "../../firebase/firebaseAuth";
import Button from "../Buttons/Button";
import Login from "./Login";
import Register from "./Register";

type Props = {
  extraClass?: string;
  children: any;
};

const LoginForm: FC<Props> = ({ extraClass, children }) => {
  const auth = useAuth();
  const [isLoginPage, setisLoginPage] = useState(true);
  const [open, setOpen] = useState(false);
  const t = useTranslations("LoginRegister");

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }

  return (
    <>
      <div className={`${extraClass}`}>
        <button
          type="button"
          onClick={openModal}
          aria-label="Account"
          className={`${extraClass}`}
        >
          {children}
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
                {auth.user ? (
                  <Button value={t("logout")} onClick={() => auth.signout()} />
                ) : isLoginPage ? (
                  <Login onRegister={() => setisLoginPage(false)} />
                ) : (
                  <Register onLogin={() => setisLoginPage(true)} />
                )}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default LoginForm;
