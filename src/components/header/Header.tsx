import React from 'react';
import {NavLink} from "react-router-dom";
import {AuthUserData} from "../../redux/auth-reducer";



const Header: React.FC<AuthUserData> = (props:AuthUserData) => {
    return (
        <header className='header'>
            <img src=''/>
            <div>
                {props.isAuth ? props.login
                :<NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;