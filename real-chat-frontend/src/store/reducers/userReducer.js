const defaultState = {
    isAuth: false,
    isLoading: false,
    error: null,
    registerError: null,
    loginError: null,
    user: {}
};

export const FETCH_AUTH = 'FETCH_AUTH';
export const FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS';
export const FETCH_AUTH_ERROR = 'FETCH_AUTH_ERROR'
export const FETCH_AUTH_REGISTER_ERROR = 'FETCH_AUTH_REGISTER_ERROR';
export const FETCH_AUTH_LOGIN_ERROR = 'FETCH_AUTH_LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export function userReducer(state = defaultState, action) {
    switch(action.type) {
        case FETCH_AUTH:
            return {...state, isLoading: true }
        case FETCH_AUTH_SUCCESS:
            return {...state, isAuth: true, isLoading: false, user: action.payload }
        case FETCH_AUTH_ERROR:
            return {...state, isLoading: false, error: action.payload }
        case FETCH_AUTH_REGISTER_ERROR:
            return {...state, isLoading: false, registerError: action.payload }
        case FETCH_AUTH_LOGIN_ERROR:
            return {...state, isLoading: false, loginError: action.payload }
        case LOGOUT:
            return {...state, isLoading: false, isAuth: false, user: {}}
        default:
            return state
    }
};