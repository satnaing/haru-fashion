import { FC } from "react";

type Props = {
  extraClass?: string;
  size?: "sm" | "lg" | "xl";
  value: string;
  inverted?: true;
  noBorder?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const GhostButton: FC<Props> = ({
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
      className={`focus:outline-none ${
        noBorder ? "" : "border border-gray500"
      } ${btnSize} ${
        inverted ? "hover:text-gray100 hover:bg-gray500" : "hover:text-gray400"
      } ${extraClass}`}
    >
      {value} <span className="ml-1">{children}</span>
    </button>
  );
};

export default GhostButton;
