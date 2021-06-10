import React from 'react';
import s from '../Cooperation/Cooperation.module.css';
import { useHistory } from 'react-router-dom';
import img1 from '../image/hiicon.svg'
const Cooperation = ()=>{
    const history = useHistory()
    return (
        <div className={s.registration}  >

        <div className={s.urishban} onClick={() => {
            history.goBack()
        }}>

        </div>
        <div className={s.regend}>

            <div className={s.reg2} >

                <div className={s.container}>


                        <div className={s.displayh1}>
                            <img src={img1} alt=""/>
                    <h1 className={s.logintext}>Համագործակցություն</h1>

                        </div>

                        <p className={s.pCoop}>
                        Կայքում գովազդ տեղադրելու համար կապ հաստատեք մեզ հետ
                        </p>

                        <form action="" method='post'>
                               <div className={s.Cooperationdisp}>
                            <div>
                                <p className={s.namecoop}>
                                    Անուն
                                </p>

                                <input className={s.inpcoop} type="text" placeholder='Full Name' />

                            </div>



                            <div>
                            <div>
                                <p className={s.namecoop}>
                                էլ․-հասցե
                                </p>

                                <input className={s.inpcoop} type="text" placeholder='example@gmail.com' />

                            </div>
                            </div>
                            </div>
                          <p  className={s.namecoop}>
                          Հաղորդագրություն
                          </p>

                            <textarea className={s.textmessage} name="#" id="" cols="45" rows="7" placeholder='Գրեք ձեր նամակն այստեղ'>

                            </textarea>

                            <button className={s.buttoncoop} type='submit'>
                                Ուղարկել
                            </button>
                        </form>



                    </div>
                </div>
            </div>
        </div>

    )
}


export default Cooperation;
