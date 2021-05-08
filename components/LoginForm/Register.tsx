import { Dialog, Transition } from "@headlessui/react";
import { FC } from "react";
import Button from "../Buttons/Button";
import Input from "../Input/Input";

type Props = {
  onLogin: () => void;
};

const Register: FC<Props> = ({ onLogin }) => {
  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-4xl text-center my-8 font-medium leading-6 text-gray-900"
      >
        Register
      </Dialog.Title>
      <div className="mt-2">
        <Input
          type="name"
          placeholder="User Name *"
          name="username"
          required
          extraClass="w-full focus:border-gray500"
          border="border-2 border-gray300 mb-4"
        />
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
          {/* <div className="flex items-center text-gray400 focus:outline-none">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="w-4 h-4 mb-0 mr-2"
            />
            <label htmlFor="remember">Remember me?</label>
          </div> */}
          <p className="text-gray400">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <a href="#" className="text-gray500">
              Privacy Policy
            </a>
          </p>
        </div>
        <Button
          value="Register"
          extraClass="w-full text-center text-xl mb-4"
          size="lg"
        />
        <div className="text-center text-gray400">
          Already a member?{" "}
          <span
            onClick={onLogin}
            className="text-gray500 focus:outline-none focus:underline cursor-pointer"
          >
            Login
          </span>
        </div>
      </div>
    </>
  );
};

export default Register;
