import AuthService from "../../services/authService";
import { FETCH_AUTH, FETCH_AUTH_ERROR, FETCH_AUTH_LOGIN_ERROR, FETCH_AUTH_REGISTER_ERROR, FETCH_AUTH_SUCCESS, LOGOUT } from "../reducers/userReducer";

export function registration(email, name, secondName, password) {
    return async(dispatch) => {
        try {
            dispatch({type: FETCH_AUTH})
            const {data} = await AuthService.registration(email, name, secondName, password)
            localStorage.setItem('token', data.accessToken)
            dispatch({type: FETCH_AUTH_SUCCESS, payload: data})
        }
        catch(e) {
            dispatch({
                type: FETCH_AUTH_REGISTER_ERROR,
                payload: e.response.data.message
            })
        }
    }
};

export function login(email, password) {
    return async(dispatch) => {
        try {
            dispatch({type: FETCH_AUTH})
            const {data} = await AuthService.login(email, password)
            localStorage.setItem('token', data.accessToken)
            dispatch({type: FETCH_AUTH_SUCCESS, payload: data})
        }
        catch(e) {
            dispatch({
                type: FETCH_AUTH_LOGIN_ERROR,
                payload: e.response.data.message})
        }
    }
};

export function checkAuth() {
    return async(dispatch) => {
        try {
            dispatch({type: FETCH_AUTH})
            const {data} = await AuthService.checkAuth()
            localStorage.setItem('token', data.accessToken)
            dispatch({type: FETCH_AUTH_SUCCESS, payload: data})
        }
        catch(e) {
            dispatch({
                type: FETCH_AUTH_ERROR,
                payload: e.response.data.message
            })
        }
    }
};

export function logout() {
    return async(dispatch) => {
        try {
            dispatch({type: FETCH_AUTH})
            await AuthService.logout()
            localStorage.removeItem('token')
            dispatch({type: LOGOUT})
        }
        catch(e) {
            dispatch({
                type: FETCH_AUTH_ERROR,
                payload: e.response.data.message
            })
        }
    }
};