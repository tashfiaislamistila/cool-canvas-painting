import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
            <div className='btn-btn'>
                <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                    <p className='btn-text'>Add to cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}> </FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;