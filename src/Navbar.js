import React from "react";
import './Navbar.css';
import log from './images/log.jpg';
function Navbar()
{
    return(
        
        <header><nav className="nav">
                <img  className="logo" src={log} alt=" np"/> <p style={{color:'grey'}}>No.1 TAMILNADU HOLLOW BLOCKS</p>
            
            <ul className="nav-items">
            <li><a href="https://www.w3schools.com">ABOUT US</a></li>
            <li><a href="https://www.w3schools.com">PRODUCTS</a></li>
            <li><a href="https://www.w3schools.com">QUERIES</a></li>
            <li><a href="https://www.w3schools.com">QUOTATION</a></li>
            </ul>
            <ul className="login">
                <li> <a href="https://www.w3schools.com">Get Constructed </a></li>
            </ul>
            </nav>
            </header>
    )
}

export default Navbar;