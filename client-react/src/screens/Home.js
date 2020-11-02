import React from 'react';
import { Link } from "react-router-dom"
import '../App.css';

function Home() {

    const category1 = 'Baked Goods';
    const category2 = 'Beverages';
    const category3 = 'Cafe & Deli';
    const category4 = 'Canned Food';
    const category5 = 'Cleaning & Safety';
    const category6 = 'Condiments';
    const category7 = 'Dairy Products';
    const category8 = 'Frozen Foods & Ice Cream';
    const category9 = 'Meat & Seafood';
    const category10 = 'Office Supph4es';
    const category11 = 'Produce';
    const category12 = 'Snacks';

    return ( 
        <div>
            <h1>Home Page</h1>
            <hr/>
            <div className="home-links">
            <li><Link to="/products">Add Products!</Link></li>
                <li><Link to="/reviews">Review Products!</Link></li>
                <li><Link to="/users">See Users!</Link></li>
            </div>
            <div>
    <h4><img src="/imagecollection/Slide1.jpeg"></img></h4>
    <h4>{category1}</h4>
    <h4><img src="/imagecollection/Slide2.jpeg"></img></h4>
    <h4>{category2}</h4>
    <h4><img src="/imagecollection/Slide3.jpeg"></img></h4>
    <h4>{category3}</h4>
    <h4><img src="/imagecollection/Slide4.jpeg"></img></h4>
    <h4>{category4}</h4>
    <h4><img src="/imagecollection/Slide5.jpeg"></img></h4>
    <h4>{category5}</h4>
    <h4><img src="/imagecollection/Slide6.jpeg"></img></h4>
    <h4>{category6}</h4>
    <h4><img src="/imagecollection/Slide7.jpeg"></img></h4>
    <h4>{category7}</h4>
    <h4><img src="/imagecollection/Slide8.jpeg"></img></h4>
    <h4>{category8}</h4>
    <h4><img src="/imagecollection/Slide9.jpeg"></img></h4>
    <h4>{category9}</h4>
    <h4><img src="/imagecollection/Slide10.jpeg"></img></h4>
    <h4>{category10}</h4>
    <h4><img src="/imagecollection/Slide11.jpeg"></img></h4>
    <h4>{category11}</h4>
    <h4><img src="/imagecollection/Slide12.jpeg"></img></h4>
    <h4>{category12}</h4>
  </div>
        </div>
    );
}

export default Home;