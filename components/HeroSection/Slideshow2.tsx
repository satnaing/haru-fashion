import { Slide } from "react-slideshow-image";
import TextButton from "../Buttons/TextButton";
import styles from "./Hero.module.css";

const sliders = [
  {
    bgImg: "/bg-img/curly_hair_white-1.jpg",
    subtitle: "Spring Revolution",
    titleUp: "Night Summer",
    titleDown: "Dresses",
    rightText: true,
  },
  {
    bgImg: "/bg-img/curly_hair_girl-1.jpg",
    subtitle: "50% off",
    titleUp: "New Cocktail",
    titleDown: "Dresses",
    rightText: false,
  },
  {
    bgImg: "/bg-img/monigote.jpg",
    subtitle: "Spring promo",
    titleUp: "The Weekend",
    titleDown: "Promotions",
    rightText: false,
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
          {sliders.map((slider) => (
            <div className="each-slide relative">
              <div
                style={{
                  backgroundImage: `url(${slider.bgImg})`,
                  height: sectionHeight,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div
                  className={
                    slider.rightText
                      ? styles.rightTextSection
                      : styles.leftTextSection
                  }
                >
                  <span className={styles.subtitle}>{slider.subtitle}</span>
                  <h1
                    className={`${styles.title} ${
                      slider.rightText ? "text-right" : "text-left"
                    }`}
                  >
                    {slider.titleUp} <br />
                    {slider.titleDown}
                  </h1>
                  <TextButton value="Shop Now" />
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      {/* <div style={{ height: sectionHeight, zIndex: -1 }}></div> */}
    </div>
  );
};

export default Slideshow;
