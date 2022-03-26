import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import '../ShowData/ShowData'
import ShowData from '../ShowData/ShowData';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [selectOne, setSelectOne] = useState([]);
    // console.log(selectOne);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        if (newCart.length > 4) {
            alert("You cant choose more then 4")
        }
        else {
            setCart(newCart)
        }

    }

    const arrayLength = cart.length;
    const randomNumber = () => {
        const singleOneSelect = Math.floor(Math.random() * (arrayLength));
        const randomOne = cart[singleOneSelect];
        setSelectOne(randomOne);
    }
    const deleteCart = () => {
        setCart([]);
        setSelectOne([]);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="selected-container">
                <h1>Selected Painting</h1>
                <h2>Maximum Choose 4 painting</h2>
                <div>
                    {
                        cart.map((item) => (<h3
                            key={item.id} >
                            <img className='cart-img' src={item.image} alt=""></img>
                            {item.name}
                        </h3>
                        ))}
                </div>
                <div>
                    <button className='btn-recommend' onClick={randomNumber}>Recommended Painting</button>

                </div>
                <div>
                    <button className='btn-delete' onClick={deleteCart}>Delete Painting</button>
                </div>
                <ShowData selectOne={selectOne}></ShowData>
            </div>

        </div>
    );
};

export default Shop;