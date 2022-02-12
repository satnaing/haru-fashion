import { FC, FormEvent, useState } from "react";
import { Dialog } from "@headlessui/react";

import { useAuth } from "../../firebase/firebaseAuth";
import Button from "../Buttons/Button";
import Input from "../Input/Input";

type Props = {
  onRegister: () => void;
};

const Login: FC<Props> = ({ onRegister }) => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.signin(email, password);
  };

  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-4xl text-center my-8 font-medium leading-6 text-gray-900"
      >
        Login
      </Dialog.Title>
      <form onSubmit={handleSubmit} className="mt-2">
        <Input
          type="email"
          placeholder="Email Address *"
          name="email"
          required
          extraClass="w-full focus:border-gray500"
          border="border-2 border-gray300 mb-4"
          onChange={handleEmailChange}
          value={email}
        />
        <Input
          type="password"
          placeholder="Password *"
          name="password"
          required
          extraClass="w-full focus:border-gray500 mb-4"
          border="border-2 border-gray300"
          onChange={handlePasswordChange}
          value={password}
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
            href="www.example.com"
            className="text-gray400 hover:text-gray500 focus:outline-none focus:text-gray500"
          >
            Forgot your password?
          </a>
        </div>
        <Button
          type="submit"
          value="Log in"
          extraClass="w-full text-center text-xl mb-4"
          size="lg"
        />
        <div className="text-center text-gray400">
          Not a member?{" "}
          <span
            onClick={onRegister}
            className="text-gray500 focus:outline-none focus:underline cursor-pointer"
          >
            Register
          </span>
        </div>
      </form>
    </>
  );
};

export default Login;
