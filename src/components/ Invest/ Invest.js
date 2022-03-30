import React from "react";
import "./ invest.scss";
import { DropdownButton, Dropdown } from "react-bootstrap";

const Invest = () => {
  return (
    <div className="invest">
      <h2>Đầu tư UNIVEST với 3 bước đơn giản</h2>
      <div className="invest-item">
        <div className="invest-dropdown">
          <DropdownButton
            id="dropdown-basic-button"
            title="Tải App và đăng ký tài khoản"
          >
            <Dropdown.Item href="">
              Nhận lãi hấp dẫn lên tới 6%
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Miễn phí nạp và rút tiền
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1">
              Phát hành bởi các ngân hàng và quy định tài chính
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            id="dropdown-basic-button"
            title="Dropdown Lựa chọn sản phẩm đầu tư"
          >
            <Dropdown.Item href="#/action-2">
              Nhận lãi hấp dẫn lên tới 6%
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Miễn phí nạp và rút tiền
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1">
              Phát hành bởi các ngân hàng và quy định tài chính
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            id="dropdown-basic-button"
            title="Theo dõi tăng trưởng tài sản từng ngày"
          >
            <Dropdown.Item href="#/action-2">
              Nhận lãi hấp dẫn lên tới 6%
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Miễn phí nạp và rút tiền
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1">
              Phát hành bởi các ngân hàng và quy định tài chính
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          <img
            src={require("../assets/Rectangle 205.png")}
            alt="logo"
            className="invest-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Invest;
