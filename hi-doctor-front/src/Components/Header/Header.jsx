import React from 'react';
import s from '../Header/Header.module.css';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderMenu from '../Header/HeaderMenu/Header.menu';
import HeaderRegistration from '../Header/HeaderRegistration/HeaderRegistration';

const Header = ({ setRegModal, setLoginModal, user }) => {

    return (
        <div className={s.Header}>
            <div className={s.container}>
                <HeaderLogo />
                <HeaderMenu />
                <HeaderRegistration
                    setRegModal={setRegModal}
                    setLoginModal={setLoginModal}
                    user={user}
                />
            </div>
        </div>
    )
}

export default Header;
