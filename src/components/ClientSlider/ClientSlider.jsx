import React from "react";
import SwiperSlider from "../swiperSlider/SwiperSlider";
import './ClientSlider.scss'
import Image from "next/image";

const ClientSlider = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="rounded-3 py-5" style={{background: '#c2410c'}}>
          <div className="row px-5">
            <div className="col-md-5">
              <div className="d-flex gap-4">
                <span className="enterprise_text fs-5 fw-bold text-white p-2 px-3 rounded-3">Cyber Security</span>
                <span className="enterprise_text fs-5 fw-bold text-white p-2 px-3 rounded-3">Infrastructure</span>
                <span className="enterprise_text fs-5 fw-bold text-white p-2 px-3 rounded-3">Cloud Services</span>
                <span className="enterprise_text fs-5 fw-bold text-white p-2 px-3 rounded-3">Network</span>
              </div>
              <h2 className="fs-lg text-white mt-5 mb-4">Introducing Techcloud Enterprise</h2>
              <div className="col-md-8">
              <p className="text-white">Streamlining Tech Discovery & Procurement
              for Scalable IT needs</p>
              </div>
              <div className="d-flex mt-4">
              <button type="button" class="btn btn-primary col-md-5 fs-3 rounded-pill py-4 px-5">Explore Solutions</button>
              </div>
            </div>
            <div className="col-md-7 after-before-fade align-self-center">
              <SwiperSlider slidesPerView="5" reverse={false}>
                <Image src='/images/clients/amazon.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/aruba.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/check_point.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/cisco.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/commvault.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/amazon.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/aruba.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/check_point.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/cisco.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/commvault.svg' alt="" width={75} height={55} />
              </SwiperSlider>
              <div className="py-5">
              <SwiperSlider slidesPerView="5" reverse={true}>
                <Image src='/images/clients/amazon.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/aruba.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/check_point.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/cisco.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/commvault.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/amazon.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/aruba.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/check_point.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/cisco.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/commvault.svg' alt="" width={75} height={55} />
              </SwiperSlider>
              </div>
              <SwiperSlider slidesPerView="5" reverse={false}>
                <Image src='/images/clients/amazon.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/aruba.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/check_point.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/cisco.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/commvault.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/amazon.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/aruba.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/check_point.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/cisco.svg' alt="" width={75} height={55} />
                <Image src='/images/clients/commvault.svg' alt="" width={75} height={55} />
              </SwiperSlider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
