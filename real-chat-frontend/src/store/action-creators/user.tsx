import { Dispatch } from "react";
import AuthService from "../../services/authService";
import UserService from "../../services/userService";
import { EnumUser, IUser, UserReducerAction } from "../../types/userType";

export const registration = (email: string, name: string, secondName: string, password: string) => {
    return async(dispatch: Dispatch<UserReducerAction>) => {
        try {
            dispatch({type: EnumUser.FETCH_AUTH})
            const {data} = await AuthService.registration(email, name, secondName, password)
            localStorage.setItem('token', data.accessToken)
            dispatch({type: EnumUser.FETCH_AUTH_SUCCESS, payload: data.user})
        }
        catch(e: any) {
            dispatch({
                type: EnumUser.FETCH_AUTH_REGISTER_ERROR,
                payload: e.response.data.message
            })
        }
    }
};

export const login = (email: string, password: string) => {
    return async(dispatch: Dispatch<UserReducerAction>) => {
        try {
            dispatch({type: EnumUser.FETCH_AUTH})
            const {data} = await AuthService.login(email, password)
            localStorage.setItem('token', data.accessToken)
            dispatch({type: EnumUser.FETCH_AUTH_SUCCESS, payload: data.user})
        }
        catch(e: any) {
            dispatch({
                type: EnumUser.FETCH_AUTH_LOGIN_ERROR,
                payload: e.response.data.message})
        }
    }
};

export const checkAuth = () => {
    return async(dispatch: Dispatch<UserReducerAction>) => {
        try {
            dispatch({type: EnumUser.FETCH_AUTH})
            const {data} = await AuthService.checkAuth()
            localStorage.setItem('token', data.accessToken)
            dispatch({type: EnumUser.FETCH_AUTH_SUCCESS, payload: data.user})
        }
        catch(e: any) {
            dispatch({
                type: EnumUser.FETCH_AUTH_ERROR,
                payload: e.response.data.message
            })
        }
    }
};

export const logout = () => {
    return async(dispatch: Dispatch<UserReducerAction>) => {
        try {
            dispatch({type: EnumUser.FETCH_AUTH})
            await AuthService.logout()
            localStorage.removeItem('token')
            dispatch({type: EnumUser.LOGOUT})
        }
        catch(e: any) {
            dispatch({
                type: EnumUser.FETCH_AUTH_ERROR,
                payload: e.response.data.message
            })
        }
    }
};

export const updateName = (name: string, secondName: string) => {
    return async(dispatch: Dispatch<UserReducerAction>) => {
        try {
            dispatch({type: EnumUser.FETCH_AUTH})
            const {data} = await UserService.updateName(name, secondName)
            dispatch({type: EnumUser.FETCH_AUTH_SUCCESS, payload: data})
        }
        catch(e: any) {
            dispatch({
                type: EnumUser.FETCH_AUTH_ERROR,
                payload: e.response.data.message
            })
        }
    }
};

export const updateAvatar = (avatar: FormData) => {
    return async(dispatch: Dispatch<UserReducerAction>) => {
        try {
            dispatch({type: EnumUser.FETCH_AUTH})
            const {data} = await UserService.updateAvatar(avatar)
            dispatch({type: EnumUser.FETCH_AUTH_SUCCESS, payload: data})
        }
        catch(e: any) {
            dispatch({
                type: EnumUser.FETCH_AUTH_ERROR,
                payload: e.response.data.message
            })
        }
    }
};