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
      <SwiperSlide><div className="categor-img-first"></div></SwiperSlide>
      <SwiperSlide><div className="categor-img-2"></div></SwiperSlide>
      <SwiperSlide><div className="categor-img-3"></div></SwiperSlide>
      <SwiperSlide><div className="categor-img-4"></div></SwiperSlide>
      <SwiperSlide><div className="categor-img-5"></div></SwiperSlide>
      
    </Swiper>
    
    
    )
}

export default Slider