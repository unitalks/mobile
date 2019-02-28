import * as types from '../types'
import autServices from '../../api/auth'
import {AsyncStorage} from "react-native";

export const emailChanged = (text) => {
    return {
        type: types.EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (password) => {
    return {
        type: types.PASSWORD_CHANGED,
        payload: password
    };
};

export const loginUser = (data) => {
    return (dispatch) => {
        return autServices.login(data)
            .then(response => {
                let success = true;
                dispatch({type: types.LOGIN_USER, payload: response.data.access_token});
                // use as callback when user login is success
                return Promise.resolve(success)
            })
    }
};

export const registerUser = (data) => {
    console.log('register data', data)
    return (dispatch) => {
        autServices.register(data).then(response => {
            let success = true;
            dispatch({type: types.REGISTER_USER, payload: data.is_driver})
            return Promise.resolve(success)
        })
            .catch(error => console.log('register error', error.response))
    }
};


export async function isAuth() {
    let token = await AsyncStorage.getItem('access_token');
    return !!token;
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({type: types.SUCCESS_LOGIN, payload: user})
}

const loginUserFail = (dispatch) => {
    dispatch({type: types.FAILED_LOGIN})
}