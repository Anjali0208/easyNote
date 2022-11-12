import React from 'react'
import "./Header.css"


function Header() {
    return (
        <>
            <div className='header'>

                <img className='header_logo' src={require('../images/clgLogo.png')} alt='logo' />

                <div className='logo_name'>
                    <h3> BCIIT</h3>
                </div>
                <div className='blog'>
                    <h4>Blog</h4>
                </div>
                <div className='contact'>
                    <h4>Contact</h4>
                </div>
                <div className='about'>
                    <h4>About</h4>
                </div>
            </div>
            {/* <Banner /> */}
            {/* <Headline /> */}
        </>
    )
}

export default Header;