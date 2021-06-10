import {userApi} from "../../Api/Api";
import axios from 'axios';

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

export const login = (data) => {
    return dispatch => {
        userApi.login(data.email, data.password)
            .then(res => {
                if(res.userId) {
                    setSession(res.token)
                    dispatch({
                        type: LOGIN,
                    })
                }
            })
    }
}

export const register = (data) => {
    return dispatch => {
        userApi.register(data)
            .then(res => {
                dispatch({
                    type: REGISTER,
                    payload: res
                })
            })
    }
}

export const setSession = access_token => {
    if(access_token) {
        localStorage.setItem('jwt_access_token', access_token);
        document.cookie = `imagesaver_logged_in_user_data=${access_token}; max-age=3600; path=/`;
        // axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    } else {
        localStorage.removeItem('jwt_access_token');
        document.cookie = `imagesaver_logged_in_user_data=${access_token}; max-age=0; path=/`;
        delete axios.defaults.headers.common.Authorization;
    }
}
