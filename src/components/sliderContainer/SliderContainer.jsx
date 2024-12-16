import React from "react";
import SlickSlider from "../elements/SlickSlider";
import Styles from './sliderContainer.module.scss';
const SliderContainer = ({ children, slidesToShow }) => {
  return (
    <>
      <section className={`${Styles.slider}`}>
      <div className="container">
        <SlickSlider
          class=" axil-slick-arrow arrow-top-slide"
          slidesToShow={slidesToShow}
          responsive={[
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {children}
        </SlickSlider>
      </div>
    </section>
    <style>
      {`.${Styles.slider} .arrow-top-slide .slide-arrow {
        top: 50% !important;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      }
      .${Styles.slider} .arrow-top-slide .slide-arrow .fal{
        color: #000 !important;
      }
      .${Styles.slider} .arrow-top-slide .slide-arrow.prev-arrow {
      left: 0px !important;
        right: auto !important;
        transform: translate(-65%, -50%) !important;
      }
      .${Styles.slider} .arrow-top-slide .slide-arrow.slick-next {
        transform: translate(65%, -50%) !important;
      }`}
    </style>
    </>
  );
};

export default SliderContainer;
