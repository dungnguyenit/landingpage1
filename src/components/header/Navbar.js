import React, { useState } from "react";
import "./header.scss";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={require("../assets/Vector.png")} alt="logo" className="logo" />
      </div>

      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
          <li>Homepage</li>
          <li>Sản phẩm</li>
          <li> Về Univest</li>
          <li>Hỗ trợ</li>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"> </i>
        )}
      </button>
    </div>
  );
};

export default Navbar;
