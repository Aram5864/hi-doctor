import React from 'react';
import s from '../Personalinformation/Personalinformation.module.css'
import Chatheader from '../chatHeader/chatheader'
import img1 from '../../image/creatphoto.png'

const Personalinformation =()=>{
    return(

             <div className ={s.PiBigbox}>
                 <div className={s.container}>
                 <Chatheader/>

        <input type="file" id="imgupload" className={s.imgupload}/>
        
        <label htmlFor="imgupload">

        <div className={s.imgbox}>
            <img src={img1} alt=""/>
        </div>
        </label>

        <form action="">
            <div className={s.inputbigbox}>

        {/* box1 */}
                <div className={s.inputbox}>


                <div>
                <p className={s.textinp}> Անուն</p>
                <input className={s.inp} type="text"/>
                </div>
               
                <div>
                <p className={s.textinp}>Սեռ</p>
                <select className={s.inp}   name="hero">
               
                    <option value="t1" selected>Արական</option>
                    <option value="t2">Իգական</option>
                </select>
                </div>
                
                <div>
                <p className={s.textinp}>Կոնտակտային հեռախոսահամար</p>
                <input className={s.inp} type="number" placeholder='+374 55020202'/>
                </div>
                
                </div>

     {/* box2 */}
                <div className={s.inputbox2}>

                <div>
                  <p className={s.textinp}> Ազգանուն</p>
                  <input className={s.inp} type="text"/>
                </div>
           

                <div>
                  <p className={s.textinp}>Տարիք</p>
                  <input className={s.inp} type="date"/>
                </div> 
                
                <div>
                  <p className={s.textinp}>Էլ.հասցե</p>
                  <input className={s.inp} placeholder='example@gmail.com' type="email"/>
                </div>

                </div>



      {/* box3 */}



        <div className={s.inputbox3}>
                <div>
                  <p className={s.textinp}> Գաղտնաբառ</p>
                  <input className={s.inp} type="password"/>
                </div>
           

              


        </div>
            </div>



            <div  className={s.submit}>
         <button type="reset"  className={s.butt1}>Չեղարկել</button>
         <button type="submit"  className={s.butt2}>Պահպանել</button>
         </div>



        </form>


















                 </div>
            </div>
       
    
    )
}


export default Personalinformation; 