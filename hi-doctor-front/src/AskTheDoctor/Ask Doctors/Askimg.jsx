import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../image/message.png';
import s from '../Ask Doctors/Askimg.module.css'


const Comp = (props) => {

        return (
                <div className={s.img_set}>
                        <div className={s.img1}>
                               <NavLink to="/chat"> <img className={s.hover} width='30px' height='30px' src={img} alt="" /></NavLink>
                                <p>{props.name}</p>
                                
                        </div>
                </div>
        );
};


const Doctors = (props) => {
        return (
                <div className = {s.img_set}>
                        <Comp name='Ալերգոլոգ' />
                        <Comp name='Ախտաբան' />
                        <Comp name='Ակնաբույժ' />
                        <Comp name='Անեսթեզիոլոգ- ռեանիմատոլոգ' />
                        <Comp name='Արյունաբան' />

                        <Comp name='Բակտերիոլոգ' />
                        <Comp name='Բժիշկ-լաբորանտ' />
                        <Comp name='Բժիշկ-կոսմետոլոգ' />
                        <Comp name='Գաստրոէնտերոլոգ, Լյարդաբան' />
                        <Comp name='Գենետիկ' />

                        <Comp name='Գինեկոլոգ' />
                        <Comp name='Էմբրիոլոգ' />
                        <Comp name='Էնդոկրինոլոգ' />
                        <Comp name='Էնդոսկոպիստ' />
                        <Comp name='Ընտանեկան բժիշկ' />

                        <Comp name='Թերապևտ' />
                        <Comp name='Թմրաբան' />
                        <Comp name='Թոքաբան' />
                        <Comp name='Լոգոպեդ' />
                        <Comp name='Կինեզիոլոգ' />

                        <Comp name='Վարակաբան, Համաճարակաբան' />
                        <Comp name='Հոգեբան' />
                        <Comp name='Հոգեբույժ' />
                        <Comp name='Ճառագայթաբան' />
                        <Comp name='Մանկաբույժ' />

                        <Comp name='Մանուալ թերապևտ' />
                        <Comp name='Մաշկաբան- վեներոլոգ' />
                        <Comp name='Նեոնատոլոգ' />
                        <Comp name='Նեֆրոլոգ' />
                        <Comp name='Նյարդաբան' />

                        <Comp name='Նյարդավիրաբույժ' />
                        <Comp name='Ուռուցքաբան' />
                        <Comp name='Ուրոլոգ' />
                        <Comp name='Պոդոլոգ' />
                        <Comp name='Պրոկտոլոգ' />

                        <Comp name='Ռեաբիլիտոլոգ' />
                        <Comp name='Ռեֆլեքսոթերապևտ' />
                        <Comp name='Ռևմատոլոգ' />
                        <Comp name='Սեքսոպաթոլոգ' />
                        <Comp name='Սննդաբան' />

                        <Comp name='Ստոմատոլոգ' />
                        <Comp name='Սրտաբան' />
                        <Comp name='Վիրաբույժ (անոթային' />
                        <Comp name='Վիրաբույժ (դիմածնոտային)' />
                        <Comp name='Վիրաբույժ (ընդհանուր)' />

                        <Comp name='Վիրաբույժ (կրծքային)' />
                        <Comp name='Վիրաբույժ (մանկական)' />
                        <Comp name='Վիրաբույժ (պլաստիկ)' />
                        <Comp name='Վիրաբույժ (սիրտանոթային)' />
                        <Comp name='Վնասվածքաբան- օրթոպեդ' />

                        <Comp name='Օտորինոլարինգոլոգ (ԼՕՌ)' />
                        <Comp name='Ֆիզիոթերապևտ' />



                </div>


        )
}



export default Doctors;