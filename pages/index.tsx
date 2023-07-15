import React, {useState} from 'react';
import Input from "../components/Input/Input";
import Button from "../components/Buttons/Button";
import {useAuth} from "../context/AuthContext";
import {useTranslations} from "next-intl";
import {GetStaticProps} from "next";
import Logo from "../components/Reusable/Logo";
import {useRouter} from "next/router";

const Index = () => {
  const router = useRouter()
  const auth = useAuth();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const t = useTranslations("LoginRegister");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginResponse = await auth.login!(phone, password);
    if (loginResponse.success) {
      setSuccessMsg("login_successful");
      router.push("/shop")
    } else {
      setErrorMsg("incorrect_email_password");
    }
  };

  return (
      <div className='p-4'>
        <div className='flex justify-center mt-6 mb-12'>
          <Logo/>
        </div>

        <h2 className="text-2xl text-right  font-bold leading-6 text-gray-900">{t("loginToTiara")}</h2>
        <p className=" text-right mt-3 mb-8 font-medium leading-6 text-gray-900">{t("loginDesc")}</p>

        <form onSubmit={handleSubmit} className="mt-2">
          <label className='block text-right mb-2' htmlFor="">{t("phone")}</label>
          <Input
              type="phone"
              placeholder={`${t("phone_placeholder")}`}
              name="phone"
              required
              extraClass="w-full focus:border-gray500 text-right"
              border="border-2 border-gray300 mb-4"
              onChange={(e) => setPhone((e.target as HTMLInputElement).value)}
              value={phone}
          />
          <label className='block text-right mb-2' htmlFor="">{t("password")}</label>
          <Input
              type="password"
              placeholder={`${t("password_placeholder")}`}
              name="password"
              required
              extraClass="w-full focus:border-gray500 mb-4 text-right"
              border="border-2 border-gray300"
              onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
              value={password}
          />
          {errorMsg !== "" && (
              <div className="text-red text-sm mb-4 whitespace-nowrap">
                {t(errorMsg)}
              </div>
          )}

          <Button
              type="submit"
              value={t("login")}
              extraClass="w-full text-center text-xl mb-4"
              size="lg"
          />
        </form>
      </div>

  );
};


export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: {
      messages: {
        ...require(`../messages/common/${locale}.json`),
      },
    },
  };
};

export default Index;