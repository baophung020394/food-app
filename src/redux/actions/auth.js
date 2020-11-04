import axios from 'axios';
import { ALert, setAlert } from './alert';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT
} from './types';
import setAuthToken from '../../utils/setAuthToken';

export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try {
        const res = await axios.get(`http://localhost:5000/api/auth`);
        console.log('The co get dc k?')
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {

        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => {
                dispatch(setAlert(error.msg, 'danger'))
            })
        }

        dispatch({
            type: AUTH_ERROR
        })

    }
}
export const register = ({ name, fullname, email, role, address, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, fullname, email, role, address, password });

    try {
        const res = await axios.post('http://localhost:5000/api/users', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            console.log('vo errors', errors)
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
}


export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`http://localhost:5000/api/auth`, body, config);
        console.log(res)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            console.log('vo errors', errors)
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: LOGIN_FAIL,
        })
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}