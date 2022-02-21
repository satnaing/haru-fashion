import { FC } from "react";

type Props = {
  // size: "small" | "large";
  value: string;
};

const TextButton: FC<Props> = ({ value }) => (
  <div className={`group transition-all flex justify-center w-28 relative`}>
    <button
      type="button"
      className={`inline-block no-underline text-gray500 p-2 duration-500 group-hover:tracking-widest`}
    >
      {value}
    </button>
    <div className="border-b-2 border-transparent absolute bottom-2 w-2.5 duration-500 group-hover:w-3/4 group-hover:border-gray500 group-hover:duration-500"></div>
  </div>
);

export default TextButton;
