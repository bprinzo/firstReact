import React from 'react'
import {Link} from 'react-router-dom'
 
export default props =>
    <ul className="menu">
        <li><a>SCANNERS</a></li>
        <li><a>TOOLS</a></li>
        <li><a>RESEARCH</a></li>
        <li><a>SERVICES</a></li>
        <li><a>ABOUT</a></li>
        <li><a>EMAIL</a></li>
        <li><a id="price">PRICING</a></li>
        <Link to="/login">
        <li><a id='log'>LOG IN</a></li>
        </Link>
    </ul>