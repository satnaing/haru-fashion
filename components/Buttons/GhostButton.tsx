import { FC, forwardRef } from "react";

type Props = {
  extraClass?: string;
  size?: "sm" | "normal" | "lg";
  inverted?: boolean;
  noBorder?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

// eslint-disable-next-line react/display-name
const GhostButton: FC<Props> = ({
  onClick,
  size,
  extraClass,
  noBorder = false,
  inverted = true,
  children,
}) => {
  let btnSize = "";
  if (size === "sm") {
    btnSize = "py-2 sm:py-1 px-5";
  } else if (size === "lg") {
    btnSize = "py-4 sm:py-3 px-7  text-xl";
  } else {
    btnSize = "py-3 sm:py-2 px-6";
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-white text-center cursor-pointer text-xl sm:text-base tracking-widest text-gray500 ${
        !noBorder && "border border-gray500"
      } ${
        inverted ? "hover:bg-gray500 hover:text-gray100" : "hover:text-gray400"
      } ${btnSize} ${extraClass}`}
    >
      {children}
    </button>
  );
};

export default GhostButton;
