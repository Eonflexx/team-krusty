import React from 'react';
import logo from '../sc-logoadobe.svg';
import { Link } from "react-router-dom";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Bootnav() {
    return ( 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <img src={logo} className="App-logo" alt="logo" />
            <Navbar.Brand href="/">Select Choice</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <NavDropdown title="Features" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/reviews">Reviews</NavDropdown.Item>
                        <NavDropdown.Item href="/products">Add Product</NavDropdown.Item>
                        <NavDropdown.Item href="/users">users</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">User Login</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="/shop">Shop</Nav.Link>
                    <Nav.Link eventKey={2} href="/cart">Cart</Nav.Link>
                       
 
                </Nav>
            </Navbar.Collapse>
        </Navbar>  
    );
}

export default Bootnav;


