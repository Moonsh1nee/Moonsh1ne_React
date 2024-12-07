import React from "react";

const MobileNav = ({isOpen, toggleNav}) => (
    <div className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`} onClick={toggleNav}>
        <ul className="mobile-nav__list">
            <li className="mobile-nav__item">
                <a href="#home" className="mobile-nav__item-link">Home</a>
            </li>
            <li className="mobile-nav__item">
                <a href="#about" className="mobile-nav__item-link">About</a>
            </li>
            <li className="mobile-nav__item">
                <a href="#works" className="mobile-nav__item-link">Works</a>
            </li>
            <li className="mobile-nav__item">
                <a href="#contact" className="mobile-nav__item-link">Contact</a>
            </li>
        </ul>
    </div>
);

export default MobileNav;