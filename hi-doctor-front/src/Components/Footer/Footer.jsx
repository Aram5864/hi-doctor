import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Footer/Footer.module.css';
import img1 from '../../image/facebook.png';
import img2 from '../../image/instagram.png';
import img3 from '../../image/twitter.png';

const Footer = () => {
    return (
        <div className={s.FooterContainer}>

            <div className={s.container}>

                <div className={s.logo}>

                    <p className={s.logo1}>
                        hi
                    </p>

                    <p className={s.logo2}>
                        doctor
                    </p>


                   
                </div> 
                
                    <div className={s.gic}>

                    </div>


<div className ={s.footerDisplay}>
     <div className ={s.mailTel}>
                    <div className = {s.mail}>
                      <p>
                          էլ․-հասցե:
                      </p>   
                      <a href="mailto:info@hidoctor.net">info@hidoctor.net</a>
                    </div>


                    <div className ={s.tel}>
                      <p>
                    Հեռ․: +37455 555555
                        
                      </p>  
                    
                    </div>  
                    <div>
                        <p className = {s.tel2}>
                          +37444 444444   
                     </p> 
                    </div>
               </div>
                   

    <div className ={s.footer2}>
     <NavLink to ='/AskTheDoctor'>Հարց բժշկին</NavLink>
   
    <div className ={s.footertextcontrol}>
     <NavLink to ='/Use'>Օգտագործման դրույթներ</NavLink> 
    </div>
              <div className ={s.footertextcontrol}>
     <NavLink to ='/AskTheDoctor'>Գաղտնիության քաղաքականություն</NavLink> 
    </div>
               
               
    </div>
                  </div> 


                    <div className={s.gic2}>

                    </div>
           

           <div className ={s.facebooklogo}>
                   <a target ='NewPage1' href="https://www.facebook.com/"> <img src={img1} alt="img1"/></a>
                   <a target ='NewPage2' href="https://www.instagram.com/?hl=ru"> <img src={img2} alt="img2"/></a>
                   <a target ='NewPage3' href="https://twitter.com/?lang=ru"> <img src={img3} alt="img3"/></a> 
           </div>


           <div className ={s.verj}>
               <p>
               © 2020 hidoctor, Բոլոր իրավունքները պաշտպանված են։
               </p>
           </div>
            </div>
        </div>

    );
};



export default Footer;