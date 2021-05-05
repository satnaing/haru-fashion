import { FC } from "react";

type Props = {
  extraClass?: string;
  size?: "sm" | "lg" | "xl";
  value: string;
  inverted?: true;
  noBorder?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<Props> = ({
  size = "sm",
  value,
  extraClass,
  inverted = false,
  noBorder = false,
  onClick,
  children,
}) => {
  let btnSize = "";
  if (size === "sm") {
    btnSize = "py-1 px-5";
  } else if (size === "lg") {
    btnSize = "py-2 px-6";
  } else {
    btnSize = "py-3 px-7 text-xl";
  }
  return (
    <button
      onClick={onClick}
      className={`focus:outline-none ${btnSize} border border-gray500 bg-gray500 text-gray100 hover:text-gray300 ${extraClass}`}
    >
      {value} <span className="ml-1">{children}</span>
    </button>
  );
};

export default Button;
