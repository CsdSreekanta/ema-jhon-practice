import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product, handleAddToCart} =props
    const {img, name, price, seller, ratings} = product;

  

    return (
       
          <div className="product">
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price:${price}</p>
                <p className='product-manufacturer'><small>Manufacturer{seller}</small></p>
                <p className='product-rating'><small>Rating:{ratings}</small></p>
                <button onClick={()=>handleAddToCart(product)} className='button-cart'>
                    <p  className='cart-text'> Add To Cart</p>=
                </button>
            </div>
           
            
          </div>
        
    );
};

export default Product;