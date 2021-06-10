import React from 'react';
import {NavLink} from 'react-router-dom';
import s from '../Header.module.css';

const HeaderLogo = () => {
    return (
        <NavLink to="/" className={s.Navborder}>
            <div className={s.logo}>
                <p className={s.logo1}>
                    hi
                </p>
                <p className={s.logo2}>
                    doctor
                </p>
            </div>
        </NavLink>
    );

};


export default HeaderLogo;