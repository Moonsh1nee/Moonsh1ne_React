import React from 'react';
import MobileNav from "./MobileNav";
import {ButtonLink} from "./Button";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from 'react-i18next';
import ThemeSwitcher from "./ThemeSwitcher";


const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

    const { t } = useTranslation();

    const togleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
        document.body.classList.toggle('no-scroll');
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <a href="/Moonsh1ne_React/" className="header__wrapper-logo logo">
                        <div className="logo__short">M</div>
                        <div className="logo__full">Moonsh1ne</div>
                    </a>

                    <nav className="header__wrapper-nav nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__item-link">{t('headerNavHome')}</a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__item-link">{t('headerNavAbout')}</a>
                            </li>
                            <li className="nav__item">
                                <a href="#works" className="nav__item-link">{t('headerNavWorks')}</a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__item-link">{t('headerNavContact')}</a>
                            </li>
                        </ul>
                    </nav>


                    <div className="header__btn-wrapper">
                        <ButtonLink href={'#'} className='btn--contact btn--bounce-left btn--hover-blight-dark'>
                            {t('headerBtnContact')}
                        </ButtonLink>

                        <div className="header__btn-switcher">
                            <LanguageSwitcher />
                            <ThemeSwitcher />
                        </div>

                        <button className="mobile-nav-btn"
                                onClick={togleMobileNav}
                                aria-expanded={isMobileNavOpen}>
                            <div className={`nav-icon ${isMobileNavOpen ? 'nav-icon--active' : ''}`}></div>
                        </button>
                    </div>
                </div>
            </div>
            <MobileNav isOpen={isMobileNavOpen} toggleNav={togleMobileNav}/>
        </header>
    )
};

export default Header;