import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <div>
            <nav className={s.nav}>
                <div><NavLink to='/profile' className={s.activeLink}>Profile</NavLink></div>
                <div><NavLink to='/dialogs'>Messages</NavLink></div>
                <div><NavLink to='/news'>News</NavLink></div>
                <div><NavLink to='/music'>Music</NavLink></div>
                <div><NavLink to='/settings'>Settings</NavLink></div>
            </nav>
        </div>
    );
};

export default Navbar;