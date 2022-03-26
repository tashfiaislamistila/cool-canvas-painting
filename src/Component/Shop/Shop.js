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

            <div>
                <h1>Question Answer</h1>
                <h2> Props Vs State?</h2>
                <p>Answer:Props is like argument to a function.When you create a component inside of react and you are going to pass it the props that you want to give to it.State is handle in the component and you can update it inside the component.While props are handle outside the component and must be update outside of the component.When you change the sate inside of your application it is going to re-render that section of your application. But props you can not actually change them you need to change them outside the component.In props you can pass into a component.In other hand state state is handled inside of that component. </p>
                <h1>How react works?</h1>
                <p>Answer :React is a javascript library.For any other kind of library you can use
                    it, import it and also use its method.React has virtual dom and it is manipulated the browser dom.React simply compare the virtual dom to real
                    dom.React is able to decide very firstly where it is changed in our markup.After that it is render the result very firstly in our screen.
                </p>
            </div>
        </div>
    );
};

export default Shop;