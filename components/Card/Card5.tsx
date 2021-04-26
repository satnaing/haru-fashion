import { FC } from "react";
import Heart from "../../public/icons/Heart";
import styles from "./Card.module.css";
import Card from "./index";

type Props = {
  imgSrc1: string;
  imgSrc2: string;
  imgAlt?: string;
  itemLink?: string;
  itemName: string;
  itemPrice: number;
};

const Card5: FC<Props> = ({
  imgSrc1,
  imgSrc2,
  imgAlt,
  itemLink = "#",
  itemName,
  itemPrice,
}) => (
  <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 px-4 py-4">
    <Card
      imgSrc1={imgSrc1}
      imgSrc2={imgSrc2}
      imgAlt={imgAlt}
      itemLink={itemLink}
      itemName={itemName}
      itemPrice={itemPrice}
    />
  </div>
);

export default Card5;
