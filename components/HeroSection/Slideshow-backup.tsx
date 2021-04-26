import { Slide } from "react-slideshow-image";
import TextButton from "../Buttons/TextButton";
import styles from "./Hero.module.css";

const slideImages = [
  "https://goyacdn.everthemes.com/demo-fashion/wp-content/uploads/sites/3/2020/02/curly_hair_white-1.jpg",
  "https://goyacdn.everthemes.com/demo-fashion/wp-content/uploads/sites/3/2020/02/curly_hair_girl-1.jpg",
  "https://goyacdn.everthemes.com/demo-fashion/wp-content/uploads/sites/3/2020/02/monigote.jpg",
];

const sliders = [
  {
    bgImg:
      "https://goyacdn.everthemes.com/demo-fashion/wp-content/uploads/sites/3/2020/02/curly_hair_white-1.jpg",
    subtitle: "Spring Revolution",
    titleUp: "Night Summer",
    titleDown: "Dresses",
    rightText: "true",
  },
  {
    bgImg:
      "https://goyacdn.everthemes.com/demo-fashion/wp-content/uploads/sites/3/2020/02/curly_hair_girl-1.jpg",
    subtitle: "50% off",
    titleUp: "New Cocktail",
    titleDown: "Dresses",
    rightText: "false",
  },
  {
    bgImg:
      "https://goyacdn.everthemes.com/demo-fashion/wp-content/uploads/sites/3/2020/02/monigote.jpg",
    subtitle: "Spring promo",
    titleUp: "The Weekend",
    titleDown: "Promotions",
    rightText: "false",
  },
];

const sectionHeight = "720px";

const slideProperties = {
  duration: 300000,
  canSwipe: true,
  // indicators: true,
};

const Slideshow = () => {
  return (
    <>
      <div className="slide-container absolute w-full h-screen top-8">
        <Slide {...slideProperties}>
          <div className="each-slide relative">
            {sliders.map((slider) => (
              <div
                style={{
                  backgroundImage: `url(${slider.bgImg})`,
                  height: sectionHeight,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div
                  className={`${
                    slider.rightText === "true"
                      ? styles.rightTextSection
                      : styles.leftTextSection
                  }`}
                >
                  <span className={styles.subtitle}>{slider.subtitle}</span>
                  <h1
                    className={`${styles.title} ${
                      slider.rightText === "true" && "text-right"
                    }`}
                  >
                    {slider.titleUp} <br />
                    {slider.titleDown}
                  </h1>
                  <TextButton size="small" value="Shop Now" />
                </div>
              </div>
            ))}
          </div>
        </Slide>
      </div>
      <div style={{ height: sectionHeight }}></div>
    </>
  );
};

export default Slideshow;
