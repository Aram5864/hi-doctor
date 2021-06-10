import React from 'react';
import s from '../Header.module.css';

const HeaderRegistration = ({ setRegModal, setLoginModal, user, message, statusType }) => {

    const openLoginModal = () => {
        setRegModal(false);
        setLoginModal(true);
    }

    const openRegModal = () => {
        setLoginModal(false);
        setRegModal(true);
    }

    const typeImg = `user/default.png`;

    return (
        <>
            {user === null ?
                <div className={s.reg}>
                    <ul>
                        <li onClick={openLoginModal}>Մուտք</li>
                        <li onClick={openRegModal}>Գրանցվել</li>
                    </ul>
                </div>
                :
                <div className={s.userInfo}>
                    <img src={typeImg} alt=""/>
                    <span>{`${user.name} ${user.lastName}`}</span>
                </div>
            }
        </>
    );
};


export default  HeaderRegistration;
