import { FC } from "react";

type Props = {
  extraClass?: string;
  size?: "small" | "large";
  value: string;
};

const Button: FC<Props> = ({ extraClass, size = "small", value }) => (
  <div
    className={`${extraClass} cursor-pointer border-2 border-gray500 inline-block bg-gray500 hover:bg-gray400 hover:border-gray400`}
  >
    <button
      type="button"
      className={`no-underline inline-block text-gray100 focus:outline-none focus:text-gray300 tracking-widest ${
        size === "small" ? "py-1 px-5" : "py-2 px-6"
      }`}
    >
      {value}
    </button>
  </div>
);

export default Button;
