import TextButton from "../Buttons/TextButton";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className="absolute top-8">
      <div className="carousel">
        <div className="carousel-inner">
          <input
            className="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden
            defaultChecked
          />
          <div className="carousel-item relative">
            <img src="https://goyacdn.everthemes.com/demo-fashion/wp-content/uploads/sites/3/2020/02/curly_hair_white-1.jpg" />
            <div className={styles.rightTextSection}>
              <span className={styles.subtitle}>Spring Revolution</span>
              <h1 className={`${styles.title} text-right`}>
                Night Summer <br />
                Dresses
              </h1>
              <TextButton value="Shop Now" />
            </div>
            {/* <img src="http://fakeimg.pl/2000x800/0079D8/fff/?text=Without" /> */}
          </div>
          <input
            className="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div className="carousel-item relative">
            <img src="https://goyacdn.everthemes.com/demo-fashion/wp-content/uploads/sites/3/2020/02/curly_hair_girl-1.jpg" />
            <div className={styles.leftTextSection}>
              <span className={styles.subtitle}>50% off</span>
              <h1 className={styles.title}>
                New Cocktail <br />
                Dresses
              </h1>
              <TextButton value="Shop Now" />
            </div>
          </div>
          <input
            className="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div className="carousel-item relative">
            <img src="https://goyacdn.everthemes.com/demo-fashion/wp-content/uploads/sites/3/2020/02/monigote.jpg" />
            <div className={styles.leftTextSection}>
              <span className={styles.subtitle}>Spring promo</span>
              <h1 className={styles.title}>
                The Weekend <br />
                Promotions
              </h1>
              <TextButton value="Shop Now" />
            </div>
          </div>
          <label
            htmlFor="carousel-3"
            className="carousel-control prev control-1"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-2"
            className="carousel-control next control-1"
          >
            ›
          </label>
          <label
            htmlFor="carousel-1"
            className="carousel-control prev control-2"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-3"
            className="carousel-control next control-2"
          >
            ›
          </label>
          <label
            htmlFor="carousel-2"
            className="carousel-control prev control-3"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-1"
            className="carousel-control next control-3"
          >
            ›
          </label>
          <ol className="carousel-indicators">
            <li>
              <label htmlFor="carousel-1" className="carousel-bullet">
                •
              </label>
            </li>
            <li>
              <label htmlFor="carousel-2" className="carousel-bullet">
                •
              </label>
            </li>
            <li>
              <label htmlFor="carousel-3" className="carousel-bullet">
                •
              </label>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Hero;
