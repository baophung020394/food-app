import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../actions/types';

const initialState = {
    loading: true
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false
            }
        default: 
            return state
    }
}