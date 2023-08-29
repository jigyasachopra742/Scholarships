import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
    <>
        <nav className='navbar'>
            <div className='nav-container'>
                <Link to="/" className='nav-logo'>Scholarships</Link>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link 
                            to="/contact" 
                            activeClassName="active" 
                            className='nav-links' 
                            onClick={handleClick}
                        >
                            CONTACT
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link 
                            to="/about"
                            activeClassName="active" 
                            className='nav-links' 
                            onClick={handleClick}
                        >
                            About
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link 
                            to="/"
                            activeClassName="active" 
                            className='nav-links' 
                            onClick={handleClick}
                        >
                            Home
                        </Link>
                    </li>
                
                </ul>

                <div className='nav-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : "fa-regular fa-bars"}></i>
                </div>
            
            </div>
        </nav>
    </>
  )
}

export default Navbar