import React from "react";
import axios from "axios";
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt_access_token')}`;

const Api = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL
});

export const userApi = {
    login(email, password) {
        return (
            Api.post(`/patient/patientAuth/signIn`, {email, password})
                .then(response => {
                    return response.data
                })
        )
    },
    register(data) {
        return (
            Api.post(`/patient/patientAuth/registration`, {
                firstName: data.nameChange,
                lastName: data.lastNameChange,
                gender: data.genderChange,
                age: data.dateChange,
                phoneNumber: data.telChange,
                email: data.emailChange,
                password: data.passwordChange
            })
                .then(response => {
                    return response.data
                })
        )
    },
}
