import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}> 
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/groups' activeClassName={s.activeLink}>Groups</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/content' activeClassName={s.activeLink}>Content</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='news' activeClassName={s.activeLink}>News</NavLink> 
            </div>
        </nav>
    );
};

export default Navbar;