import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return ( 
        <div className='Navbar'>
            <div className='Logo'>
                <h1>Kotak.</h1>
            </div>
        <nav>
        <ul>
            <li><a herf="#">About Us</a></li>
            <li><Link to='/hiring'>Hirings</Link></li>
            <li><a herf="#">Contact Us</a></li>
        </ul>
        </nav>
       <Link to='/signup' status={100}> <button  onclick="location.href='https://github.com/Auleen/Kafka'">Login</button></Link>


        </div>
     );
}

export default Navbar;