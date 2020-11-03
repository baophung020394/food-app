import axios from 'axios';
import { ALert, setAlert } from './alert';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';

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
        })
    } catch (err) {
        const errors = err;

        if (errors) {
            dispatch(setAlert('cai quan que', 'danger'))
            // console.log('errors', errors)
            // const arrError = errors;
            // arrError.forEach(error => 
            //     dispatch(setAlert(error.msg, 'danger'))
            //     // {console.log(error)}
            //     );
        }

        dispatch({
            type: LOGIN_FAIL,
        })
    }
}