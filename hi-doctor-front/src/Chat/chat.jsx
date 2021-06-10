import React from 'react';
import s from '../Chat/chat.module.css';
import imgMass from '../image/mass.png';
import imgMass2 from '../image/mass2.png';
import imgMass3 from '../image/mass3.png';
import Gov from '../Components/Govazd/Gov';
import Chatheader from '../Chat/chatHeader/chatheader';


const Chat =()=>{
   return (
   
   <div className={s.chatBigbox}>
       <div className={s.container}>


               
       <Chatheader/>



       </div> 
    </div>
    )
}



export default Chat;