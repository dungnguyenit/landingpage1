import React from 'react';
import './product.scss'

const Product = () => {
  return (
    <div className="product">
      <img src={require('../assets/Frame 757.png')} 
      alt="logo" 
      className='produc-logo'/>
    </div>
  )
}
export default Product