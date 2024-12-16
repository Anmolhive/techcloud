"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperSlider = ({ children, slidesPerView }) => {
  const wrappedChildren = React.Children.map(children, (child) => (
    <SwiperSlide>{child}</SwiperSlide>
  ));
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation]}
      className="swiper-slider"
    >
      {wrappedChildren}
    </Swiper>
  );
};

export default SwiperSlider;
