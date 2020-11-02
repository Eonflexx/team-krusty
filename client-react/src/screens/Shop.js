import React, {useState, useEffect} from 'react';
import '../App.css';

function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await  fetch('http://localhost:3001/products');

        const items = await data.json()
        console.log(items);
        setItems(items);
    };

    return ( 
        <div>
            {items.map(item => (
                <h1>{item.name}</h1>
            ))}
        </div>
    );
}

export default Shop;