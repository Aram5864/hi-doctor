import React from 'react';
import s from '../SlideShow/SlideShow.module.css';
import Gov from '../Govazd/Gov'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const Slideshow = () => {
   return (
      <div className = {s.margin}>
         <Slide easing="ease" className={s.slidewidth}>


            <div className={s.each}>


               <div className={s.chap} >  </div>

               <div className={s.slidetexth1}>
               <h1>
                     Lorem ipsum dolor sit amet, consetetur
                 </h1>
                  <p className={s.p}>
                     05.02.2020
                 </p>
                  <div className={s.border}>

                  </div>

                  <p className={s.p2}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br/>
                  nonumy eirmod tempor invidunt ut labore et dolore magna <br/>
                  aliquyam erat, sed diam voluptua. <br/><br/>
                  
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum <br/>
                  dolor sit.
                  </p>
               </div>


            </div>



            

            <div className={s.each}>


               <div className={s.chap2}></div>

               <div className={s.slidetexth1}>
               <h1>
                     Lorem ipsum dolor sit amet, consetetur
                 </h1>
                  <p className={s.p}>
                     05.02.2020
                 </p>
                  <div className={s.border}>

                  </div>

                  <p className={s.p2}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br/>
                  nonumy eirmod tempor invidunt ut labore et dolore magna <br/>
                  aliquyam erat, sed diam voluptua. <br/><br/>
                  
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum <br/>
                  dolor sit.
                  </p>
               </div>

            </div>





            <div className={s.each}>


               <div className={s.chap3} >  </div>
               <div className={s.slidetexth1}>
                  <h1>
                     Lorem ipsum dolor sit amet, consetetur
                 </h1>
                  <p className={s.p}>
                     05.02.2020
                 </p>
                  <div className={s.border}>

                  </div>

                  <p className={s.p2}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br/>
                  nonumy eirmod tempor invidunt ut labore et dolore magna <br/>
                  aliquyam erat, sed diam voluptua. <br/><br/>
                  
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum <br/>
                  dolor sit.
                  </p>
               </div>
            </div>


         </Slide>
         <Gov/>
      </div>
   )
}

export default Slideshow;