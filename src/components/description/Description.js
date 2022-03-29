import React from "react";
import "./description.scss";

const Description = () => {
  return (
    <div className="description">
         <img src={require('../assets/Frame 748.png')} alt="logo" className="brand-logo"/>
         <div className="description-icon">
             <h1>ứng dụng đầu tư tài chính hàng đầu Việt nam. </h1>
             <p>Hơn 100,000,000 người tin dùng</p>
             <div className="description-item">
                 <div className="description-colum" >
                 <img src={require('../assets/Group-apple.png')} alt="logo" />
                 <img src={require('../assets/Group-ch.png')} alt="logo" />
                 </div>
                 <div>
                 <img src={require('../assets/Group-Qrcode.png')} alt="logo"/>

                 </div>
             </div>
         </div>

    </div>
  );
};

export default Description;
