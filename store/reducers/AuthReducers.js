import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER, REGISTER_USER
} from '../types';
import {AsyncStorage} from "react-native";

const INITIAL_STATE = {
    email: '',
    password: '',
    is_driver: null,
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_USER:
            AsyncStorage.setItem('access_token', JSON.stringify(action.payload));
            return {...state, loading: true, error: ''};
        case REGISTER_USER:
            return {...state, is_driver: action.payload};
        case LOGIN_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.payload};
        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication Failed.', password: '', loading: false};
        default:
            return state;
    }
}