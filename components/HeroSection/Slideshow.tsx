import { useTranslations } from "next-intl";
import Image from "next/image";

import TextButton from "../Buttons/TextButton";
import styles from "./Hero.module.css";

// swiperjs
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const sliders = [
  {
    id: 2,
    image: "/images/img1.png",
    imageTablet: "/images/img1.png",
    imageMobile: "/images/img1.png",
    subtitle: "50% تخفیف",
    titleUp: "جدیدترین ها",
    titleDown: "جواهرات",
    rightText: false,
  },
  {
    id: 1,
    image: "/images/img1.png",
    imageTablet: "/images/img1.png",
    imageMobile: "/images/img1.png",
    subtitle: "جدیدترین ها",
    titleUp: "ست شب",
    titleDown: "دستبند",
    rightText: true,
  },
  {
    id: 3,
    image: "/images/img1.png",
    imageTablet: "/images/img1.png",
    imageMobile: "/images/img1.png",
    subtitle: "جدیدترین ها",
    titleUp: "ست شب",
    titleDown: "دستبند",
    rightText: false,
  },
];

const Slideshow = () => {
  const t = useTranslations("Index");

  return (
    <>
      <div className="relative slide-container w-full z-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
            type: "fraction",
            dynamicBullets: true,
          }}
          className="mySwiper"
        >
          {sliders.map((slider) => (
            <SwiperSlide key={slider.id}>
              <div className="hidden lg:block">
                <Image
                  layout="responsive"
                  src={slider.image}
                  width={572}
                  height={572}
                  alt={"some name"}
                />
              </div>
              <div className="hidden sm:block lg:hidden">
                <Image
                  layout="responsive"
                  src={slider.imageTablet}
                  width={720}
                  height={720}
                  alt={"some name"}
                />
              </div>
              <div className="sm:hidden">
                <Image
                  layout="responsive"
                  src={slider.imageMobile}
                  width={800}
                  height={800}
                  alt={"some name"}
                />
              </div>
              <div
                className={
                  slider.rightText
                    ? styles.rightTextSection
                    : styles.leftTextSection
                }
              >
                <span className={styles.subtitle}>{slider.subtitle}</span>
                <span
                  className={`${styles.title} text-center ${
                    slider.rightText ? "sm:text-right" : "sm:text-left"
                  }`}
                >
                  {slider.titleUp} <br />
                  {slider.titleDown}
                </span>
                <TextButton value={t("shop_now")} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slideshow;
