import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';


function Slider() {
    return(
        <Swiper 
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <div className="categor-slider">
      <SwiperSlide><div className="popular-img-1"></div></SwiperSlide>
      <SwiperSlide><div className="popular-img-2"></div></SwiperSlide>
      <SwiperSlide><div className="popular-img-3"></div></SwiperSlide>
      <SwiperSlide><div className="popular-img-4"></div></SwiperSlide>
      <SwiperSlide><div className="popular-img-5"></div></SwiperSlide>
      <SwiperSlide><div className="popular-img-6"></div></SwiperSlide>
      <SwiperSlide><div className="popular-img-7"></div></SwiperSlide>
      <SwiperSlide><div className="popular-img-8"></div></SwiperSlide>
      </div>
    </Swiper>
    
    
    )
}

export default Slider