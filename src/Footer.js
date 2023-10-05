import React from 'react';
import './Footer.css';

function Footer(){
    return (
        <div className = "footer">
          <div className ="footer-body">
            <div className="row">
              <ul>
                <div className="row-title">Information</div>
                <li>About Us</li>
                <li>FAQ</li>
                <li>Terms and Conditions</li>
              </ul> 
            </div>
            <div className="row">
            <ul>
              <div className="row-title">Follow Us</div>
                <li>@baron_bram</li>
                <li>@louiellywton</li>
                <li>@jowoen</li>
              </ul>
            </div>
            <div className="row">
            <ul>
              <div className="row-title">Contact Us</div>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Whats App : 08xx-xxxx-xxxx</li>
              </ul>
            </div>
          </div>
        </div>
    );
}

export default Footer;