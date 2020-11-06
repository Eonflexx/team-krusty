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
    const category10 = 'Office Supplies';
    const category11 = 'Produce';
    const category12 = 'Snacks';

    return (
        <div>
            <h1>Home Page</h1>
            <hr />
           
            <div>
                <h4>{category1}</h4>
                <Link to="/shop/23"><img src="/homepageimages/0001.jpg" alt="croissant"></img></Link>
                <Link to="/shop/24"><img src="/homepageimages/0002.jpg" alt="apple pie"></img></Link>
                <Link to="/shop/25"><img src="/homepageimages/0003.jpg" alt="chocolate chip cookies"></img></Link>

                <h4>{category2}</h4>
                <Link to="/shop/26"><img src="/homepageimages/0004.jpg" alt="coca cola"></img></Link>
                <Link to="/shop/27"><img src="/homepageimages/0005.jpg" alt="seltzer water"></img></Link>
                <Link to="/shop/28"><img src="/homepageimages/0006.jpg" alt="orange juice"></img></Link>

                <h4>{category3}</h4>
                <Link to="/shop/29"><img src="/homepageimages/0007.jpg" alt="pancakes"></img></Link>
                <Link to="/shop/31"><img src="/homepageimages/0008.jpg" alt="bacon and eggs"></img></Link>
                <Link to="/shop/32"><img src="/homepageimages/0009.jpg" alt="coffee"></img></Link>

                <h4>{category4}</h4>
                <Link to="/shop/33"><img src="/homepageimages/0010.jpg" alt="baked beans"></img></Link>
                <Link to="/shop/34"><img src="/homepageimages/0011.jpg" alt="soup"></img></Link>
                <Link to="/shop/35"><img src="/homepageimages/0012.jpg" alt="tomato sauce"></img></Link>

                <h4>{category5}</h4>
                <Link to="/shop/36"><img src="/homepageimages/0013.jpg" alt="disposable masks"></img></Link>
                <Link to="/shop/37"><img src="/homepageimages/0014.jpg" alt="disposable gloves"></img></Link>
                <Link to="/shop/38"><img src="/homepageimages/0015.jpg" alt="lysol spray"></img></Link>

                <h4>{category6}</h4>
                <Link to="/shop/39"><img src="/homepageimages/0016.jpg" alt="mustard"></img></Link>
                <Link to="/shop/40"><img src="/homepageimages/0017.jpg" alt="ketchup"></img></Link>
                <Link to="/shop/41"><img src="/homepageimages/0018.jpg" alt="soy sauce"></img></Link>

                <h4>{category7}</h4>
                <Link to="/shop/43"><img src="/homepageimages/0019.jpg" alt="american cheese slices"></img></Link>
                <Link to="/shop/44"><img src="/homepageimages/0020.jpg" alt="milk"></img></Link>
                <Link to="/shop/45"><img src="/homepageimages/0021.jpg" alt="mozzarella cheese"></img></Link>

                <h4>{category8}</h4>
                <Link to="/shop/46"><img src="/homepageimages/0022.jpg" alt="green peas"></img></Link>
                <Link to="/shop/47"><img src="/homepageimages/0023.jpg" alt="ice cream"></img></Link>
                <Link to="/shop/49"><img src="/homepageimages/0024.jpg" alt="icies"></img></Link>

                <h4>{category9}</h4>
                <Link to="/shop/54"><img src="/homepageimages/0028.jpg" alt="bananas"></img></Link>
                <Link to="/shop/55"><img src="/homepageimages/0029.jpg" alt="orange"></img></Link>
                <Link to="/shop/56"><img src="/homepageimages/0030.jpg" alt="apple"></img></Link>

                <h4>{category10}</h4>
                <Link to="/shop/57"><img src="/homepageimages/0031.jpg" alt="ground beef"></img></Link>
                <Link to="/shop/58"><img src="/homepageimages/0032.jpg" alt="raw chicken"></img></Link>
                <Link to="/shop/59"><img src="/homepageimages/0033.jpg" alt="salmon filets"></img></Link>

                <h4>{category11}</h4>
                <Link to="/shop/51"><img src="/homepageimages/0025.jpg" alt="stapler"></img></Link>
                <Link to="/shop/52"><img src="/homepageimages/0026.jpg" alt="notebook"></img></Link>
                <Link to="/shop/53"><img src="/homepageimages/0027.jpg" alt="3 hole puncher"></img></Link>

                <h4>{category12}</h4>
                <Link to="/shop/60"><img src="/homepageimages/0034.jpg" alt="reeses"></img></Link>
                <Link to="/shop/61"><img src="/homepageimages/0035.jpg" alt="snickers"></img></Link>
                <Link to="/shop/62"><img src="/homepageimages/0036.jpg" alt="twix"></img></Link>

            </div>
        </div>
    );
}

export default Home;


{
    /* Removed to create hyperlinks 
    <h4>{category1}</h4>
                <h4><img src="/imagecollection/Slide2.jpeg"></img></h4>
                <h4>{category2}</h4>
                <h4><img src="/imagecollection/Slide1.jpeg"></img></h4>
                <h4>{category3}</h4>
                <h4><img src="/imagecollection/Slide3.jpeg"></img></h4>
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
                <h4><img src="/imagecollection/Slide4.jpeg"></img></h4> */}