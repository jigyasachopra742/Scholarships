import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClick = () => {
        setMenuOpen(!menuOpen);
    }
    return (
    <>
        <nav>
            <Link to="/" className='nav-title'>Scholarships</Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
                <ul className={menuOpen ? "open active" : ""}>
                    {/* <li>
                        <Link 
                            to="/contact"
                            onClick={handleClick} 
                        >
                            Contact
                        </Link>
                    </li> */}

                    <li className='nav-item'>
                        <Link 
                            to="/about"
                            onClick={handleClick} 
                        >
                            About
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link 
                            to="/contactus"
                            onClick={handleClick} 
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link 
                            to="/feedback"
                            onClick={handleClick} 
                            
                        >
                            FeedBack
                        </Link>
                    </li>

                    <li>
                        <Link 
                            to="/"
                            onClick={handleClick} 
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link 
                            to="/all_scholarships"
                            onClick={handleClick} 
                        >
                            All Scholarships
                        </Link>
                    </li>
                
                </ul>
        </nav>
    </>
  )
}

export default Navbar