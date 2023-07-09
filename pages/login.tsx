import React, {useState} from 'react';
import Input from "../components/Input/Input";
import Button from "../components/Buttons/Button";
import {useAuth} from "../context/AuthContext";
import {useTranslations} from "next-intl";
import {GetStaticProps} from "next";
import Logo from "../components/Reusable/Logo";

const Login = () => {
    const auth = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const t = useTranslations("LoginRegister");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const loginResponse = await auth.login!(email, password);
        if (loginResponse.success) {
            setSuccessMsg("login_successful");
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
                <label className='block text-right mb-2' htmlFor="">{t("email_address")}</label>
                <Input
                    type="email"
                    placeholder={`${t("email_address_placeholder")}`}
                    name="email"
                    required
                    extraClass="w-full focus:border-gray500 text-right"
                    border="border-2 border-gray300 mb-4"
                    onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                    value={email}
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


export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            messages: {
                ...require(`../messages/common/${locale}.json`),
            },
        },
    };
};

export default Login;