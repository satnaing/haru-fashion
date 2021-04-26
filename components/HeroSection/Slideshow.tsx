import { Slide } from "react-slideshow-image";
import TextButton from "../Buttons/TextButton";
import styles from "./Hero.module.css";

const slideImages = [
  "/bg-img/curly_hair_white-1.jpg",
  "/bg-img/curly_hair_girl-1.jpg",
  "/bg-img/monigote.jpg",
];

const sliders = [
  {
    bgImg: "bla.img",
    subtitle: "Spring Revolution",
    titleUp: "Night Summer",
    titleDown: "Dresses",
    rightText: "true",
  },
  {
    bgImg: "bla.img",
    subtitle: "50% off",
    titleUp: "New Cocktail",
    titleDown: "Dresses",
    rightText: "false",
  },
  {
    bgImg: "bla.img",
    subtitle: "Spring promo",
    titleUp: "The Weekend",
    titleDown: "Promotions",
    rightText: "false",
  },
];

const sectionHeight = "720px";

const slideProperties = {
  duration: 5000,
  canSwipe: true,
  // indicators: true,
};

const Slideshow = () => {
  return (
    <div style={{ height: 640 }}>
      <div className="slide-container absolute w-full h-screen top-8 z-20">
        <Slide {...slideProperties}>
          <div className="each-slide relative">
            <div
              style={{
                backgroundImage: `url(${slideImages[0]})`,
                height: sectionHeight,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className={styles.rightTextSection}>
                <span className={styles.subtitle}>Spring Revolution</span>
                <h1 className={`${styles.title} text-right`}>
                  Night Summer <br />
                  Dresses
                </h1>
                <TextButton value="Shop Now" />
              </div>
            </div>
          </div>
          <div className="each-slide relative">
            <div
              style={{
                backgroundImage: `url(${slideImages[1]})`,
                height: sectionHeight,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className={styles.leftTextSection}>
                <span className={styles.subtitle}>50% off</span>
                <h1 className={styles.title}>
                  New Cocktail <br />
                  Dresses
                </h1>
                <TextButton value="Shop Now" />
              </div>
            </div>
          </div>
          <div className="each-slide relative">
            <div
              style={{
                backgroundImage: `url(${slideImages[2]})`,
                height: sectionHeight,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className={styles.leftTextSection}>
                <span className={styles.subtitle}>Spring promo</span>
                <h1 className={styles.title}>
                  The Weekend <br />
                  Promotions
                </h1>
                <TextButton value="Shop Now" />
              </div>
            </div>
          </div>
        </Slide>
      </div>
      {/* <div style={{ height: sectionHeight, zIndex: -1 }}></div> */}
    </div>
  );
};

export default Slideshow;
