import React from 'react';
import './Product.css'
const Product = (props) => {
    const { id, price, name, image } = props.product
    return (
        <div className='product'>
            <img src={image} alt="" />
            <p className='product-name'>{name}</p>
        </div>
    );
};

export default Product;