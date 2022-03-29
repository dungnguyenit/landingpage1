import React from "react";
import "./ support.scss";

const Support = () => {
  return (
    <div className="support">
      <div>
        <h1>UNIVEST sẵn sàng giúp bạn</h1>
      </div>
      <div className="search">
        <input className="search-input" placeholder="tim kiem"/>
        <img src={require("../assets/iconserch.png")} alt="logo" className="search-icon"/>
      </div>
      <div className="support-text">
          <div className="support-text_left">
              <div className="support-top">
                  <h4>Câu hỏi nổi bật </h4>
                  <div className="support-top-btn">
                      <button className="btn">Univest là gì ?</button>
                      <button className="btn">Chi tiết biểu phí và cách tính</button>
                      <button className="btn">Khi có thắc mắ, gặp sự cố hay cần khiếu nại tôi phải làm gì </button>
                      <button className="btn">Các trường hợp chuyển tiền thất bại</button>
                      <button className="btn">Các trường hợp chuyển tiền thất bại</button>
                      <button className="btn">Các trường hợp chuyển tiền thất bại</button>

                  </div>
              </div>
              <div className="support-bottom">
                  <h4>Câu hỏi nổi bật </h4>
                  <div className="support-bottom-btn"> 
                      <select  className="support-select">
                        <option className="select">Tích luỹ</option>
                        <option className="select">Hướng dẫn sử dụng tích luỹ</option>
                        <option className="select">Tích luỹ là gì?</option>
                        <option className="select">Rút tiền về mất bao lâu</option>
                        <option className="select">Nạp tiền vào tài khoản như nào?</option>
                      </select>
                      <button className="btn">Trái phiếu</button>
                      <button className="btn">Nạp tiền</button>
                      <button className="btn"> Nạp tiền</button>
                      <button className="btn">Bảo vệ</button>
                  </div>
              </div>
          </div>
          <div className="support-text_right">
              <h1>
              Hỗ trợ
              </h1>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                   Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
                   Donec eu libero sit amet quam egestas semper. 
                  Aenean ultricies mi vitae est. 
                  Mauris placerat eleifend leo.</p>
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                   Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
                   Donec eu libero sit amet quam egestas semper. 
                  Aenean ultricies mi vitae est. 
                  Mauris placerat eleifend leo.</p>
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                   Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
                   Donec eu libero sit amet quam egestas semper. 
                  Aenean ultricies mi vitae est. 
                  Mauris placerat eleifend leo.</p>
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                   Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
                   Donec eu libero sit amet quam egestas semper. 
                  Aenean ultricies mi vitae est. 
                  Mauris placerat eleifend leo.</p>
          </div>
      </div>
    </div>
  );
};

export default Support;
