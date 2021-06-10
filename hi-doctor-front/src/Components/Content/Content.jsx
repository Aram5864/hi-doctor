import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Content/Content.module.css'

const Content = () =>{
    return(
        <div className ={s.content}>
            <div className ={s.container}>

                <div className ={s.texth1}>


                     <h1>Բարև բժիշկ</h1>

                     <div className ={s.border}>

                     </div>

                     <div className ={s.text}>
                        <p>

                        Սա հարթակ է, որտեղ դու կարող ես ․․․ 
                        
                        Lorem ipsum dolor sit amet, consetetur 
                        sadipscing elitr, sed diam nonumy eirmod tempor 
                        invidunt ut labore et dolore magna aliquyam erat, 
                        sed diam voluptua. Lorem ipsum dolor sit amet, 
                        consetetur sadipscing elitr, sed diam nonumy 
                        eirmod tempor invidunt ut labore et dolore 
                        magna aliquyam erat, sed diam voluptua.
                        
                        </p>
                     </div>

                        <div className ={s.button}>

                            <NavLink to = '/AskTheDoctor/1'>
                               Հարց բժշկին
                            </NavLink>
                        
                        </div>

                </div>



            </div>
        </div>


    )
}


export default Content;
