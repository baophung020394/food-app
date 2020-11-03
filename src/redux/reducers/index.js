import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';

// action -> reducer -> store -> View
export default combineReducers({
    alert,
    auth
});

