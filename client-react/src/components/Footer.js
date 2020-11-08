import React from 'react'
import ReactDOM from 'react-dom';



 function Footer() {
    return (
        <div className="footer">
        <div className="container">
        <div className="row">
        {/* Column 1 */}
        <div className="col-md-3 col-sm-6">
        <h4></h4>
        <ul>
            <li>Contact Us at:  1-800-7SC-SHOP</li>
            <li>WWW.SELECTCHOICE.COM</li>
        </ul>      
        </div>

        {/* Column 2 */}
        <div className="col-md-3 col-sm-6">
        <h4></h4>
        <ul>
            <li>https://twitter.com/SelectChoice</li>
            <li>https://www.linkedin.com/in/SC/</li>
        </ul>      
        </div>

        {/* Column 2 */}
        <div className="col-md-3 col-sm-6">
        <h4></h4>
        <ul>
            <li>https://instagram.com/SelectChoice</li>
            <li>https://www.facebook.com/in/SC/</li>
        </ul>      
        </div>
        </div>
        </div>    
        </div>
    );
}

export default Footer;
