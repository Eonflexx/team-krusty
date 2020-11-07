import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import '../../App.css';

function ItemDetail({ match }) {

    useEffect(() => {
        fetchItem();
        console.log(match)
    }, []);

    const [item, setItem] = useState({
        image: {}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(`http://localhost:3001/products/${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item)
        // response we get back
        console.log(item);
    };

    return (
        <div class="itemdetails">
            <h1>{item.name}</h1>
            <h4>${item.price}</h4>
            <button>Add to Cart</button>
            <hr />
            <img src={item.image} alt="" />
        </div>
    );
}

export default ItemDetail;