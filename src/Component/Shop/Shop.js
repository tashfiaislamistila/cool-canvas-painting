import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product];
        setCart(newCart)
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
                <h4>Selected Painting</h4>
                <div>
                    {
                        cart.map((item) => (<h5
                            key={item.id}>
                            {item.name}
                        </h5>
                        ))}
                </div>
                <div>
                    <button className='btn-recommend'>Recommended Painting</button>
                </div>
            </div>
            <div>
                <h1>Question Answer</h1>
                <h2>Question: Props Vs State?</h2>
                <p>Answer:Props is like argument to a function.When you create a component inside of react and you are going to pass it the props that you want to give to it.State is handle in the component and you can update it inside the component.While props are handle outside the component and must be update outside of the component.When you change the sate inside of your application it is going to re-render that section of your application. But props you can not actually change them you need to change them outside the component.In props you can pass into a component.In other hand state state is handled inside of that component. </p>
                <h1>How react works?</h1>
                <p>React is a javascript library.For any other kind of library you can use
                    it, import it and also use its method.React has virtual dom and it is manipulated the browser dom.React simply compare the virtual dom to real
                    dom.React is able to decide very firstly where it is changed in our markup.After that it is render the result very firstly in our screen.
                </p>
            </div>
        </div>
    );
};

export default Shop;