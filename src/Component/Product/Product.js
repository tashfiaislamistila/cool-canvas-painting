import React from 'react';
import './Product.css'
const Product = (props) => {
    const { price, name, image } = props.product;

    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <h2>Price : ${price}</h2>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;