import { FC } from "react";
import GhostButton from "../Buttons/GhostButton";
import styles from "./OverlayContainer.module.css";

type Props = {
  imgSrc: string;
  imgAlt?: string;
};

const OverlayContainer: FC<Props> = ({ imgSrc, imgAlt, children }) => (
  <div className={styles.imgContainer}>
    <img className={styles.img} src={imgSrc} alt={imgAlt} />
    {children}
    <div className={styles.imgOverlay}></div>
    <div className={styles.overlayBorder}></div>
    <div className={styles.overlayBorder2}></div>
  </div>
);

export default OverlayContainer;
