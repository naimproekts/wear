import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';


function Slider() {
    return(
        <div className="popular-slider">
        <Swiper 
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    
      <SwiperSlide><div className="popul-img-1"></div></SwiperSlide>
      <SwiperSlide><div className="popul-img-2"></div></SwiperSlide>
      <SwiperSlide><div className="popul-img-3"></div></SwiperSlide>
      <SwiperSlide><div className="popul-img-4"></div></SwiperSlide>
      <SwiperSlide><div className="popul-img-5"></div></SwiperSlide>
      
    </Swiper>
    </div>
    
    )
}

export default Slider