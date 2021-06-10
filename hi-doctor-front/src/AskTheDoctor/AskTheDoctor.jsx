import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../AskTheDoctor/AskTheDoctor.module.css';
import Header from '../Components/Header/Header';
import Doctors from './Ask Doctors/Askimg';




const AskTheDoctor = () => {
  return (
    <div className={s.AskTheDoctor}>
      <div className={s.container}>
        {/* <Header /> */}
        <p className={s.text}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut.
        </p>

        <Doctors />
        



      
      </div>
    </div>
  );
};

export default AskTheDoctor;