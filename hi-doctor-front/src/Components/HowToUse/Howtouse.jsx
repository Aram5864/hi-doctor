import React from 'react';
import s from '../HowToUse/Howtouse.module.css';
import img3 from '../../image/icon3.png';
import img1 from '../../image/icon1.png';
import img2 from '../../image/icon2.png';
import Gov2 from '../Govazd/Gov2'
const Howtouse = ()=>{
    return(
        <div className = {s.container}>
              <div className = {s.displaygov2}>


              <div>
                    <h1 className = {s.h1}>
                    Ինչպես օգտվել
                    </h1>

                    <div className = {s.img_control}>                        
                        <img src={img3} alt="img3"/>
                        <img src={img1} alt="img1"/>
                        <img src={img2} alt="img2"/>

                    </div>
                       <div className = {s.disp}>
                          <div className = {s.text1}>
                        <p>Ուղարկիր քո հարցը բժշկի</p>
                          </div>
                          <div className = {s.text1}>
                        <p>Ստացիր մասնագիտացված պատասխան</p>
                          </div> 
                          <div className = {s.text1}>
                        <p>Գնահատիր խորհրդատվությունը</p>
                          </div>
                       </div>

                       <p className ={s.imgset}>
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum <br/>
                dolor sit. <br/>
                Ubergren, no sea takimata sanctus est Lore
                </p>

                <div className = {s.forme}>
                    <h3>
                    Մեր մասին
                    </h3>
                    <div className ={s.gic}>

                    </div>


                    <div>
                        <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  <br/>
                        nonumy eirmod tempor invidunt ut labore et dolore magna  <br/>
                        aliquyam erat, sed diam voluptua. 
<br/>
<br/>

                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum <br/>
                        dolor sit.
                        </p>
                    </div>

              </div>






              </div>
                                         <Gov2/>

                 



            


                 

       
                </div>
        </div>
    )
}

export default Howtouse;