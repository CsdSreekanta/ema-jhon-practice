import React from 'react';
import logo from'../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header-container'>
                <img src={logo} alt="" />
                <div className='header'>
                    <a href="/Shop">Shop</a>
                    <a href="/order">Order</a>
                    <a href="/services">Services</a>
                    <a href="contact">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Header;