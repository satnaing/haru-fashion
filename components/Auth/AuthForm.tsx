import { Fragment, useState, FC } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useTranslations } from "next-intl";

import { useAuth } from "../../context/AuthContext";
import Button from "../Buttons/Button";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";

type CurrentPage = "login" | "register" | "forgot-password";

type Props = {
  extraClass?: string;
  children: any;
};

const LoginForm: FC<Props> = ({ extraClass, children }) => {
  const auth = useAuth();
  const [currentPage, setCurrentPage] = useState<CurrentPage>("login");
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const t = useTranslations("LoginRegister");

  let modalBox: JSX.Element;
  if (auth.user) {
    modalBox = (
      <SuccessModal successMsg={successMsg} setSuccessMsg={setSuccessMsg} />
    );
  } else {
    if (currentPage === "login") {
      modalBox = (
        <Login
          onRegister={() => setCurrentPage("register")}
          onForgotPassword={() => setCurrentPage("forgot-password")}
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
          setSuccessMsg={setSuccessMsg}
        />
      );
    } else if (currentPage === "register") {
      modalBox = (
        <Register
          onLogin={() => setCurrentPage("login")}
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
          setSuccessMsg={setSuccessMsg}
        />
      );
    } else {
      modalBox = (
        <ForgotPassword
          onLogin={() => setCurrentPage("login")}
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
          setSuccessMsg={setSuccessMsg}
        />
      );
    }
  }

  function closeModal() {
    setOpen(false);
    setErrorMsg("");
    setTimeout(() => {
      setSuccessMsg("profile");
    }, 100);
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
                {modalBox}
                {/* {auth.user ? (
                  <SuccessModal
                    successMsg={successMsg}
                    setSuccessMsg={setSuccessMsg}
                  />
                ) : (if (currentPage === "login") {(
                  <Login
                    onRegister={() => setCurrentPage("login")}
                    errorMsg={errorMsg}
                    setErrorMsg={setErrorMsg}
                    setSuccessMsg={setSuccessMsg}
                  />
                )} else if (currentPage === "register") {(
                  <Register
                    onLogin={() => setCurrentPage("register")}
                    errorMsg={errorMsg}
                    setErrorMsg={setErrorMsg}
                    setSuccessMsg={setSuccessMsg}
                  />
                )} else {(
                  <ForgotPassword onRegister={() => setCurrentPage("login")}
                  errorMsg={errorMsg}
                  setErrorMsg={setErrorMsg}
                  setSuccessMsg={setSuccessMsg} />
                )})} */}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const SuccessModal = ({
  successMsg,
  setSuccessMsg,
}: {
  successMsg: string;
  setSuccessMsg: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const t = useTranslations("LoginRegister");
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout!();
    setSuccessMsg("");
  };
  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-xl md:text-2xl whitespace-nowrap text-center my-8 font-medium leading-6 text-gray-900"
      >
        {/* {t("login_successful")} */}
        {/* {t("register_successful")} */}
        {successMsg !== "" ? t(successMsg) : t("profile")}
      </Dialog.Title>
      <div className="mb-12">
        <div>
          {t("name")} - {auth.user?.fullname}
        </div>
        <div>
          {t("email_address")} - {auth.user?.email}
        </div>
        <div>
          {t("phone")} - {auth.user?.phone && auth.user?.phone}
        </div>
        <div>
          {t("shipping_address")} -{" "}
          {auth.user?.shippingAddress && auth.user?.shippingAddress}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button value={t("logout")} onClick={handleLogout} />
      </div>
    </>
  );
};

export default LoginForm;
