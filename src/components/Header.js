import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"


function Header() {
    return (

        <div className='header'>
            <Link className="/">
                <img className='header_logo' src={require('../images/clgLogo.png')} alt='logo' />
            </Link>
            <div style={{ paddingRight: "20px", paddingTop: "15px" }}>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>BCIIT</Link>
            </div>

            {/* <div className='links'>
                <Link to="/blog" style={{ color: "white", textDecoration: "none" }}>Blog</Link>
            </div> */}

            {/* <div className='links'>
                <Link to="/contact" style={{ justifyContent: "space-evenly", color: "white", textDecoration: "none" }}>
                    Contact
                </Link>
            </div> */}

            <div className='links'>
                <Link to="/about" style={{ justifyContent: "space-evenly", color: "white", textDecoration: "none" }}>
                    About
                </Link>
            </div>

        </div >


    )
}

export default Header;