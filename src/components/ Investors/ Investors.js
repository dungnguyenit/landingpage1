import React, { useState } from "react";
import "./ Investors.scss";
import { Carousel } from "react-bootstrap";

const Investors = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="investors">
      <div className="investors-slide">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              src={require("../assets/Frame 759.png")}
              alt="logo"
              className="investors-logo"
            />
            <Carousel.Caption>
              <div className="investors-content">
                <div className="investors-content-item">
                  <div className="investors-text">
                    <h1>Nhà đầu tư nói gì về UNIVEST</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and t
                      ypesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                    <h3>Shark Nguyễn Hoà Bình</h3>
                  </div>
                  <img
                    src={require("../assets/Rectangle 205.png")}
                    alt="logo"
                  />
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("../assets/Frame 759.png")} alt="logo" />
            <Carousel.Caption>
              <div className="investors-content">
                <div className="investors-content-item">
                  <div className="investors-text">
                    <h1>Nhà đầu tư nói gì về UNIVEST</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and t
                      ypesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                    </p>
                    <h3>Shark Nguyễn Hoà Bình</h3>
                  </div>
                  <img
                    src={require("../assets/Rectangle 205.png")}
                    alt="logo"
                  />
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("../assets/Frame 759.png")} alt="logo" />
            <Carousel.Caption>
              <div className="investors-content">
                <div className="investors-content-item">
                  <div className="investors-text">
                    <h1>Nhà đầu tư nói gì về UNIVEST</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and t
                      ypesetting industry. Lorem Ipsum has been the industry's
                      {/* standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. */}
                    </p>
                    <h3>Shark Nguyễn Hoà Bình</h3>
                  </div>
                  <img
                    src={require("../assets/Rectangle 205.png")}
                    alt="logo"
                  />
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Investors;
