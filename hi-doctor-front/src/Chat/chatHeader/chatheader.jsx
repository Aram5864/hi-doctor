import React from 'react';
import s from '../chatHeader/chatheader.module.css';
import imgMass from '../../image/mass.png';
import imgMass2 from '../../image/mass2.png';
import imgMass3 from '../../image/mass3.png';
import Gov from '../../Components/Govazd/Gov';






const ChatHeader =()=>{
    return(
        <div className={s.mass}>

        <div className={s.hovver}>
             <img src={imgMass} alt="" />
 
             <p>
             Նամակագրություն
             </p>
        </div>
 
 
   <a href="/medicalSheet">
   <div className={s.hovver}>
             <img src={imgMass2} alt=""/>
 
             <p>
             Բժշկական թերթիկ
             </p>
        </div>
 
   </a>
          
       
 
 
        
 
       <a href="/Personalinformation">
       <div className={s.hovver}>
             <img src={imgMass3} alt=""/>
                 
             <p>
             Անձնական տվյալներ
             </p>
        </div>
       </a>
        
 
        <div className={s.gov}>
            <Gov/>
        </div>
            
 
         </div>
    )
}
      

        
export default  ChatHeader