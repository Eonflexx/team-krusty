import React from 'react';
import { Link } from "react-router-dom"
import '../App.css';

function Nav() {
    const navStyle = {
        color: 'white'
    }
    return ( 
        <nav>
            <h3>SelectChoice</h3>
            <ul className="nav-links">
            <li><Link style={navStyle} to="/">Home</Link></li>
                <li><Link style={navStyle} to="/about">About</Link></li>
                <li><Link style={navStyle} to="/shop">Shop</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;