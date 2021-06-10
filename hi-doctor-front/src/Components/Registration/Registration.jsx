import React, {useEffect, useState} from 'react';
import s from '../Registration/Registration.module.css';
import PasswordShowHide from './PasswordShowHide/Password';
import {useDispatch} from "react-redux";
import {register} from "../../store/actions/auth.action";

const Registration = (props) => {
    const dispatch = useDispatch();

    const [emailChange, setEmailChange] = useState('');
    const [nameChange, setNameChange] = useState('');
    const [lastNameChange, setLastNameChange] = useState('');
    const [genderChange, setGenderChange] = useState('');
    const [telChange, setTelChange] = useState('');
    const [dateChange, setDateChange] = useState('');
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        tel: '',
        date: '',
        email: '',
        password: '',
        cPassword: '',
    });
    const [passwordChange, setPasswordChange] = useState('');
    const [cPasswordChange, setCPasswordChange] = useState('');

    useEffect(() => {
        if (props.statusType === 'login') {
            props.setRegModal(false)
        }
    }, [props.statusType])

    const nameBlur = e => {
        if (e.target.value.length > 0) {
            setNameChange(e.target.value)
        } else {
            setNameChange('')
        }
    }

    const lastNameBlur = e => {
        if (e.target.value.length > 0) {
            setLastNameChange(e.target.value)
        } else {
            setLastNameChange('')
        }
    }

    const telBlur = e => {
        if (e.target.value.length > 0) {
            setTelChange(e.target.value)
        } else {
            setTelChange(false)
        }
    }

    const emailBlur = e => {
        if (e.target.value.length > 0) {
            setEmailChange(e.target.value)
        } else {
            setEmailChange('')
        }
    }

    const registration = () => {
        if(nameChange.length === 0) {
            setErrors(prevState => ({
                ...prevState,
                firstName: 'Required'
            }))
        } else {
            setErrors(prevState => ({
                ...prevState,
                firstName: ''
            }))
        }
        if(lastNameChange.length === 0) {
            setErrors(prevState => ({
                ...prevState,
                lastName: 'Required'
            }))
        } else {
            setErrors(prevState => ({
                ...prevState,
                lastName: ''
            }))
        }
        if(genderChange.length === 0) {
            setErrors(prevState => ({
                ...prevState,
                gender: 'Required'
            }))
        } else {
            setErrors(prevState => ({
                ...prevState,
                gender: ''
            }))
        }
        if(dateChange.length === 0) {
            setErrors(prevState => ({
                ...prevState,
                date: 'Required'
            }))
        } else {
            setErrors(prevState => ({
                ...prevState,
                date: ''
            }))
        }
        if(telChange.length === 0) {
            setErrors(prevState => ({
                ...prevState,
                tel: 'Required'
            }))
        } else {
            setErrors(prevState => ({
                ...prevState,
                tel: ''
            }))
        }
        if(emailChange.length === 0) {
            setErrors(prevState => ({
                ...prevState,
                email: 'Required'
            }))
        } else {
            setErrors(prevState => ({
                ...prevState,
                email: ''
            }))
        }
        if(passwordChange.length === 0) {
            setErrors(prevState => ({
                ...prevState,
                password: 'Required'
            }))
        } else {
            setErrors(prevState => ({
                ...prevState,
                password: ''
            }))
        }
        if(cPasswordChange.length === 0) {
            setErrors(prevState => ({
                ...prevState,
                cPassword: 'Required'
            }))
        } else {
            setErrors(prevState => ({
                ...prevState,
                cPassword: ''
            }))
        }
        if(passwordChange.length > 0 && cPasswordChange.length > 0) {
            if( passwordChange === cPasswordChange) {
                if(!errors.firstName.length && !errors.lastName.length && !errors.gender.length && !errors.date.length && !errors.tel.length && !errors.email.length) {
                    dispatch(register({nameChange, lastNameChange, genderChange, dateChange, telChange, emailChange, passwordChange}));
                    props.setRegModal(false)
                }
                setErrors(prevState => ({
                    ...prevState,
                    equal: ''
                }))
            } else  {
                setErrors(prevState => ({
                    ...prevState,
                    equal: 'not Equal'
                }))
            }
        }
    }

    return (
        <>
            {props.regModal
            &&
            <div className={s.registration}>
                <div className={s.urishban} onClick={() => props.setRegModal(false)}>
                </div>
                <div className={s.regend}>

                    <div className={s.reg2}>

                        <div className={s.container}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <h1 className={s.regh1}>
                                    Գրանցվել
                                </h1>
                                <span className={s.closeModal} onClick={() => props.setRegModal(false)}>X</span>
                            </div>
                            <div>
                                <form action="/" method="post" className={s.form}>
                                    <div className={s.contentFlex}>
                                        <div className={s.formDiv}>
                                            <input
                                                id='name'
                                                type="text"
                                                name='name'
                                                className={s.inputBorder}
                                                defaultValue={nameChange}
                                                onBlur={(event) => nameBlur(event)}
                                            />
                                            <label htmlFor="name"
                                                   className={`${s.label} ${nameChange ? s.focus : ''}`}>Անուն*</label><br/>
                                            {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
                                        </div>
                                        <div className={s.formDiv}>
                                            <input
                                                type="text"
                                                id='lastname'
                                                name='lastname'
                                                className={s.inputBorder}
                                                defaultValue={lastNameChange}
                                                onBlur={(event) => lastNameBlur(event)}
                                            />
                                            <label htmlFor="lastname"
                                                   className={`${s.label} ${lastNameChange ? s.focus : ''}`}>Ազգանուն*</label><br/>
                                            {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
                                        </div>
                                    </div>

                                    <div className={s.contentFlex}>
                                        <div className={s.formDiv}>
                                            <select name='Gender' id='gender' className={s.select}
                                                    onChange={(event) => setGenderChange(event.target.value)}>
                                                <option hidden disabled selected value></option>
                                                <option value="male">Արական</option>
                                                <option value="female">Իգական</option>
                                            </select>
                                            <label htmlFor="gender"
                                                   className={`${s.label} ${genderChange ? s.focus : ''}`}>Սեռը*</label>
                                            {errors.gender && <span style={{ color: 'red' }}>{errors.gender}</span>}
                                        </div>
                                        <div className={s.formDiv}>
                                            <input type='date' name='data' className={s.select} onChange={(event) => setDateChange(event.target.value)}/><br/>
                                            {errors.date && <span style={{ color: 'red'}}>{errors.date}</span>}
                                        </div>
                                    </div>

                                    <div className={s.formDiv} style={{marginTop: '45px'}}>
                                        <input
                                            name='tel'
                                            id='tel'
                                            type="number"
                                            className={s.inputBorder1}
                                            defaultValue={telChange}
                                            onBlur={(event) => telBlur(event)}
                                        />
                                        <label htmlFor="tel" className={`${s.label} ${telChange ? s.focus : ''}`}>Կոնտակտային
                                            հեռախոսահամար</label>
                                        <p className={s.textreg1}>Բժիշկը կզանգահարի Ձեզ հետ անհետաձգելի
                                            իրավիճակներում</p>
                                        {errors.tel && <span style={{ color: 'red' }}>{errors.tel}</span>}
                                    </div>

                                    <div className={s.formDiv} style={{marginTop: '45px'}}>
                                        <input
                                            name='email'
                                            id='email'
                                            type="email"
                                            className={s.inputBorder1}
                                            onBlur={(event) => emailBlur(event) }
                                        />
                                        <label htmlFor="email" className={`${s.label} ${emailChange ? s.focus : ''}`}>էլ․-հասցե*</label>
                                    </div>
                                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

                                    <PasswordShowHide
                                        password={passwordChange}
                                        setPasswordChange={setPasswordChange}
                                        title={'Գաղտնաբառ'}
                                    />
                                    {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}


                                    <PasswordShowHide
                                        password={cPasswordChange}
                                        setPasswordChange={setCPasswordChange}
                                        title={'Կրկնել գաղտնաբառը'}
                                    />
                                    <div>
                                        {errors.cPassword && <span style={{ color: 'red' }}>{errors.cPassword}</span>}
                                        {errors.equal && <span style={{ color: 'red' }}>{errors.equal}</span>}
                                    </div>

                                    <input id='labelcheck' className={s.checkbox} type="checkbox"/>
                                    <label className={s.check} htmlFor="labelcheck">Ես հաստատում եմ</label>
                                    <a className={s.linkReg} href="#">Օգտագործման դրույթները</a> <br/>
                                    <button className={s.submit} type='button' onClick={registration}>Գրանցվել</button>
                                </form>

                            </div>

                        </div>

                        <div className={s.regLogIn}>
                        <a href="" className={s.regLog}>Մուտք</a> <p>եթե գրանցված ես</p>
                        </div>


                    </div>
                </div>

            </div>
            }
        </>
    )
}

export default Registration;
