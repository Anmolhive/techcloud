import React from "react";
import SwiperSlider from "../swiperSlider/SwiperSlider";

const ClientSlider = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="rounded-3 py-5" style={{background: 'radial-gradient(circle, rgba(156,167,223,1) 40%, rgba(232,166,179,1) 90%)'}}>
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <SwiperSlider slidesPerView="5">
                <h1>Testing 1</h1>
                <h1>Testing 2</h1>
                <h1>Testing 3</h1>
                <h1>Testing 4</h1>
                <h1>Testing 5</h1>
                <h1>Testing 6</h1>
                <h1>Testing 7</h1>
                <h1>Testing 8</h1>
                <h1>Testing 9</h1>
              </SwiperSlider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
