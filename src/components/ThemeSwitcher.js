import React, { useState, useEffect } from 'react';
import Icon from "./Icon";

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark-theme');
        } else {
            document.documentElement.classList.remove('dark-theme');
        }
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark-theme');
        } else {
            document.documentElement.classList.remove('dark-theme');
        }
    }, [theme]);

    return (
        <div className="theme-switcher">
            <button className={theme === 'light' ? 'active' : ''} onClick={() => toggleTheme('light')}>
                <Icon name="light-theme" />
            </button>
            <button className={theme === 'dark' ? 'active' : ''} onClick={() => toggleTheme('dark')}>
                <Icon name="dark-theme" />
            </button>
        </div>
    );
};

export default ThemeSwitcher;
