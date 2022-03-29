import React from "react";
import "./download.scss";
const Download = () => {
  return (
    <div className="download">
      <h1>Tải ngay UNIVEST để kiếm tiền ngay khi đang ngủ</h1>
      <div className="download-item">
        <div className="download-icon">
          <img src={require("../assets/Grouptao.png")} alt="logo" />
          <img src={require("../assets/Groupchplay.png")} alt="logo" />
        </div>
        <div className="qrcode">
          <img src={require("../assets/qlcode.png")} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Download;
