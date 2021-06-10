import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Header.module.css';
const HeaderMenu = () =>{
    return(

        <div className={s.menu}>

        <ul>
           <NavLink to="/AskTheDoctor"><li>Հարց բժշկին</li></NavLink>
            <li>Նորություններ</li>
          <NavLink to="/Use">          <li>Ինչպես օգտվել</li></NavLink>
            <li>Մեր մասին</li>
           <NavLink to="/Cooperation"><li>Համագործակցություն</li></NavLink>
        </ul>

    </div>
    );
};



export default HeaderMenu;
