import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { useAlert } from 'react-alert'
import '../../App.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';


function ItemDetailAndCart({ match }) {
    
    useEffect(() => {
        fetchItem();
        console.log(match)
    }, []);

    const [cart, setCart] = useState ([]);

    const [page, setPage] = useState (PAGE_PRODUCTS);

    const [item, setItem] = useState({
        image: {}
    });

    const alert = useAlert();

    const addToCart = (product) => {
        setCart([...cart, product]);
        console.log('button clicked to add item')
    };

    const navigateTo = (togglePage) => {
        setPage(togglePage);
    };

    const fetchItem = async () => {
        const fetchItem = await fetch(`http://localhost:3001/products/${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item)
        // response we get back
        console.log(item);
    };

    const renderProduct = () => (
        <div className="itemdetails">
            <header id='itemheader'>
            <h1>{item.name}</h1>
            <h4>${item.price}</h4>
            </header>
            <body>
            <button onClick = {() => addToCart (item)} >Add to Cart</button>
            <hr />
            <img src={item.image} alt="" />
            <hr />
            <button onClick = {() => navigateTo(PAGE_CART)} >Go to Cart ({cart.length})</button>   
            </body>
        </div>
    );

    const renderCart = () => (
        <div>
            <header><button>Return To Products</button></header>
        <div className="itemdetails">
            {cart.map((product, index) => (
                <div className="itemdetail" key={index}>
                <li>{item.name}, ${item.price}<button>Remove</button></li>
                <hr />
                </div>
            ))}
        </div>
        <button onClick={() => { alert.show("You've checkout! Thank you for purchasing on our website!") }}> Check Out </button>
        </div>
    );

    return (
        <div>
        { page === PAGE_PRODUCTS && renderProduct() }
        { page === PAGE_CART && renderCart() }
        </div>
    );
};

export default ItemDetailAndCart;