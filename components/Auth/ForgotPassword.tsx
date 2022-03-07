import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useTranslations } from "next-intl";

import { useAuth } from "../../context/AuthContext";
import Button from "../Buttons/Button";
import Input from "../Input/Input";

type Props = {
  onLogin: () => void;
  errorMsg: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  setSuccessMsg: React.Dispatch<React.SetStateAction<string>>;
};

const ForgotPassword: React.FC<Props> = ({
  onLogin,
  errorMsg,
  setErrorMsg,
  setSuccessMsg,
}) => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const t = useTranslations("LoginRegister");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const forgotPasswordResponse = await auth.forgotPassword!(email);
    console.log(forgotPasswordResponse);
    if (forgotPasswordResponse.success) {
      setSuccessMsg("login_successful");
    } else {
      setErrorMsg("incorrect_email_password");
    }
  };

  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-3xl text-center my-8 font-medium leading-10 text-gray-900"
      >
        {t("forgot_password")}
      </Dialog.Title>
      <form onSubmit={handleSubmit} className="mt-2">
        <Input
          type="email"
          placeholder={`${t("email_address")} *`}
          name="email"
          required
          extraClass="w-full focus:border-gray500"
          border="border-2 border-gray300 mb-4"
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          value={email}
        />
        {errorMsg !== "" && (
          <div className="text-red text-sm mb-4 whitespace-nowrap">
            {t(errorMsg)}
          </div>
        )}
        <Button
          type="submit"
          value={t("submit")}
          extraClass="w-full text-center text-xl mb-4"
          size="lg"
        />
        <div className="text-center text-gray400">
          {t("go_back_to")}{" "}
          <span
            onClick={onLogin}
            className="text-gray500 focus:outline-none focus:underline cursor-pointer"
          >
            {t("login")}
          </span>
        </div>
      </form>
    </>
  );
};

export default ForgotPassword;
