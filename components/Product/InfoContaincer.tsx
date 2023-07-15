import React, {FC} from 'react';
import Image from "next/image";
import {Swiper,SwiperSlide} from "swiper/react"

type Props = {
  images:string[]
  name:string
}
const InfoContainer:FC<Props> = ({images,name}) => {
  return (
      <div className="imgSection w-full md:w-1/2 h-full text-right">
        <div className="w-full sm:w-3/4 h-full m-0 sm:m-4">
          <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              pagination={{
                clickable: true,
              }}
              className="mySwiper sm:hidden"
          >
            {
              images.map((image,index)=>(
                  <SwiperSlide key={"PRODUCT_IMAGE_"+index}>
                    <Image
                        className="each-slide w-full"
                        src={image}
                        width={1000}
                        height={1000}
                        alt={"PRODUCT_IMAGE_"+index}
                    />
                  </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className='p-4'>
          <h2 className='text-2xl block font-bold text-gray800 '>{name}</h2>
        </div>
      </div>
  );
};

export default InfoContainer;
