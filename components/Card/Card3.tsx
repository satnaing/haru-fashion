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

const Card3: FC<Props> = ({
  imgSrc1,
  imgSrc2,
  imgAlt,
  itemLink = "#",
  itemName,
  itemPrice,
}) => (
  <div className="w-full md:w-1/3 px-20 flex justify-center">
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

export default Card3;
