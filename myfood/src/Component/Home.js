import React from 'react';
import logo from './logo.jpeg';
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
            <img className="logo" src={logo} alt="Logo" />;
            </div>

            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;