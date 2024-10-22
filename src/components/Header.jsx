import Logo from '../assets/Logo.svg';
import Hamburger from '../assets/Hamburger.svg';
import Nav from "./Nav";
import React, { useState } from 'react';

function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible);
    };
    return (
        <header>
            <div className="container">
                <div className="header__content flex">
                    <a href="#" className='header__logo'>
                        <img src={Logo} alt="Restaurant logo" />
                    </a>
                    <Nav isVisible={isNavVisible}></Nav>
                    <div className="header__button" onClick={toggleNavVisibility}>
                        <img src={Hamburger} alt="" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;