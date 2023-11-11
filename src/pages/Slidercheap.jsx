import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';


function Slider() {
    return(
        <div className="cheap-slider">
        <Swiper 
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    
      <SwiperSlide><div className="chaep-img-1"></div></SwiperSlide>
      <SwiperSlide><div className="chaep-img-2"></div></SwiperSlide>
      <SwiperSlide><div className="cheap-img-3"></div></SwiperSlide>
      <SwiperSlide><div className="cheap-img-4"></div></SwiperSlide>
      <SwiperSlide><div className="cheap-img-5"></div></SwiperSlide>
      
    </Swiper>
    </div>
    
    )
}

export default Slider