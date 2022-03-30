import React, { useRef, useState } from "react";
import "./reflect.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Reflect = () => {
  return (
    <div className="reflect">
      <h1>Báo chí nói về chúng tôi</h1>
      <div className="slide">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide><div className="card">
                <img src={require("../assets/Rectangle 55.png")} alt="logo" />
                <p>12/08/2021</p>
                <h5>Univest quỹ tích luỹ đầu tư hàng đầu</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. 
                </p>
              </div></SwiperSlide>
              <SwiperSlide><div className="card">
                <img src={require("../assets/Rectangle 55.png")} alt="logo" />
                <p>12/08/2021</p>
                <h5>Univest quỹ tích luỹ đầu tư hàng đầu</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. 
                </p>
              </div></SwiperSlide>
              <SwiperSlide><div className="card">
                <img src={require("../assets/Rectangle 55.png")} alt="logo" />
                <p>12/08/2021</p>
                <h5>Univest quỹ tích luỹ đầu tư hàng đầu</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div></SwiperSlide>
              <SwiperSlide><div className="card">
                <img src={require("../assets/Rectangle 55.png")} alt="logo" />
                <p>12/08/2021</p>
                <h5>Univest quỹ tích luỹ đầu tư hàng đầu</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. 
                </p>
              </div></SwiperSlide>
              
            </Swiper>
          </SwiperSlide>
          <SwiperSlide>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide><div className="card">
                <img src={require("../assets/Rectangle 55.png")} alt="logo" />
                <p>12/08/2021</p>
                <h5>Univest quỹ tích luỹ đầu tư hàng đầu</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div></SwiperSlide>
              <SwiperSlide><div className="card">
                <img src={require("../assets/Rectangle 55.png")} alt="logo" />
                <p>12/08/2021</p>
                <h5>Univest quỹ tích luỹ đầu tư hàng đầu</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div></SwiperSlide>
              <SwiperSlide><div className="card">
                <img src={require("../assets/Rectangle 55.png")} alt="logo" />
                <p>12/08/2021</p>
                <h5>Univest quỹ tích luỹ đầu tư hàng đầu</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. 
                </p>
              </div></SwiperSlide>
              <SwiperSlide><div className="card">
                <img src={require("../assets/Rectangle 55.png")} alt="logo" />
                <p>12/08/2021</p>
                <h5>Univest quỹ tích luỹ đầu tư hàng đầu</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div></SwiperSlide>
              
            </Swiper>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reflect;
