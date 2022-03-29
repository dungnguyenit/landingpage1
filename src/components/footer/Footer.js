import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="cardss-footer">
        <h2>Sản phẩm</h2>
        <p>Đầu tư</p>
        <p>Tích luỹ</p>
      </div>
      <div className="cardss-footer">
        <h2>Hỗ trợ</h2>
        <p>Hỗ trợ khách hàng</p>
        <p>Chính sách bảo mật</p>
        <p>Điều khoản sử dụng</p>
      </div>
      <div className="cardss-footer">
          <h2>Kết nối</h2>
          <div></div>
          <p>Email:<a href="#"> wellcom@Univest.com.vn </a></p>
          <p>Hotline: <a href="#">19001006</a></p>
      </div>
    </div>
  );
};

export default Footer;
