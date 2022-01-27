import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <div>
            <header className={s.header}>
                <img className={s.logo} src="https://www.svgrepo.com/show/50992/xing-logo.svg" alt="logo"/>
            </header>
        </div>
    );
};

export default Header;