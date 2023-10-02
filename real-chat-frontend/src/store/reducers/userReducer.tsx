import { EnumUser, IState, UserReducerAction } from "../../types/userType";

const defaultState: IState = {
    isAuth: false,
    isLoading: false,
    error: null,
    registerError: null,
    loginError: null,
    user: null
};

export const userReducer = (state = defaultState, action: UserReducerAction): IState => {
    switch(action.type) {
        case EnumUser.FETCH_AUTH:
            return {...state, isLoading: true }
        case EnumUser.FETCH_AUTH_SUCCESS:
            return {...state, isAuth: true, isLoading: false, user: action.payload }
        case EnumUser.FETCH_AUTH_ERROR:
            return {...state, isLoading: false, error: action.payload }
        case EnumUser.FETCH_AUTH_REGISTER_ERROR:
            return {...state, isLoading: false, registerError: action.payload }
        case EnumUser.FETCH_AUTH_LOGIN_ERROR:
            return {...state, isLoading: false, loginError: action.payload }
        case EnumUser.LOGOUT:
            return {...state, isLoading: false, isAuth: false, user: null}
        default:
            return state
    }
};