import { FC } from "react";
import GhostButton from "../Buttons/GhostButton";

type Props = {};

const Card: FC<Props> = () => (
  <div className="cardContainer group w-64">
    <div className="imageContainer relative overflow-hidden mb-2">
      <a href="#">
        <img
          className="first-image w-64 h-full absolute top-0 left-0 transition-opacity group-hover:opacity-0"
          src="https://i.ibb.co/ZTXPJ8d/minimalist-img-2-1.jpg"
          alt=""
        />
        <img
          className="w-64 h-full transition-transform group-hover:transform group-hover:duration-700 group-hover:scale-110"
          src="https://i.ibb.co/NS99V3K/minimalist-img-21.webp"
          alt=""
        />
      </a>
      <a href="#" className="wishlist"></a>
      {/* <div className="absolute z-20 bottom-5 left-1/2 w-4/5 translate-x-1/2"></div> */}
      <GhostButton
        value="Add to cart"
        extraClass="absolute z-20 bottom-5 left-1/2 w-4/5 transform -translate-x-1/2 text-center"
      />
    </div>
    <a href="#" className="title block no-underline text-gray500 mb-1">
      Ripped Jeans
    </a>
    <span className="text-gray400">$ 200.00</span>
  </div>
);

export default Card;
