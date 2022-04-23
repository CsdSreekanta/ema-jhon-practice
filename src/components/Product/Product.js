import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {img, name, price, seller, ratings} = props.product;

    return (
       
          <div className="product">
            <img src={img} alt="" />
            <div>
                <p>{name}</p>
                <p>Price:${price}</p>
                <p><small>Manufacturer:{seller}</small></p>
                <p><small>Rating:{ratings}</small></p>
            </div>
          </div>
        
    );
};

export default Product;