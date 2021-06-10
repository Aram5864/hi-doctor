import React, {useEffect, useState} from 'react';
import s from '../Login/Login.module.css';
import PasswordShowHide from '../Registration/PasswordShowHide/Password'
import { useDispatch } from 'react-redux';
import {login} from "../../store/actions/auth.action";

const Login = (props) => {
    const dispatch = useDispatch();

    const [emailChange, setEmailChange] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [passwordChange, setPasswordChange] = useState('');
    const [passwordError, setPasswordError] = useState(null);

    useEffect(() => {
        if(props.statusType === 'LOGIN') {
            props.setLoginModal(false);
        }
    }, [props.statusType])

    const inputBlur = e => {
        if(e.target.value.length > 0) {
            setEmailChange(e.target.value)
        } else {
            setEmailChange('')
        }
    }

    const logIn = () => {
        if(emailChange.length > 0 && passwordChange.length > 0) {
            setEmailError(null)
            setPasswordError(null)
            dispatch(login( {email: emailChange, password: passwordChange} ));

        } else {
            if(emailChange === '') {
                setEmailError('Required')
            } else {
                setEmailError(null)
            }
            if(passwordChange === '') {
                setPasswordError('Required')
            } else {
                setPasswordError(null)
            }
        }
    }

    return (
        <>
            {props.loginModal
                &&
                <div className={s.registration}>
                <div className={s.urishban} onClick={() => props.setLoginModal(false) }></div>
                <div className={s.regend}>
                    <div className={s.reg2}>
                        <div className={s.container}>

                            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                <h1 className={s.logintext}>Մուտք</h1>
                                <span className={s.closeModal} onClick={() => props.setLoginModal(false) }>X</span>
                            </div>
                            <form action="/" method="post" className={s.form}>
                                <div className={s.formDiv}>
                                    <input
                                        name='email'
                                        type="email"
                                        id='email'
                                        className={s.inputBorder1}
                                        onBlur={(event) => inputBlur(event) }
                                    />
                                    <label htmlFor="email" className={`${s.label} ${emailChange ? s.focus : ''}`}>էլ․-հասցե*</label>
                                    {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
                                </div>
                                <PasswordShowHide
                                    password={passwordChange}
                                    setPasswordChange={setPasswordChange}
                                    passwordError={passwordError}
                                    title={'Գաղտնաբառ'}
                                />
                                {props.statusType === 'not login' ?
                                    props.message && <span style={{ color: 'red' }}>{props.message}</span>
                                    : props.statusType === 'login' ?
                                        props.message && <span>{props.message}</span>
                                        : ''
                                }
                                <div className={s.contentFlex}>
                                    <div>
                                        <input id='a' className={s.check} type="checkbox"/>
                                        <label className={s.check} htmlFor="a"> <span>Մնալ համակարգում</span></label>
                                    </div>
                                    <a href="#" className={s.check2}>Մոռացել եմ գաղտնաբառը</a>
                                </div>
                                <button type='button'
                                        className={s.butlogin}
                                        onClick={logIn}
                                >
                                    Մուտք
                                </button>

                            </form>

                        </div>
                        <div className={s.regLogIn}>
                        <a href="" className={s.regLog}>Գրանցվիր</a> <p>եթե նոր օգտատեր ես</p>

                        </div>

                    </div>
                </div>
            </div>
            }
        </>
    )
};

export default Login;
