import { FC, MouseEventHandler } from "react";
import Card from "./Card";

type Props = {
  imgSrc1: string;
  imgSrc2: string;
  imgAlt?: string;
  itemLink?: string;
  itemName: string;
  itemPrice: number;
  onAddWishlist?: MouseEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Card3: FC<Props> = ({
  imgSrc1,
  imgSrc2,
  imgAlt,
  itemLink = "#",
  itemName,
  itemPrice,
  onAddWishlist,
  onClick,
}) => (
  <div className="w-full md:w-1/3 px-0 md:px-20 flex justify-center mb-8 md:mb-0">
    <Card
      imgSrc1={imgSrc1}
      imgSrc2={imgSrc2}
      imgAlt={imgAlt}
      itemLink={itemLink}
      itemName={itemName}
      itemPrice={itemPrice}
      onAddWishlist={onAddWishlist}
      onClick={onClick}
    />
  </div>
);

export default Card3;
