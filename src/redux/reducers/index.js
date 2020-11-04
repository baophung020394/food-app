import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';

// action -> reducer -> store -> View
export default combineReducers({
    alert,
    auth,
    profile
});

