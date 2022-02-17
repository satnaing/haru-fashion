import React, { FormEvent, useState } from "react";
import { Dialog } from "@headlessui/react";
import { useTranslations } from "next-intl";

import { useAuth } from "../../firebase/firebaseAuth";
import Button from "../Buttons/Button";
import Input from "../Input/Input";

type Props = {
  onLogin: () => void;
};

const Register: React.FC<Props> = ({ onLogin }) => {
  const auth = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const t = useTranslations("LoginRegister");

  const handleNameChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.currentTarget.value);
  };

  const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.currentTarget.value);
  };

  // firebase.auth().onAuthStateChanged(function (user) {
  //   if (user) {
  //     // User is signed in.
  //     console.log(user);
  //   } else {
  //     // No user is signed in.
  //     console.log("Not Signed in");
  //   }
  // });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    auth.signup(email, password);

    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     var user = userCredential.user;
    //     user
    //       .updateProfile({
    //         displayName: name,
    //       })
    //       .then(function () {
    //         // Update successful.
    //         console.log(user);
    //       })
    //       .catch(function (error) {
    //         // An error happened.
    //         console.log(error);
    //       });
    //   })
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     console.log(errorCode);
    //     console.log(errorMessage);
    //   });
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(function (result) {
    //     return result.user.updateProfile({
    //       displayName: name,
    //     });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-4xl text-center my-8 font-medium leading-6 text-gray-900"
      >
        {t("register")}
      </Dialog.Title>
      <form onSubmit={handleSubmit} className="mt-2">
        <Input
          type="name"
          placeholder={`${t("username")} *`}
          name="username"
          // required
          extraClass="w-full focus:border-gray500"
          border="border-2 border-gray300 mb-4"
          onChange={handleNameChange}
          value={name}
        />
        <Input
          type="email"
          placeholder={`${t("email_address")} *`}
          name="email"
          required
          extraClass="w-full focus:border-gray500"
          border="border-2 border-gray300 mb-4"
          onChange={handleEmailChange}
          value={email}
        />
        <Input
          type="password"
          placeholder={`${t("password")} *`}
          name="password"
          required
          extraClass="w-full focus:border-gray500 mb-4"
          border="border-2 border-gray300"
          onChange={handlePasswordChange}
          value={password}
        />
        <div className="flex justify-between mb-4">
          <p className="text-gray400 text-xs">
            {t("register_desc")}
            {/* Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <a href="#" className="text-gray500">
              Privacy Policy
            </a> */}
          </p>
        </div>
        <Button
          type="submit"
          value="Register"
          extraClass="w-full text-center text-xl mb-4"
          size="lg"
        />
        <div className="text-center text-gray400">
          {t("already_member")}{" "}
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

export default Register;
