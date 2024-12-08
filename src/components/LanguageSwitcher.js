import React from 'react';
import {useTranslation} from 'react-i18next';

const LanguageSwitcher = () => {
    const {i18n} = useTranslation();
    const [activeLang, setActiveLang] = React.useState(i18n.language);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setActiveLang(lng);
    };

    return (
        <div className="lang-switcher">
            <button className={activeLang === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')}>EN</button>
            <button className={activeLang === 'ru' ? 'active' : ''} onClick={() => changeLanguage('ru')}>RU</button>
        </div>
    );
};

export default LanguageSwitcher;
