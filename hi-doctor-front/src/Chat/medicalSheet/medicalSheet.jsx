import React from 'react';
import s from '../medicalSheet/medicalSheet.module.css'
import Card from '../drop/Drop'
import Chatheader from '../chatHeader/chatheader'
import ChatHeader from '../chatHeader/chatheader';
const MedicalSheet = ()=>{
    return(
   
<div className={s.chatBigbox}>
       <div className={s.container}>

                    <ChatHeader/>
            
            <div>
                <h1 className ={s.texth1}>
                    D.USE OF CREDIT BUREAU
                </h1> <br/>
                <p className={s.text1}>
                1. Liberty will approach a dedicated Credit Reference Agency for a credit report on the Applicant in considering any application for credit. <br/>
                2. The Borrower authorizes the Bank to access any information available to it as provided by the Credit Agency. <br/>
                3. The Borrower also agrees that his/her details and the loan application decision will be registered with the Credit Agency.br <br/>
                </p>
            </div> <br/>


<form action="">


    <div className={s.bigBoxRadioinput}>
        {/* box1 */}
        <div className={s.big}>
        <p className={s.textinput}>
          Արյան խումբ
      </p> <br/>
      <div className={s.radioInput}>
      <input type="radio" name="1" id="1"/>
      <label className={s.textlabel}  htmlFor="1">1</label>
      <input type="radio" name="1" id="2"/>
      <label className={s.textlabel} htmlFor="2">2</label>
      <input type="radio" name="1" id="3"/>
      <label className={s.textlabel} htmlFor="3">3</label>
      <input type="radio" name="1" id="4"/>
      <label className={s.textlabel} htmlFor="4">4</label>
      </div>


      <br/>
     <p className={s.textinput}>
        Քաշ
    </p>

    <input className={s.inputkg}  type="num" name="" id=""/> 
    <span className={s.kg}>կգ</span>
        </div>
      {/* box2 */}

      <div className={s.big}>
        <p className={s.textinput}>
          Արյան խումբ
      </p> <br/>
      <div className={s.radioInput}>
      <input type="radio" name="name" id="drakan"/>
      <label className={s.textlabel2} htmlFor="drakan">Դրական</label>
      <input type="radio" name="name" id="bacasakan"/>
      <label className={s.textlabel2} htmlFor="bacasakan">Բացասական</label>
      </div>


      <br/>
     <p className={s.textinput}>
        Հասակ
    </p>

    <input className={s.inputkg}  type="num" name="" id=""/> 
    <span className={s.kg}>սմ</span>


    
        </div>

   


    </div>
     <br/>





  <div>
     <p> 
         կայքի անամեզ
         </p>  <Card/>

  </div> 



</form>
</div>
</div>
    )
}


export default MedicalSheet;

