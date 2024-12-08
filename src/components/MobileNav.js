import React from "react";
import {ButtonLink} from "./Button";
import {useTranslation} from "react-i18next";

const MobileNav = ({isOpen, toggleNav}) => {
    const { t } = useTranslation();

    return (
        <div className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`} onClick={toggleNav}>
            <ul className="mobile-nav__list">
                <li className="mobile-nav__item">
                    <a href="#home" className="mobile-nav__item-link">{t('headerNavHome')}</a>
                </li>
                <li className="mobile-nav__item">
                    <a href="#about" className="mobile-nav__item-link">{t('headerNavAbout')}</a>
                </li>
                <li className="mobile-nav__item">
                    <a href="#works" className="mobile-nav__item-link">{t('headerNavWorks')}</a>
                </li>
                <li className="mobile-nav__item">
                    <a href="#contact" className="mobile-nav__item-link">{t('headerNavContact')}</a>
                </li>
            </ul>
            <ButtonLink href={'#'} className='btn--contact-mobile btn--hover-blight-dark'>
                {t('headerBtnContact')}
            </ButtonLink>
        </div>
    )
}

export default MobileNav;