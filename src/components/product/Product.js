import React from 'react';
import './product.scss'

const Product = () => {
  return (
    <div className="product">
     
      <h2>Sản phẩm của UNIVEST</h2>
      <button className='product-btn1'>Tích luỹ</button>
      <div className='product-item'>
        <div className='product-text'>
          <h4>Tích luỹ linh hoạt, lãi nhận hàng ngày</h4>
          <p>Nhận lãi hấp dẫn lên tới 8%/năm</p>
          <p>Miễn phí nạp và rút tiền</p>
          <p>Phát hành bởi các ngân hàng và quy định tài chính</p>
          <div className='product-btn'>
          <button className='product-btn1'>Tìm hiểm thêm </button>
          </div>
          
          
        </div>
        <div className='product-icon'>
        <img src={require('../assets/product-icon.png')} 
      alt="logo" 
      className='produc-logo'/>
        </div>
      </div>
    </div>
  )
}
export default Product