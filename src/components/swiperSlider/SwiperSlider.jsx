"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const SwiperSlider = ({ children, slidesPerView, reverse = false }) => {
  const wrappedChildren = React.Children.map(children, (child) => (
    <SwiperSlide>{child}</SwiperSlide>
  ));
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={1}
      speed={4000}
      direction="horizontal"
      autoplay={{
        delay: 0,
        reverseDirection: reverse,
      }}
      loop={true}
      freeMode={true}
      navigation={false}
      modules={[Autoplay]}
      className="swiper-slider swiper"
    >
      {wrappedChildren}
    </Swiper>
  );
};

export default SwiperSlider;
