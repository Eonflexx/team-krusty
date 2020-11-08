//This component is no longer in use.

import React from 'react';
import logo from '../sc-logoadobe.svg';
import { Link } from "react-router-dom"
import '../App.css';

function Navy() {
    const navStyle = {
        color: 'white'
    }
    return ( 
        <nav>
            <img src={logo} className="App-logo" alt="logo" />
            <h3>SelectChoice</h3>
            <ul className="nav-links">
            <li><Link style={navStyle} to="/">Home</Link></li>
                <li><Link style={navStyle} to="/about">About</Link></li>
                <li><Link style={navStyle} to="/shop">Shop</Link></li>
            </ul>
        </nav>
    );
}

export default Navy;



/*

// ALTERNATIVE HEADER

import React from 'react';

const Header = ({ title }) => (
    <div>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/topics">Topics</a>
    <h1>{title}</h1>
    </div>
);

export default Header;

*/