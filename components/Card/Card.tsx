import { FC } from "react";
import Heart from "../../public/icons/Heart";
import styles from "./Card.module.css";

type Props = {
  imgSrc1: string;
  imgSrc2: string;
  imgAlt?: string;
  itemLink?: string;
  itemName: string;
  itemPrice: number;
  onClick?: () => void;
};

const Card: FC<Props> = ({
  imgSrc1,
  imgSrc2,
  imgAlt,
  itemLink = "www.example.com",
  itemName,
  itemPrice,
  onClick,
}) => (
  <div className={styles.cardContainer}>
    <div className={styles.imageContainer}>
      <a href={itemLink}>
        <img className={styles.firstImage} src={imgSrc1} alt={imgAlt} />
        {/* https://i.ibb.co/ZTXPJ8d/minimalist-img-2-1.jpg */}
        <img className={styles.secondImage} src={imgSrc2} alt={imgAlt} />
        {/* https://i.ibb.co/NS99V3K/minimalist-img-21.webp */}
      </a>
      <a href="www.example.com" className={styles.wishlist}>
        <Heart />
      </a>
      <div className="absolute z-20 bottom-5 left-1/2 w-4/5 translate-y-28 "></div>
      <div className={styles.btnWrapper}>
        <button onClick={onClick} className={styles.addBtn}>
          Add to cart
        </button>
      </div>
    </div>
    <a href={itemLink} className={styles.itemName}>
      {itemName}
    </a>
    <span className="text-gray400">$ {itemPrice}</span>
  </div>
);

export default Card;
