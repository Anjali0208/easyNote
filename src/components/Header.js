import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./Header.css"


function Header() {
    return (

        <div className='header'>
            <Link className=''>
                <img className='header_logo' src={require('../images/clgLogo.png')} alt='logo' />
            </Link>
            <div style={{ paddingRight: "20px", paddingTop: "15px" }}>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>BCIIT</Link>
            </div>


            <div className='links'>
                <Link to="/blog" style={{ color: "white", textDecoration: "none" }}>Blog</Link>
            </div>

            <div className='links'>
                <Link to="/contact" style={{ justifyContent: "space-evenly", color: "white", textDecoration: "none" }}>
                    Contact
                </Link>
            </div>

            <div className='links'>
                <Link to="/about" style={{ justifyContent: "space-evenly", color: "white", textDecoration: "none" }}>
                    About
                </Link>
            </div>






            {/* <Link to="/" className='link'>
                <div style={{ fontsize: "800px" }}>
                    <img className='header_logo' src={require('../images/clgLogo.png')} alt='logo' />
                    BCIIT
                </div>
            </Link> */}

            {/* <div className='blog'>
                <Link to="/blog" style={{ color: "white", textDecoration: "none" }}>Blog</Link>

            </div>
            <div className='contact'>
                <Link to="/contact" style={{ justifyContent: "space-evenly", color: "white", textDecoration: "none" }}>
                    <h5>Contact</h5>
                </Link>
            </div>
            <div className='about'>
                <h5>About</h5> */}
            {/* </div> */}


        </div >


    )
}

export default Header;