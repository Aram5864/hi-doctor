import React, {useState} from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Registration from './Components/Registration/Registration';
import AskTheDoctor from '../src/AskTheDoctor/AskTheDoctor';
import Howtouse from './Components/HowToUse/Howtouse';
import Header from './Components/Header/Header';
import HomePage from './Components/Homepage/Homepage';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Cooperation from '../src/Cooperation/Cooperation'
import Use from '../src/Use/Use';
import Chat from './Chat/chat'
import {useSelector} from "react-redux";
import MedicalSheet from './Chat/medicalSheet/medicalSheet'
import Personalinformation from './Chat/Personalinformation/Personalinformation'
function App() {
    const [regModal, setRegModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);

    const statusType = useSelector(state => state.authReducer.statusType);
    const message = useSelector(state => state.authReducer.message);
    const user = useSelector(state => state.authReducer.user);


    return (
        <BrowserRouter>
            <Header
                setRegModal={setRegModal}
                setLoginModal={setLoginModal}
                user={user}
            />
            <Registration
                regModal={regModal}
                setRegModal={setRegModal}
                statusType={statusType}
                message={message}
            />
            <Login
                loginModal={loginModal}
                setLoginModal={setLoginModal}
                statusType={statusType}
                message={message}
            />
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path="/Howtouse" component={Howtouse}/>
                <Route path='/Cooperation' component={Cooperation}/>
                <Route path='/AskTheDoctor' component={AskTheDoctor}/>
                <Route path='/Use' component={Use}/>
                <Route path='/Chat' component={Chat}/>
                <Route path='/medicalSheet' component={MedicalSheet}/>
                <Route path='/Personalinformation' component={Personalinformation}/>
            </Switch>
            <Footer/>
        </BrowserRouter>

    )

}

export default App;
