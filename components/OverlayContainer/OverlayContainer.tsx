import { FC } from "react";
import styles from "./OverlayContainer.module.css";

type Props = {
  imgSrc: string;
  imgSrc2?: string;
  imgAlt?: string;
};

const OverlayContainer: FC<Props> = ({ imgSrc, imgSrc2, imgAlt, children }) => (
  <div className={styles.imgContainer}>
    {imgSrc2 ? (
      <picture>
        <source media="(min-width:992px)" srcSet={imgSrc} />
        <source media="(min-width:465px)" srcSet={imgSrc2} />
        <img className={styles.img} src={imgSrc2} alt={imgAlt} />
      </picture>
    ) : (
      // <img
      //   srcSet={`${imgSrc2} 480w,
      //        ${imgSrc} 800w`}
      //   sizes="(max-width: 600px) 480px,
      //       800px"
      //   // src={imgSrc}
      //   alt="Elva dressed as a fairy"
      // />
      <img className={styles.img} src={imgSrc} alt={imgAlt} />
    )}

    {children}
    <div className={styles.imgOverlay}></div>
    <div className={styles.overlayBorder}></div>
    <div className={styles.overlayBorder2}></div>
  </div>
);

export default OverlayContainer;
