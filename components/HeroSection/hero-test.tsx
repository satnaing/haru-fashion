import styles from "./Hero.module.css";
const HeroSection = () => {
  return (
    <div className="carousel relative shadow-2xl bg-white">
      <div className="carousel-inner relative overflow-hidden w-full">
        {/* Slide 1 */}
        <input
          className={`${styles.carouselOpen} ${styles.carousel1}`}
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          checked
        />
        <div
          className={`${styles.carouselItem} absolute opacity-0`}
          style={{ height: "50vh" }}
        >
          <div className="block h-full w-full bg-yellow text-white text-5xl text-center">
            Slide 1
          </div>
        </div>
        <label
          htmlFor="carousel-3"
          className={`prev ${styles.control1} w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto`}
        >
          ‹
        </label>
        <label
          htmlFor="carousel-2"
          className={`next ${styles.control1} w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto`}
        >
          ›
        </label>

        {/* Slide 2 */}
        <input
          className={`${styles.carouselOpen} ${styles.carousel2}`}
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
        />
        <div
          className={`${styles.carouselItem} absolute opacity-0`}
          style={{ height: "50vh" }}
        >
          <div className="block h-full w-full bg-red text-white text-5xl text-center">
            Slide 2
          </div>
        </div>
        <label
          htmlFor="carousel-3"
          className={`prev ${styles.control2} w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto`}
        >
          ‹
        </label>
        <label
          htmlFor="carousel-2"
          className={`next ${styles.control2} w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto`}
        >
          ›
        </label>

        {/* <!-- Add additional indicators for each slide--> */}
        <ol className={`${styles.carouselIndicators}`}>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-1"
              className={`${styles.carouselBullet} cursor-pointer block text-4xl text-white hover:text-blue-700`}
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-2"
              className={`${styles.carouselBullet} cursor-pointer block text-4xl text-white hover:text-blue-700`}
            >
              •
            </label>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HeroSection;
