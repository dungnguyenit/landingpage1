import React, { useRef, useState } from "react";
import "./reflect.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Reflect = () => {
  return (
    <div className="reflect">
      <h1>Báo chí nói về chúng tôi</h1>
      <div className="slide">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="slide-card">
              <div className="card">
                <img src={require("../assets/Rectangle 55.png")} alt="logo" />
                <p>12/08/2021</p>
                <h5>Univest quỹ tích luỹ đầu tư hàng đầu</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard [...]
                </p>
              </div>
              <div className="card">
                <div className="card">
                  <img src={require("../assets/Rectangle 55.png")} alt="logo" />
                  <p>12/08/2021</p>
                  <h5>Univest quỹ tích luỹ đầu tư hàng đầu</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard [...]
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card">
                  <img src={require("../assets/Rectangle 55.png")} alt="logo" />
                  <p>12/08/2021</p>
                  <h5>Univest quỹ tích luỹ đầu tư hàng đầu</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard [...]
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card">
                  <img src={require("../assets/Rectangle 55.png")} alt="logo" />
                  <p>12/08/2021</p>
                  <h5>Univest quỹ tích luỹ đầu tư hàng đầu</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard [...]
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
          <div className="slide-card">
              <div className="card">
                <img src={require("../assets/Rectangle 55.png")} alt="logo" />
                <p>12/08/2021</p>
                <h5>Univest quỹ tích luỹ đầu tư hàng đầu</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard [...]
                </p>
              </div>
              <div className="card">
                <div className="card">
                  <img src={require("../assets/Rectangle 55.png")} alt="logo" />
                  <p>12/08/2021</p>
                  <h5>Univest quỹ tích luỹ đầu tư hàng đầu</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard [...]
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card">
                  <img src={require("../assets/Rectangle 55.png")} alt="logo" />
                  <p>12/08/2021</p>
                  <h5>Univest quỹ tích luỹ đầu tư hàng đầu</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard [...]
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card">
                  <img src={require("../assets/Rectangle 55.png")} alt="logo" />
                  <p>12/08/2021</p>
                  <h5>Univest quỹ tích luỹ đầu tư hàng đầu</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard [...]
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Reflect;
