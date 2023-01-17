import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./Header.css"


function Header() {
    return (

        <div className='header'>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                <div style={{ display: "flex" }}>
                    <img className='header_logo' src={require('../images/clgLogo.png')} alt='logo' />

                    {/* <div className='logo_name'> */}
                    <h4 style={{ paddingTop: "18px" }}> BCIIT</h4>
                    {/* </div> */}
                </div>
            </Link>

            <div className='blog'>
                <Link to="/blog" style={{ color: "white", textDecoration: "none" }}>Blog</Link>

            </div>
            <div className='contact'>
                <Link to="/contact" style={{ justifyContent: "space-evenly", color: "white", textDecoration: "none" }}>
                    <h5>Contact</h5>
                </Link>
            </div>
            <div className='about'>
                <h5>About</h5>
            </div>
        </div>


    )
}

export default Header;