import { FC, forwardRef } from "react";

type Props = {
  extraClass?: string;
  size?: "sm" | "lg" | "xl";
  value: string;
  inverted?: true;
  noBorder?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const GhostButton: FC<Props> = forwardRef(
  (
    {
      size = "sm",
      value,
      extraClass,
      inverted = false,
      noBorder = false,
      onClick,
      children,
    },
    ref
  ) => {
    let btnSize = "";
    if (size === "sm") {
      btnSize = "py-1 px-5";
    } else if (size === "lg") {
      btnSize = "py-2 px-6";
    } else {
      btnSize = "py-3 px-7  text-xl";
    }
    return (
      <div
        className={`${extraClass} bg-white group inline-block cursor-pointer ${
          noBorder ? "" : "border border-gray500"
        }  ${inverted && "hover:bg-gray500"}`}
      >
        <a
          onClick={onClick}
          className={` ${
            inverted ? "group-hover:text-white" : "group-hover:text-gray400"
          } no-underline inline-block text-gray500 tracking-widest ${btnSize}`}
        >
          {value} <span className="ml-1">{children}</span>
        </a>
      </div>
    );
  }
);

export default GhostButton;
